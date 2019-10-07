import './styles.css';
import menu from './menu.json';
import templateItem from './templates/post-feed-item.hbs';

const refs = {
  menu: document.querySelector('.menu'),
};

console.log(templateItem);
console.log(menu);

// const markup = templateItem(menu[5]);

// refs.menu.insertAdjacentHTML('beforeend', markup);

function buildMenu(menu) {
const markup = menu.map(menuItem => templateItem(menuItem)).join('');

refs.menu.insertAdjacentHTML('beforeend', markup);
}

buildMenu(menu);
