const sounds = ['applause','boo','gasp','tada','victory','wrong'];

sounds.forEach(sound => {
      const btn =  document.createElement('button');
      btn.classList.add('btn');

      btn.innerText = sound;

      btn.addEventListener('click', () => {
          stopPreviousAudio();
          document.getElementById(sound).play();
      })

      document.getElementById('buttons').appendChild(btn);
});

function stopPreviousAudio() {
    sounds.forEach(sound => {
       let song = document.getElementById(sound);
       song.pause();
       song.currentTime = 0;
    })
}