export const init = () => {
  console.log('Handling hero section');

  document.addEventListener('animationend', (event: AnimationEvent) => {
    const initElements = document.querySelectorAll('.hero-letter.init');

    initElements.forEach((element) => {
      element.classList.remove('init');
      element.classList.remove('flicker');
      element.classList.remove('glow');
      element.classList.remove('left');
      element.classList.remove('right');
    });

    const hiddenButton = document.querySelector('button.waffle-button[hidden]');
    if (hiddenButton) {
      hiddenButton.removeAttribute('hidden');
      hiddenButton.classList.add('flicker');
      hiddenButton.classList.add('glow');
    }

    if (event.animationName === 'fadeIn') {
      const overlay = document.getElementById('screen-transition-overlay');

      overlay.classList.remove('fade-in');
      overlay.classList.add('overlay-final');

      window.setInterval(() => {
        window.htmx.ajax('get', '/home', null);
      }, 3000);
    }
  });
};

init();
