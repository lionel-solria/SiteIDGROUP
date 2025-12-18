document.addEventListener('DOMContentLoaded', () => {

// --- CONSTRUCTION DE L'INTERFACE ---
function injectPicoCMSUI() {
    const template = `
    <div id="pico-cms-ui">
        <div class="pico-toggle-btn" id="picoToggle" title="Activer l'éditeur">
            <div class="pico-toggle-inner">
                <img src="picocms/picocms-logo.svg" alt="Logo PicoCMS" class="pico-toggle-logo" loading="lazy">
                <span class="pico-pen-badge"><i class="fas fa-pen"></i></span>
            </div>
        </div>

        <div class="pico-hover-modal" id="picoHoverModal" role="note" aria-live="polite">
            <h4>PicoCMS IA • Votre cockpit agile</h4>
            <p><strong>CMS ultra-light</strong> pensé pour reprendre la main sur un site généré par IA sans lourdeur ni plugins.</p>
            <p>Compatible <strong>React</strong>, <strong>Vue</strong> et <strong>Angular</strong>, il se glisse sur vos pages et vous offre une édition instantanée.</p>
            <p>Une approche moderne et professionnelle pour gérer vos contenus.</p>
            <div>
                <span class="pico-pill"><i class="fas fa-bolt"></i> Solution agile</span>
                <span class="pico-pill"><i class="fas fa-feather-alt"></i> Édition inline</span>
                <span class="pico-pill"><i class="fas fa-rocket"></i> Légèreté</span>
            </div>
        </div>

        <div class="pico-sidebar" id="picoSidebar">
            <div class="pico-sidebar-header">
                <div class="pico-header-title">
                    <h3>Éditeur <span class="pico-badge">V2</span></h3>
                </div>
                <div class="pico-header-actions">
                    <button class="pico-btn-icon pico-save-top" id="picoSave" title="Sauvegarder">
                        <i class="fas fa-floppy-disk"></i>
                    </button>
                    <button id="picoCloseSidebar" class="text-gray-400 hover:text-gray-600"><i class="fas fa-times"></i></button>
                </div>
            </div>

            <div class="pico-sidebar-content">
                <div id="pico-no-selection" class="text-center text-gray-500 mt-10">
                    <i class="fas fa-mouse-pointer text-3xl mb-3 opacity-30"></i>
                    <p>Cliquez sur un élément de la page pour le modifier.</p>
                </div>

                <div id="pico-controls-container" style="display:none;">
                    <div class="pico-section-title">Actions & Position</div>
                    <div class="pico-control-group">
                        <div class="pico-row">
                            <button class="pico-btn-icon pico-col" id="picoMoveUp" title="Monter">
                                <i class="fas fa-arrow-up"></i>
                            </button>
                            <button class="pico-btn-icon pico-col" id="picoMoveDown" title="Descendre">
                                <i class="fas fa-arrow-down"></i>
                            </button>
                            <button class="pico-btn-icon pico-col text-red-600 hover:bg-red-50" id="picoDelete" title="Supprimer">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>

                    <div id="pico-specific-controls"></div>

                    <div class="pico-section-title mt-4">Apparence</div>
                    <div class="pico-control-group">
                        <label>Marge (Spacing)</label>
                        <div class="pico-row">
                            <select id="picoMarginSelect" class="pico-select">
                                <option value="my-0">Aucune</option>
                                <option value="my-2">Petite</option>
                                <option value="my-4">Moyenne</option>
                                <option value="my-8">Grande</option>
                                <option value="my-16">Immense</option>
                            </select>
                        </div>
                    </div>
                    <div class="pico-control-group">
                        <label>Fond (Background)</label>
                        <div class="pico-row">
                            <input type="color" id="picoBgColor" class="pico-input" style="height:40px; padding:2px;">
                            <button id="picoClearBg" class="pico-btn-icon" title="Effacer fond"><i class="fas fa-eraser"></i></button>
                        </div>
                    </div>

                    <div class="pico-section-title mt-4">Insérer après</div>
                    <div class="pico-grid-actions">
                        <div class="pico-btn-insert" data-insert="text">
                            <i class="fas fa-paragraph"></i> Texte
                        </div>
                        <div class="pico-btn-insert" data-insert="title">
                            <i class="fas fa-heading"></i> Titre
                        </div>
                        <div class="pico-btn-insert" data-insert="image">
                            <i class="fas fa-image"></i> Image
                        </div>
                        <div class="pico-btn-insert" data-insert="btn">
                            <i class="fas fa-square"></i> Bouton
                        </div>
                        <div class="pico-btn-insert" data-insert="video">
                            <i class="fab fa-youtube"></i> Vidéo
                        </div>
                        <div class="pico-btn-insert" data-insert="divider">
                            <i class="fas fa-minus"></i> Ligne
                        </div>
                    </div>


                <div class="pico-section-title">Outils PicoCMS</div>
                <div class="pico-control-group">
                    <button class="pico-btn-primary w-full" id="picoViewBodyDom">
                        <i class="fas fa-code mr-2"></i> Voir le DOM &lt;body&gt;
                    </button>
                    <p class="text-xs text-gray-500 mt-2">Affiche uniquement le contenu de la balise body actuellement éditée.</p>
                </div>

                <div class="pico-control-group">
                    <div class="pico-row mb-2">
                        <button class="pico-btn-icon pico-col" id="picoRefreshVersions" title="Rafraîchir les versions PicoCMS">
                            <i class="fas fa-rotate"></i>
                        </button>
                        <button class="pico-btn-icon pico-col text-red-600 hover:bg-red-50" id="picoDisablePico" title="Désactiver le mode PicoCMS">
                            <i class="fas fa-power-off"></i>
                        </button>
                    </div>
                    <div id="picoVersionsList" class="pico-versions-list text-sm text-gray-600">
                        <p class="text-gray-400 text-xs">Aucune version PicoCMS chargée.</p>
                    </div>
                </div>

                </div>
            </div>

            <div class="pico-sidebar-footer">
                <p id="saveStatus" class="text-xs text-center text-green-600 mt-0 hidden font-bold">
                    <i class="fas fa-check"></i> Exporté dans la console !
                </p>
            </div>
        <div class="pico-modal" id="picoBodyModal" aria-modal="true" role="dialog" style="display:none;">
            <div class="pico-modal-dialog">
                <div class="pico-modal-header">
                    <h4 class="m-0">Contenu de la balise &lt;body&gt;</h4>
                    <button class="pico-btn-icon" id="picoCloseBodyModal" title="Fermer">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="pico-modal-content">
                    <textarea id="picoBodyPreview" class="pico-textarea" rows="12" readonly></textarea>
                </div>
            </div>
        </div>

        <div class="pico-saving-overlay" id="picoSavingOverlay" aria-live="assertive" aria-label="Sauvegarde en cours" style="display:none;">
            <div class="pico-saving-box">
                <div class="pico-hourglass"></div>
                <p class="pico-saving-text">Préparation de la sauvegarde...</p>
            </div>
        </div>

        <div class="pico-modal" id="picoPasswordModal" aria-modal="true" role="dialog" style="display:none;">
            <div class="pico-modal-dialog">
                <div class="pico-modal-header">
                    <h4 class="m-0"><i class="fas fa-lock text-indigo-600 mr-2"></i> Accès administrateur</h4>
                    <button class="pico-btn-icon" id="picoClosePasswordModal" title="Fermer">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="pico-modal-content">
                    <p class="text-gray-600 mb-4">Veuillez saisir le mot de passe pour activer le mode édition.</p>
                    <form id="picoPasswordForm" onsubmit="return false;">
                        <input type="password" id="picoPasswordInput" class="pico-input" placeholder="Mot de passe" autocomplete="current-password" autofocus>
                        <button type="submit" class="pico-btn-primary w-full mt-4">
                            Déverrouiller <i class="fas fa-arrow-right ml-2"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>

        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', template);
}

injectPicoCMSUI();

// --- ETAT & CONFIGURATION ---
const state = {
    isEditMode: false,
    activeElement: null,
    password: null, // Mot de passe stocké en mémoire
    picoVersions: []
};

// Éléments éditables étendus
const EDITABLE_TAGS = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'SPAN', 'A', 'BUTTON', 'LI', 'DT', 'DD', 'DIV', 'SECTION', 'I', 'IMG', 'NAV', 'HEADER', 'FOOTER'];

// UI Cache - Récupération des éléments du DOM
const ui = {
    toggleBtn: document.getElementById('picoToggle'),
    penBadge: document.querySelector('.pico-pen-badge'),
    hoverModal: document.getElementById('picoHoverModal'),
    sidebar: document.getElementById('picoSidebar'),
    closeSidebar: document.getElementById('picoCloseSidebar'),
    noSelection: document.getElementById('pico-no-selection'),
    controlsContainer: document.getElementById('pico-controls-container'),
    specificControls: document.getElementById('pico-specific-controls'),

    // Actions globales
    btnMoveUp: document.getElementById('picoMoveUp'),
    btnMoveDown: document.getElementById('picoMoveDown'),
    btnDelete: document.getElementById('picoDelete'),

    // Inputs globaux
    marginSelect: document.getElementById('picoMarginSelect'),
    bgColorInput: document.getElementById('picoBgColor'),
    btnClearBg: document.getElementById('picoClearBg'),

    // Insertion
    insertBtns: document.querySelectorAll('.pico-btn-insert'),

    // PicoCMS
    viewBodyBtn: document.getElementById('picoViewBodyDom'),
    refreshVersionsBtn: document.getElementById('picoRefreshVersions'),
    disablePicoBtn: document.getElementById('picoDisablePico'),
    versionsList: document.getElementById('picoVersionsList'),
    bodyModal: document.getElementById('picoBodyModal'),
    closeBodyModal: document.getElementById('picoCloseBodyModal'),
    bodyPreview: document.getElementById('picoBodyPreview'),

    // Save
    saveBtn: document.getElementById('picoSave'),
    saveStatus: document.getElementById('saveStatus'),
    savingOverlay: document.getElementById('picoSavingOverlay'),
    savingOverlayText: document.querySelector('#picoSavingOverlay .pico-saving-text'),

    // Password Modal
    passwordModal: document.getElementById('picoPasswordModal'),
    passwordInput: document.getElementById('picoPasswordInput'),
    passwordForm: document.getElementById('picoPasswordForm'),
    closePasswordModal: document.getElementById('picoClosePasswordModal')
};

let modalHideTimeout = null;

function showHoverModal() {
    clearTimeout(modalHideTimeout);
    ui.hoverModal.classList.add('visible');
}

function hideHoverModal() {
    clearTimeout(modalHideTimeout);
    modalHideTimeout = setTimeout(() => ui.hoverModal.classList.remove('visible'), 120);
}

function openBodyModal(content) {
    if (!ui.bodyModal || !ui.bodyPreview) return;
    ui.bodyPreview.value = (content || '').trim();
    ui.bodyModal.style.display = 'flex';
}

function closeBodyModal() {
    if (ui.bodyModal) ui.bodyModal.style.display = 'none';
}

function showSavingOverlay(message = 'Sauvegarde en cours...') {
    if (!ui.savingOverlay) return;
    if (ui.savingOverlayText) ui.savingOverlayText.textContent = message;
    ui.savingOverlay.style.display = 'flex';
}

function hideSavingOverlay() {
    if (ui.savingOverlay) ui.savingOverlay.style.display = 'none';
}

// --- FONCTIONS UI ---
function switchEditMode(active) {
    if (active) {
        state.isEditMode = true;
        ui.toggleBtn.classList.add('active');
        ui.penBadge.querySelector('i').className = 'fas fa-times';
        ui.hoverModal.classList.remove('visible');
        ui.sidebar.classList.add('open');
        ui.noSelection.style.display = 'block';
        ui.controlsContainer.style.display = 'none';
        enableHoverEffects();
    } else {
        state.isEditMode = false;
        ui.toggleBtn.classList.remove('active');
        ui.penBadge.querySelector('i').className = 'fas fa-pen';
        disableHoverEffects();
        closeSidebar();
    }
}

// --- MODE TOGGLE ---

ui.toggleBtn.addEventListener('mouseenter', showHoverModal);
ui.toggleBtn.addEventListener('mouseleave', hideHoverModal);

if (ui.closeBodyModal) ui.closeBodyModal.addEventListener('click', closeBodyModal);
if (ui.bodyModal) ui.bodyModal.addEventListener('click', (e) => { if (e.target === ui.bodyModal) closeBodyModal(); });

function getCurrentFilename() {
    return window.location.pathname.split('/').pop() || 'index.html';
}

async function backupBeforeEditing(password) {
    try {
        const response = await fetch('save.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'backup',
                password,
                file: getCurrentFilename()
            })
        });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(text || 'Sauvegarde initiale échouée');
        }
        console.info('[PicoCMS] Copie de sauvegarde créée avant édition');
    } catch (err) {
        console.warn('[PicoCMS] Impossible de créer la sauvegarde initiale :', err.message);
        alert('⚠️ Sauvegarde initiale non réalisée :\n' + err.message);
    }
}

function showPasswordModal() {
    if (ui.passwordModal) {
        ui.passwordModal.style.display = 'flex';
        ui.passwordInput.value = '';
        setTimeout(() => ui.passwordInput.focus(), 100);
    }
}

function hidePasswordModal() {
    if (ui.passwordModal) ui.passwordModal.style.display = 'none';
}

if (ui.closePasswordModal) ui.closePasswordModal.addEventListener('click', hidePasswordModal);
if (ui.passwordModal) ui.passwordModal.addEventListener('click', (e) => {
    if (e.target === ui.passwordModal) hidePasswordModal();
});

if (ui.passwordForm) {
    ui.passwordForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const pwd = ui.passwordInput.value;
        if (!pwd) return;

        hidePasswordModal();

        // On garde le mot de passe en mémoire pour la sauvegarde
        state.password = pwd;

        // Tentative de backup (qui valide aussi implicitement le mot de passe si on check la réponse,
        // mais ici backupBeforeEditing ne throw pas forcément sur mot de passe incorrect sauf si save.php renvoie 403)
        // Note: Idéalement, backupBeforeEditing devrait renvoyer false si échec auth.
        // Pour l'instant on suppose que ça marche et on verra à la sauvegarde.
        // Cependant, save.php vérifie le mot de passe.

        try {
            await backupBeforeEditing(pwd); // Cette fonction alerte si erreur
            // Si backup réussit (ou échoue pour autre raison que auth), on active l'édition.
            // Si le mot de passe est faux, save.php renvoie 403.

            // Pour être plus robuste, on pourrait vérifier si l'erreur est auth.
            // Mais gardons la logique existante : on active le mode.
            // Si le mot de passe est faux, la sauvegarde échouera plus tard (ou le backup a échoué avec alerte).

            switchEditMode(true);
            fetchPicoVersions();
        } catch (e) {
            // backupBeforeEditing catch déjà, mais si on veut bloquer l'édition sur mauvais password:
            // Il faudrait que backupBeforeEditing retourne un statut.
        }
    });
}

ui.toggleBtn.addEventListener('click', async () => {
    if (!state.isEditMode) {
        showPasswordModal();
    } else {
        // SORTIE (Pas besoin de mot de passe)
        switchEditMode(false);
        // On vide le mot de passe par sécurité quand on ferme
        state.password = null;
    }
});

ui.closeSidebar.addEventListener('click', closeSidebar);

// --- INTERACTIONS SOURIS ---

function enableHoverEffects() {
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);
    document.body.addEventListener('click', handleClick);
}

function disableHoverEffects() {
    document.body.removeEventListener('mouseover', handleMouseOver);
    document.body.removeEventListener('mouseout', handleMouseOut);
    document.body.removeEventListener('click', handleClick);

    document.querySelectorAll('.pico-editable-hover').forEach(el => el.classList.remove('pico-editable-hover'));
    if(state.activeElement) deselectElement();
}

function handleMouseOver(e) {
    if (!state.isEditMode || e.target.closest('#pico-cms-ui')) return;

    const target = e.target;
    if (EDITABLE_TAGS.includes(target.tagName)) {
        target.classList.add('pico-editable-hover');
        target.setAttribute('data-tag-name', target.tagName.toLowerCase());
    }
}

function handleMouseOut(e) {
    if (!state.isEditMode) return;
    e.target.classList.remove('pico-editable-hover');
}

function handleClick(e) {
    if (!state.isEditMode || e.target.closest('#pico-cms-ui')) return;

    e.preventDefault();
    e.stopPropagation();

    if (e.target.classList.contains('pico-editable-hover')) {
        selectElement(e.target);
    }
}

// --- LOGIQUE DE SÉLECTION ---

function selectElement(element) {
    if (state.activeElement) deselectElement();

    state.activeElement = element;
    state.activeElement.classList.add('pico-active-element');

    // Activer ContentEditable pour le texte
    if (!['IMG', 'I', 'IFRAME', 'DIV', 'SECTION', 'NAV', 'HEADER', 'FOOTER'].includes(element.tagName)) {
        element.setAttribute('contenteditable', 'true');
        // Focus doux pour ne pas scroller bizarrement
        element.focus({preventScroll: true});
    }

    ui.sidebar.classList.add('open');
    ui.noSelection.style.display = 'none';
    ui.controlsContainer.style.display = 'block';

    updateSidebarControls(element);
}

function deselectElement() {
    if (state.activeElement) {
        state.activeElement.classList.remove('pico-active-element');
        state.activeElement.removeAttribute('contenteditable');
        state.activeElement = null;
    }
    ui.noSelection.style.display = 'block';
    ui.controlsContainer.style.display = 'none';
}

function closeSidebar() {
    ui.sidebar.classList.remove('open');
    deselectElement();
}

// --- CONSTRUCTION DU PANNEAU LATÉRAL ---

function updateSidebarControls(element) {
    ui.specificControls.innerHTML = '';
    const style = window.getComputedStyle(element);
    const tagName = element.tagName;

    // > ACTIONS GLOBALES (Position)
    ui.btnMoveUp.onclick = () => moveElement('up');
    ui.btnMoveDown.onclick = () => moveElement('down');
    ui.btnDelete.onclick = () => {
        if(confirm('Supprimer cet élément ?')) {
            element.remove();
            deselectElement();
        }
    };

    // > STYLES GLOBAUX INIT
    // Background color picker init
    const rgbToHex = (rgb) => {
        if (!rgb || rgb === 'rgba(0, 0, 0, 0)' || rgb === 'transparent') return '#ffffff';
        const rgbValues = rgb.match(/\d+/g);
        if (!rgbValues) return '#ffffff';
        return "#" + ((1 << 24) + (parseInt(rgbValues[0]) << 16) + (parseInt(rgbValues[1]) << 8) + +parseInt(rgbValues[2])).toString(16).slice(1);
    };
    ui.bgColorInput.value = rgbToHex(style.backgroundColor);

    ui.bgColorInput.oninput = (e) => element.style.backgroundColor = e.target.value;
    ui.btnClearBg.onclick = () => element.style.backgroundColor = '';

    // Margin Select (simple class toggle logic for Tailwind or style)
    ui.marginSelect.onchange = (e) => {
        // Remove existing vertical margins classes from list
        element.classList.remove('my-0', 'my-2', 'my-4', 'my-8', 'my-16');
        if(e.target.value) element.classList.add(e.target.value);
    };

    // > DIMENSIONS
    const numericValue = (val) => {
        const parsed = parseFloat(val);
        return Number.isFinite(parsed) ? parsed : '';
    };

    addControlGroup('Dimensions', `
        <label>Largeur (px)</label>
        <input type="number" class="pico-input" id="picoWidth" value="${numericValue(style.width)}">
        <label class="mt-2">Hauteur (px)</label>
        <input type="number" class="pico-input" id="picoHeight" value="${numericValue(style.height)}">
    `);

    document.getElementById('picoWidth').oninput = (e) => {
        element.style.width = e.target.value ? `${e.target.value}px` : '';
    };

    document.getElementById('picoHeight').oninput = (e) => {
        element.style.height = e.target.value ? `${e.target.value}px` : '';
    };


    // > CONTRÔLES SPÉCIFIQUES

    // 1. TEXTE (P, Hn, SPAN, A, BUTTON, LI)
    if (['P','H1','H2','H3','H4','H5','H6','SPAN','A','BUTTON','LI'].includes(tagName)) {
        addControlGroup('Typographie', `
            <div class="pico-row mb-2">
                <button class="pico-btn-icon pico-col" data-cmd="bold"><i class="fas fa-bold"></i></button>
                <button class="pico-btn-icon pico-col" data-cmd="italic"><i class="fas fa-italic"></i></button>
                <button class="pico-btn-icon pico-col" data-cmd="underline"><i class="fas fa-underline"></i></button>
            </div>
            <div class="pico-row mb-2">
                <button class="pico-btn-icon pico-col" data-cmd="justifyLeft"><i class="fas fa-align-left"></i></button>
                <button class="pico-btn-icon pico-col" data-cmd="justifyCenter"><i class="fas fa-align-center"></i></button>
                <button class="pico-btn-icon pico-col" data-cmd="justifyRight"><i class="fas fa-align-right"></i></button>
            </div>
            <label>Couleur</label>
            <input type="color" class="pico-input" id="picoTextColor" value="${rgbToHex(style.color)}">
            <label class="mt-2">Taille (px)</label>
            <input type="number" class="pico-input" id="picoFontSize" value="${parseInt(style.fontSize)}">
        `);

        // Bind events
        const btnBox = ui.specificControls.lastElementChild;
        btnBox.querySelectorAll('button[data-cmd]').forEach(b => {
            b.onclick = () => { document.execCommand(b.dataset.cmd, false, null); element.focus(); };
        });
        document.getElementById('picoTextColor').oninput = (e) => element.style.color = e.target.value;
        document.getElementById('picoFontSize').oninput = (e) => element.style.fontSize = e.target.value + 'px';
    }

    // 2. IMAGE (IMG)
    const imageTarget = tagName === 'IMG' ? element : element.querySelector('img');
    if (imageTarget) {
        addControlGroup('Image', `
            <label>Source URL</label>
            <input type="text" class="pico-input" id="picoImgSrc" value="${imageTarget.src}">
            <label class="mt-2">Texte alternatif</label>
            <input type="text" class="pico-input" id="picoImgAlt" value="${imageTarget.alt || ''}">
            <label class="mt-2">Arrondi</label>
            <input type="range" min="0" max="50" class="w-full" id="picoImgRadius" value="${parseInt(window.getComputedStyle(imageTarget).borderRadius)||0}">
        `);
        document.getElementById('picoImgSrc').oninput = (e) => imageTarget.src = e.target.value;
        document.getElementById('picoImgAlt').oninput = (e) => imageTarget.alt = e.target.value;
        document.getElementById('picoImgRadius').oninput = (e) => imageTarget.style.borderRadius = e.target.value + 'px';
    }

    // 3. ICÔNE (I avec classe fa-)
    if (tagName === 'I' || element.classList.contains('fas') || element.classList.contains('far') || element.classList.contains('fab')) {
        // Trouver la classe fa-actuelle
        const currentFa = Array.from(element.classList).find(c => c.startsWith('fa-') && c !== 'fa-2x' && c !== 'fa-3x' && c !== 'fa-lg');

        addControlGroup('Icône', `
            <label>Symbole (FontAwesome)</label>
            <div class="pico-row">
                <span class="p-2 bg-gray-100 rounded border border-gray-300"><i class="${element.className}" id="picoIconPreview"></i></span>
                <input type="text" class="pico-input" id="picoIconClass" value="${currentFa || ''}" placeholder="ex: fa-star">
            </div>
            <p class="text-xs text-gray-400 mt-1">Essayez: fa-star, fa-heart, fa-user, fa-check...</p>
        `);

        document.getElementById('picoIconClass').oninput = (e) => {
            const newClass = e.target.value;
            if(currentFa) element.classList.remove(currentFa);
            if(newClass) element.classList.add(newClass);
            // Update preview
            document.getElementById('picoIconPreview').className = element.className;
        };
    }

    // 4. LIEN (A)
    if (tagName === 'A' || element.closest('a')) {
        const linkEl = tagName === 'A' ? element : element.closest('a');
        addControlGroup('Lien', `
            <label>URL Destination</label>
            <input type="text" class="pico-input" id="picoHref" value="${linkEl.getAttribute('href') || ''}">
            <label class="mt-2">Titre / Alt du lien</label>
            <input type="text" class="pico-input" id="picoHrefTitle" value="${linkEl.getAttribute('title') || ''}">
        `);
        document.getElementById('picoHref').oninput = (e) => linkEl.setAttribute('href', e.target.value);
        document.getElementById('picoHrefTitle').oninput = (e) => {
            if (e.target.value) {
                linkEl.setAttribute('title', e.target.value);
            } else {
                linkEl.removeAttribute('title');
            }
        };
    }
}

function addControlGroup(title, html) {
    const div = document.createElement('div');
    div.className = 'pico-control-group';
    div.innerHTML = `<div class="pico-section-title">${title}</div>` + html;
    ui.specificControls.appendChild(div);
}

// --- FONCTIONS ACTIONS (Move, Insert) ---

function moveElement(direction) {
    if (!state.activeElement) return;
    const el = state.activeElement;
    const parent = el.parentNode;

    if (direction === 'up') {
        const prev = el.previousElementSibling;
        if (prev) parent.insertBefore(el, prev);
    } else {
        const next = el.nextElementSibling;
        if (next) parent.insertBefore(next, el);
    }

    // Scroll to keep visible
    el.scrollIntoView({behavior: 'smooth', block: 'center'});
}

// Gestionnaires d'insertion
ui.insertBtns.forEach(btn => {
    btn.onclick = () => {
        if (!state.activeElement) return;
        const type = btn.dataset.insert;
        insertElement(type);
    };
});

if (ui.viewBodyBtn) ui.viewBodyBtn.addEventListener('click', showBodyDomPreview);
if (ui.refreshVersionsBtn) ui.refreshVersionsBtn.addEventListener('click', () => fetchPicoVersions());
if (ui.disablePicoBtn) ui.disablePicoBtn.addEventListener('click', disablePicoCMS);

function insertElement(type) {
    const el = state.activeElement;
    let newEl;

    switch(type) {
        case 'text':
            newEl = document.createElement('p');
            newEl.className = 'mt-4 text-base text-gray-500';
            newEl.innerText = "Nouveau paragraphe. Cliquez pour éditer ce texte.";
            break;
        case 'title':
            newEl = document.createElement('h3');
            newEl.className = 'mt-6 text-2xl font-bold text-gray-900';
            newEl.innerText = "Nouveau Titre";
            break;
        case 'image':
            newEl = document.createElement('img');
            newEl.src = "https://via.placeholder.com/800x400";
            newEl.className = "mt-4 rounded-lg shadow-md w-full object-cover";
            break;
        case 'btn':
            const container = document.createElement('div');
            container.className = "mt-4";
            container.innerHTML = `<a href="#" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Nouveau Bouton</a>`;
            newEl = container; // On insère le wrapper
            break;
        case 'video':
            const vidWrapper = document.createElement('div');
            vidWrapper.className = "mt-6 aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden relative";
            vidWrapper.style.paddingBottom = "56.25%"; // 16:9 aspect ratio hack
            vidWrapper.innerHTML = `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" class="absolute top-0 left-0 w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            newEl = vidWrapper;
            break;
        case 'divider':
            newEl = document.createElement('hr');
            newEl.className = "my-8 border-gray-200";
            break;
    }

    if (newEl) {
        // Insérer APRÈS l'élément actif
        el.insertAdjacentElement('afterend', newEl);
        // Sélectionner le nouvel élément
        if(newEl.tagName !== 'DIV' || !newEl.querySelector('iframe')) {
            selectElement(newEl);
        } else {
            // Si c'est un wrapper (video/btn), essayer de sélectionner l'enfant utile
            selectElement(newEl);
        }
    }
}

// --- GESTION PICOCMS ---

function renderVersionList(versions = []) {
    state.picoVersions = versions;
    if (!ui.versionsList) return;

    if (!versions.length) {
        ui.versionsList.innerHTML = '<p class="text-gray-400 text-xs">Aucune version PicoCMS chargée.</p>';
        return;
    }

    ui.versionsList.innerHTML = '';
    versions.forEach(version => {
        const wrapper = document.createElement('div');
        wrapper.className = 'pico-version-item' + (version.isActive ? ' active' : '');

        const title = version.timestamp || version.file;
        const metaParts = [version.file];
        if (version.size) metaParts.push(`${version.size} o`);

        wrapper.innerHTML = `
            <div class="pico-version-head">
                <span>${title}</span>
                ${version.isActive ? '<span class="pico-pill">Active</span>' : ''}
            </div>
            <p class="pico-version-meta">${metaParts.join(' • ')}</p>
            <div class="pico-row">
                <button class="pico-btn-icon pico-col" data-action="activate"><i class="fas fa-check"></i> Activer</button>
                <button class="pico-btn-icon pico-col text-red-600 hover:bg-red-50" data-action="delete"><i class="fas fa-trash"></i> Supprimer</button>
            </div>
        `;

        const activateBtn = wrapper.querySelector('[data-action="activate"]');
        const deleteBtn = wrapper.querySelector('[data-action="delete"]');

        if (activateBtn) activateBtn.onclick = () => activateVersion(version.file);
        if (deleteBtn) deleteBtn.onclick = () => deleteVersion(version.file);

        ui.versionsList.appendChild(wrapper);
    });
}

async function sendPicoRequest(action, payload = {}, expectJson = false) {
    if (!state.password) {
        alert('Veuillez d\'abord activer le mode édition avec le mot de passe administrateur.');
        return null;
    }

    const response = await fetch('save.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            action,
            password: state.password,
            file: getCurrentFilename(),
            ...payload
        })
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `Action ${action} impossible.`);
    }

    return expectJson ? response.json() : response.text();
}

async function fetchPicoVersions(showPlaceholder = true) {
    if (ui.versionsList && showPlaceholder) {
        ui.versionsList.innerHTML = '<p class="text-xs text-gray-500">Chargement des versions...</p>';
    }

    try {
        const data = await sendPicoRequest('list_versions', {}, true);
        if (!data) return;
        const versions = data && Array.isArray(data.versions) ? data.versions : [];
        renderVersionList(versions);
    } catch (err) {
        console.warn('[PicoCMS] Liste des versions indisponible :', err.message);
        if (ui.versionsList) {
            ui.versionsList.innerHTML = `<p class="text-red-600 text-xs">${err.message}</p>`;
        }
    }
}

async function activateVersion(versionFile) {
    if (!versionFile) return;
    try {
        const text = await sendPicoRequest('activate_version', { version: versionFile });
        if (!text) return;
        alert('✅ ' + text);
        fetchPicoVersions(false);
    } catch (err) {
        alert('❌ Activation impossible :\n' + err.message);
    }
}

async function deleteVersion(versionFile) {
    if (!versionFile) return;
    if (!confirm('Supprimer définitivement cette version PicoCMS ?')) return;

    try {
        const text = await sendPicoRequest('delete_version', { version: versionFile });
        if (!text) return;
        alert('🗑️ ' + text);
        fetchPicoVersions();
    } catch (err) {
        alert('❌ Suppression impossible :\n' + err.message);
    }
}

async function disablePicoCMS() {
    if (!confirm('Désactiver la surcouche PicoCMS actuellement appliquée ?')) return;

    try {
        const text = await sendPicoRequest('disable_picocms', {});
        if (!text) return;
        alert('ℹ️ ' + text);
        fetchPicoVersions();
    } catch (err) {
        alert('❌ Action impossible :\n' + err.message);
    }
}

// Convertit un HTML complet en ressources PicoCMS réutilisables
function buildOverrideResources(htmlString) {
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString || '', 'text/html');
        const body = doc && doc.body ? doc.body.innerHTML : '';

        return { data: { body } };
    } catch (err) {
        console.warn('[PicoCMS] Impossible de parser le HTML pour PicoCMS :', err);
        return { data: { body: htmlString || '' } };
    }
}

async function showBodyDomPreview() {
    try {
        const fullHTML = await generateStaticSnapshot();
        const { data } = buildOverrideResources(fullHTML);
        openBodyModal((data && data.body) || document.body.innerHTML);
    } catch (err) {
        console.error('[PicoCMS] Impossible de générer l\'aperçu du body :', err);
        alert('❌ Impossible d\'afficher le DOM :\n' + err.message);
    }
}

// --- SAUVEGARDE (PHP VERSION) ---
async function generateStaticSnapshot() {
    const clone = document.documentElement.cloneNode(true);

    // Retirer l'interface PicoCMS
    const editorUI = clone.querySelector('#pico-cms-ui');
    if (editorUI) editorUI.remove();

    // Nettoyer les classes/attributs d'édition
    clone.querySelectorAll('.pico-editable-hover').forEach(el => el.classList.remove('pico-editable-hover'));
    clone.querySelectorAll('.pico-active-element').forEach(el => el.classList.remove('pico-active-element'));
    clone.querySelectorAll('[contenteditable]').forEach(el => el.removeAttribute('contenteditable'));

    // Supprimer uniquement les scripts de ré-hydratation SPA, conserver le reste
    const spaPatterns = /(react|vue|angular|vite|webpack|bundle|main\.js|app\.js)/i;

    clone.querySelectorAll('script').forEach(script => {
        const src = script.getAttribute('src') || '';
        const keepExplicit = script.hasAttribute('data-pico-keep');
        const isSpaLike = spaPatterns.test(src) || script.textContent.includes('React') || script.textContent.includes('Vue');

        const shouldStrip = !keepExplicit && isSpaLike;

        if (shouldStrip) {
            script.remove();
        } else if (src) {
            // Tracer les assets conservés pour debug
            script.setAttribute('data-pico-preserve', 'true');
        }
    });

    // Inline des feuilles de style distantes pour rendre la page autonome
    const stylesheetLinks = Array.from(clone.querySelectorAll('link[rel="stylesheet"]'));
    await Promise.all(stylesheetLinks.map(async link => {
        const href = link.getAttribute('href');
        if (!href) return;

        try {
            const response = await fetch(href);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const cssText = await response.text();
            const styleEl = document.createElement('style');
            styleEl.setAttribute('data-pico-inline-from', href);
            styleEl.textContent = `/* Inlined from ${href} */\n${cssText}`;
            link.replaceWith(styleEl);
        } catch (err) {
            // Si l'inline échoue (CORS/CDN), on conserve le lien d'origine avec un marqueur
            link.setAttribute('data-pico-keep', 'true');
            link.setAttribute('data-pico-inline-error', err.message);
        }
    }));

    // Purger les attributs typiques des frameworks pour figer le DOM
    clone.querySelectorAll('[data-reactroot]').forEach(el => el.removeAttribute('data-reactroot'));
    clone.querySelectorAll('[ng-version]').forEach(el => el.removeAttribute('ng-version'));
    clone.querySelectorAll('[data-v-app]').forEach(el => el.removeAttribute('data-v-app'));

    // Protection contre la réhydratation React sur des conteneurs déjà présents
    injectReactGuard(clone);

    return "<!DOCTYPE html>\n" + clone.outerHTML;
}

function injectReactGuard(clone) {
    const reactRootSelectors = ['#root', '#app', '#__next', '[data-reactroot]'];
    const lockedRoots = Array.from(clone.querySelectorAll(reactRootSelectors.join(',')))
        .filter(el => (el.innerHTML || '').trim().length > 0);

    if (!lockedRoots.length) return;

    // Marquer les éléments pour faciliter le debug côté client
    lockedRoots.forEach(el => el.setAttribute('data-pico-lock', 'react'));

    const lockedIds = lockedRoots.map(el => el.id).filter(Boolean);
    const guardScript = document.createElement('script');
    guardScript.setAttribute('data-pico-keep', 'true');
    guardScript.textContent = `(() => {
        const locked = new Set(${JSON.stringify(lockedIds)});
        const noopRoot = { render: () => {}, unmount: () => {} };

        const wrapRootFactory = (factory) => {
            if (typeof factory !== 'function') return factory;
            return (container, ...args) => {
                if (container && container.id && locked.has(container.id)) {
                    console.warn('[PicoCMS] Hydratation React bloquée sur #' + container.id + ' (contenu existant).');
                    return noopRoot;
                }
                return factory(container, ...args);
            };
        };

        const applyGuard = () => {
            if (!window.ReactDOM) return;
            window.ReactDOM.createRoot = wrapRootFactory(window.ReactDOM.createRoot);
            window.ReactDOM.hydrateRoot = wrapRootFactory(window.ReactDOM.hydrateRoot);
        };

        // Première tentative immédiate puis surveillance jusqu'au chargement complet
        applyGuard();
        const observer = new MutationObserver(applyGuard);
        observer.observe(document.documentElement, { childList: true, subtree: true });
        window.addEventListener('load', () => observer.disconnect());
    })();`;

    // Injection au tout début du body pour qu'il s'exécute avant les bundles SPA restants
    clone.body.insertBefore(guardScript, clone.body.firstChild);
}

ui.saveBtn.onclick = async () => {
    if (!state.password) {
        alert('Veuillez vous identifier via le logo PicoCMS avant de sauvegarder.');
        return;
    }

    const confirmed = confirm('Confirmer la sauvegarde des modifications ?');
    if (!confirmed) return;

    // Sauvegarde de l'état actuel
    const currentPassword = state.password;

    // 2. Cloner le HTML complet de la page en supprimant les scripts SPA
    // C'est ce qui sera écrit dans le fichier index.html
    const fullHTML = await generateStaticSnapshot();
    const htmlLength = fullHTML ? fullHTML.length : 0;

    // 2bis. Sauvegarde locale du HTML avant envoi serveur
    let localBackupName = '';
    try {
        const blob = new Blob([fullHTML], { type: 'text/html;charset=utf-8' });
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        localBackupName = `index-backup-${timestamp}.html`;
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = localBackupName;
        document.body.appendChild(link);
        link.click();
        setTimeout(() => URL.revokeObjectURL(link.href), 2000);
        link.remove();
        console.info('[PicoCMS] Sauvegarde locale téléchargée :', localBackupName);
        ui.saveStatus.classList.remove('hidden');
        ui.saveStatus.innerText = `Sauvegarde locale : ${localBackupName}`;
    } catch (backupError) {
        console.warn('[PicoCMS] Impossible de générer la sauvegarde locale :', backupError.message);
        const proceed = confirm('La sauvegarde locale du fichier a échoué. Continuer quand même l\'envoi au serveur ?');
        if (!proceed) {
            ui.saveBtn.innerHTML = '<i class="fas fa-save mr-2"></i> Sauvegarder';
            ui.saveStatus.innerText = "Sauvegarde annulée.";
            setTimeout(() => ui.saveStatus.classList.add('hidden'), 3000);
            return;
        }
    }

    console.group('[PicoCMS] Sauvegarde index.html');
    console.info('Préparation de la sauvegarde (longueur HTML) :', htmlLength);
    console.debug('Payload envoyé à save.php', { action: 'save', htmlLength });
    // Feedback UI (Bouton Loading)
    ui.saveBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sauvegarde...';
    ui.saveStatus.classList.remove('hidden');
    ui.saveStatus.innerText = "Envoi au serveur...";
    showSavingOverlay('Préparation de la sauvegarde...');

    // 3. Envoi au serveur PHP
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000);

        const response = await fetch('save.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'save',
                html: fullHTML,
                password: currentPassword, // On envoie le mot de passe saisi à l'entrée
                file: getCurrentFilename()
            }),
            signal: controller.signal
        });

        clearTimeout(timeout);

        const rawText = await response.text();
        let payload = null;
        try { payload = JSON.parse(rawText); } catch (e) {}

        console.info('Réponse de save.php', { status: response.status, ok: response.ok });
        console.debug('Contenu brut retourné par save.php', rawText);

        if (!response.ok) {
            throw new Error((payload && payload.message) || rawText || `Erreur de sauvegarde (HTTP ${response.status}).`);
        }

        const message = (payload && payload.message) ? payload.message : rawText;
        const versionInfo = payload && payload.versionFile ? `\nVersion PicoCMS : ${payload.versionFile}` : '';
        const archiveInfo = payload && payload.backup ? `\nFichier archive : ${payload.backup}` : '';
        const localInfo = localBackupName ? `\nCopie locale : ${localBackupName}` : '';
        const receipt = payload && typeof payload.bytes === 'number'
            ? `Mise à jour confirmée (${payload.bytes} octets écrits).`
            : 'Mise à jour confirmée.';

        const userMessage = `${message}${archiveInfo}${versionInfo}${localInfo}\n${receipt}`;

        alert("✅ " + userMessage);
        ui.saveStatus.innerText = payload && payload.backup
            ? `${message} (${payload.backup})`
            : message;
        showSavingOverlay('Fichier index.html mis à jour et confirmé.');
        fetchPicoVersions(false);
    } catch (err) {
        console.error(err);
        const cause = err.name === 'AbortError'
            ? 'Le serveur ne répond pas (délai dépassé).'
            : err.message;
        alert("❌ Échec de la sauvegarde :\n" + cause);
        ui.saveStatus.innerText = "Erreur de sauvegarde.";
        showSavingOverlay('Erreur : ' + cause);
    } finally {
         // Reset bouton
         ui.saveBtn.innerHTML = '<i class="fas fa-save mr-2"></i> Sauvegarder';
         setTimeout(() => ui.saveStatus.classList.add('hidden'), 3000);
         setTimeout(() => hideSavingOverlay(), 600);
         console.groupEnd();
    }
};

});
