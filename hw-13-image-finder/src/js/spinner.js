const spinner = document.querySelector('.spinner-overlay');

export default {
  show() {
    spinner.classList.remove('is-hidden');
  },

  hide() {
    spinner.classList.add('is-hidden');
  },
};
