export const init = () => {
  document.addEventListener('animationend', (event: AnimationEvent) => {
    const initElements = document.querySelectorAll('.hero-letter.init');

    const classesToRemove = [
      'init',
      'glow',
      'left',
      'right',
      'delay-animation',
      'flicker-on',
      'top',
      'right',
    ];

    initElements.forEach((element) => {
      classesToRemove.forEach((classToRemove) => {
        element.classList.remove(classToRemove);
      });
    });

    const hiddenButton = document.querySelector('button.waffle-button[hidden]');
    if (hiddenButton) {
      hiddenButton.removeAttribute('hidden');
      hiddenButton.classList.add('flicker-on');
      hiddenButton.classList.add('glow');
    }

    if (event.animationName === 'fadeIn') {
      const overlay = document.getElementById('screen-transition-overlay');
      const body = document.querySelector('body');

      overlay.classList.remove('fade-in');

      window.history.pushState({ page: 'home' }, 'Home', '/home');
      window.htmx.ajax('get', '/home', null);
    }

    if (event.animationName === 'flicker') {
      const heroLetters = document.querySelectorAll('.hero-letter');

      heroLetters.forEach((heroLetter) => {
        heroLetter.classList.add('flicker-off');
      });
    }
  });
};

init();
