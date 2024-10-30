export const init = () => {
  console.log('Handling hero section');

  document.addEventListener('animationend', () => {
    const initElements = document.querySelectorAll('.hero-letter.init');
    console.log(initElements);

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
  });
};

init();
