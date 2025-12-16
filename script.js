document.addEventListener('DOMContentLoaded', () => {
    const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
        // Hover interaction
        panel.addEventListener('mouseenter', () => {
            removeActiveClasses();
            panel.classList.add('active');
        });

        // Click interaction (for mobile or explicit intent)
        panel.addEventListener('click', () => {
            removeActiveClasses();
            panel.classList.add('active');
        });
    });

    function removeActiveClasses() {
        panels.forEach(panel => {
            panel.classList.remove('active');
        });
    }
});
