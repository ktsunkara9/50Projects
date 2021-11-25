const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveOnAllPanels();
        panel.classList.add('active');
    })
});

function removeActiveOnAllPanels() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}