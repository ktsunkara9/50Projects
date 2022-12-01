const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClassOnPanels();
        panel.classList.add('active');
    });
})

function removeActiveClassOnPanels() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}