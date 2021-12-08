let element = document.querySelector('.key-coder');

window.addEventListener('keydown', (event) => {

    element.innerHTML = `
        <div class="key">
            ${event.key === ' ' ? 'Space' : event.key}
            <small>event.key</small>
        </div>

        <div class="key">
            ${event.keyCode}
            <small>event.keycode</small>
        </div>

        <div class="key">
            ${event.code}
            <small>event.code</small>
        </div>

        <div class="key">
            Press Any Key to get the Key Code
        </div>`;

    console.log(event);
})