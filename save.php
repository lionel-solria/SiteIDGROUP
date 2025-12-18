<?php
// save.php - Script de sauvegarde pour PicoCMS

// CONFIGURATION
$ADMIN_PASSWORD = "monmotdepasse"; // Le mot de passe demandé

// Configuration des headers pour autoriser les requêtes JSON
header('Content-Type: text/plain; charset=utf-8');

// Récupération des données envoyées par le Javascript
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Vérification de base
if (!$data) {
    http_response_code(400);
    echo "Erreur : Aucune donnée reçue.";
    exit;
}

// Vérification du mot de passe
$userPassword = isset($data['password']) ? $data['password'] : '';

if ($userPassword !== $ADMIN_PASSWORD) {
    http_response_code(403);
    echo "Erreur : Mot de passe incorrect.";
    exit;
}

$action = isset($data['action']) ? $data['action'] : 'save';

// Chemins PicoCMS
$baseDir = __DIR__;
// Récupération du fichier cible depuis la requête JSON ou par défaut 'index.html'
$targetFilename = isset($data['file']) ? basename($data['file']) : 'index.html';
// Validation stricte du nom de fichier (uniquement lettres, chiffres, tirets, points, underscores)
// et doit se terminer par .html
if (!preg_match('/^[a-zA-Z0-9._-]+\.html$/', $targetFilename)) {
    http_response_code(400);
    echo "Erreur : Nom de fichier invalide.";
    exit;
}

$indexFile = $baseDir . '/' . $targetFilename;
if (!file_exists($indexFile) && $action !== 'save') {
    // Si on essaie d'agir sur un fichier qui n'existe pas (sauf pour le créer via save)
    http_response_code(404);
    echo "Erreur : Fichier cible introuvable.";
    exit;
}

$picoDir = $baseDir . '/picocms';
$versionDir = $picoDir . '/versions'; // Toujours défini mais potentiellement moins utilisé si on stocke à la racine
$activeBodyFile = $picoDir . '/active.txt';
$activeVersionFile = $picoDir . '/active-version.txt';

function ensureDirectory($path) {
    if (!is_dir($path)) {
        mkdir($path, 0777, true);
    }
}

function createBackup($sourceFile) {
    $timestamp = date('Ymd-His');
    $pathInfo = pathinfo($sourceFile);
    // Format requis: nom-YYYYMMDD-HHMMSS.html
    // Note: PHP date 'His' donne HHMMSS
    $backupFile = $pathInfo['dirname'] . '/' . $pathInfo['filename'] . "-{$timestamp}." . $pathInfo['extension'];

    if (!file_exists($sourceFile)) {
        return [false, "Aucun fichier source à sauvegarder."];
    }

    if (!copy($sourceFile, $backupFile)) {
        return [false, "Impossible de créer la sauvegarde $backupFile."];
    }

    return [true, $backupFile];
}

function sanitizeVersionPath($baseDir, $requested) {
    $basename = basename($requested);
    $target = $baseDir . '/' . $basename;
    // On vérifie que c'est bien un fichier .html et qu'il existe
    return (is_file($target) && pathinfo($target, PATHINFO_EXTENSION) === 'html') ? $target : null;
}

function listVersions($baseDir, $targetFilename) {
    $versions = [];
    $targetBase = pathinfo($targetFilename, PATHINFO_FILENAME);

    // Pattern: targetBase-YYYYMMDD-HHMMSS.html
    $pattern = $baseDir . '/' . $targetBase . '-*.html';

    foreach (glob($pattern) as $file) {
        $basename = basename($file);

        // On s'assure que c'est bien un backup et pas un autre fichier qui commence pareil
        // Regex pour extraire timestamp: nom-(\d{8}-\d{6}).html
        // Le tiret avant le timestamp est ajouté par createBackup
        if (preg_match('/' . preg_quote($targetBase, '/') . '-(\d{8}-\d{6})\.html$/', $basename, $matches)) {
            $timestamp = $matches[1];

            // Format lisible du timestamp
            $date = DateTime::createFromFormat('Ymd-His', $timestamp);
            $niceDate = $date ? $date->format('d/m/Y H:i:s') : $timestamp;

            $versions[] = [
                'file' => $basename,
                'timestamp' => $niceDate,
                'raw_timestamp' => $timestamp, // Pour le tri
                'size' => filesize($file),
                'isActive' => false // Concept d'active moins pertinent ici (on travaille sur le fichier courant)
            ];
        }
    }

    usort($versions, function($a, $b) {
        return strcmp($b['raw_timestamp'], $a['raw_timestamp']); // Plus récent en premier
    });

    return $versions;
}

ensureDirectory($picoDir);
ensureDirectory($versionDir);

// ACTION 1 : sauvegarde simple avant édition
if ($action === 'backup') {
    list($ok, $message) = createBackup($indexFile);
    if ($ok) {
        echo "Sauvegarde initiale créée : $message";
    } else {
        http_response_code(500);
        echo "Erreur serveur : $message";
    }
    exit;
}

// ACTION 2 : lister les versions PicoCMS (Backups du fichier courant)
if ($action === 'list_versions') {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['versions' => listVersions($baseDir, $targetFilename)]);
    exit;
}

// ACTION 3 : supprimer une version
if ($action === 'delete_version') {
    $version = isset($data['version']) ? $data['version'] : '';
    // Sécurité: on vérifie que la version correspond bien au fichier cible (pour ne pas supprimer n'importe quoi)
    // Le nom de la version doit commencer par le nom du fichier cible sans extension
    $targetBase = pathinfo($targetFilename, PATHINFO_FILENAME);
    if (strpos($version, $targetBase . '-') !== 0) {
         http_response_code(403);
         echo "Interdit : Cette version ne correspond pas au fichier courant.";
         exit;
    }

    $target = sanitizeVersionPath($baseDir, $version);
    if (!$target) {
        http_response_code(404);
        echo "Version introuvable.";
        exit;
    }

    if (!unlink($target)) {
        http_response_code(500);
        echo "Impossible de supprimer le fichier.";
        exit;
    }

    echo "Version supprimée : " . basename($target);
    exit;
}

// ACTION 4 : activer une version existante (Restaurer)
if ($action === 'activate_version') {
    $version = isset($data['version']) ? $data['version'] : '';
    $targetBackup = sanitizeVersionPath($baseDir, $version);

    if (!$targetBackup) {
        http_response_code(404);
        echo "Version introuvable.";
        exit;
    }

    // On écrase le fichier courant avec le backup
    if (!copy($targetBackup, $indexFile)) {
        http_response_code(500);
        echo "Impossible de restaurer la version.";
        exit;
    }

    echo "Version restaurée avec succès sur $targetFilename.";
    exit;
}

// ACTION 5 : désactiver la surcouche PicoCMS
if ($action === 'disable_picocms') {
    @unlink($activeBodyFile);
    @unlink($activeVersionFile);
    echo "Mode PicoCMS désactivé : aucun override actif.";
    exit;
}

// Vérification du contenu HTML uniquement pour l'action de sauvegarde
if ($action === 'save' && (!isset($data['html']) || empty($data['html']))) {
    http_response_code(400);
    echo "Erreur : Le contenu HTML est vide.";
    exit;
}

// SAUVEGARDE
// On crée une sauvegarde horodatée avant d'écraser index.html (si le fichier existe)
$backupName = '';
$backupMessage = '';

if (file_exists($indexFile)) {
    list($saved, $backupMessage) = createBackup($indexFile);
    if (!$saved) {
        http_response_code(500);
        echo "Erreur serveur : $backupMessage";
        exit;
    }
    $backupName = basename($backupMessage);
} else {
    $backupMessage = "Aucun index.html existant : création forcée sans archive.";
}

// Écriture du nouveau contenu
// Note : Assurez-vous que index.html a les permissions d'écriture (CHMOD 644 ou 666 sur Linux/cPanel)
$bytes = file_put_contents($indexFile, $data['html'], LOCK_EX);

if ($bytes === false) {
    http_response_code(500);
    echo "Erreur serveur : Impossible d'écrire le fichier. Vérifiez les permissions.";
    exit;
}

$message = $backupName
    ? "Sauvegarde réussie : fichier archive {$backupName} sauvegardé, fichier index.html mis à jour ({$bytes} octets)."
    : "Sauvegarde réussie : fichier index.html créé/mis à jour ({$bytes} octets).";

if ($action === 'save') {
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'message' => $message,
        'bytes' => $bytes,
        'backup' => $backupName ?: null,
        'notice' => $backupMessage
    ]);
    exit;
}

echo $message;
?>
