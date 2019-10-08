import './styles.css';
import menu from './menu.json';
import templateItem from './templates/post-feed-item.hbs';

const refs = {
  menu: document.querySelector('.menu'),
  body: document.querySelector('body'),
  themeSwitchControl: document.querySelector('#theme-switch-control'),
};

refs.themeSwitchControl.addEventListener('change', themeSwitch);

function buildMenu(arr) {
  const markup = arr.map(item => templateItem(item)).join('');
  refs.menu.insertAdjacentHTML('beforeend', markup);
}
buildMenu(menu);

const themeLocal = localStorage.getItem('theme');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

if (themeLocal === Theme.DARK) {
  changeThemeForDark();
}

function themeSwitch(e) {
  if (e.target.checked) {
    changeThemeForDark();
    console.log(theme);
    return;
  }
  changeThemeForLigth();
  console.log(theme);
}

function changeThemeForLigth(e) {
  refs.body.classList.remove(Theme.DARK);
  refs.body.classList.add(Theme.LIGHT);
  refs.themeSwitchControl.checked = false;
  localStorage.setItem('theme', Theme.LIGHT);
}

function changeThemeForDark(e) {
  refs.body.classList.remove(Theme.LIGHT);
  refs.body.classList.add(Theme.DARK);
  refs.themeSwitchControl.checked = true;
  localStorage.setItem('theme', Theme.DARK);
}
