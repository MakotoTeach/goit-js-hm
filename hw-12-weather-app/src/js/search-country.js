import countryService from './service';
import countryTemaplate from '../templates/country.hbs';
import countryListTemplate from '../templates/country-list.hbs';
import _ from 'lodash';
import PNotify from 'pnotify/dist/es/PNotify';

const refs = {
  searchInput: document.querySelector('.country-search_input'),
  articleList: document.querySelector('#article-list'),
};

refs.searchInput.addEventListener(
  'input',
  _.debounce(searchCountryFormHandler, 500),
);

function searchCountryFormHandler(e) {
  e.preventDefault();

  const searchQuery = e.target.value;

  if (searchQuery === '') {
    return;
  } else {
    countryService.fetchCountries(searchQuery).then(data => {
      isSearchQueryInRange(data);
    });
  }
}

function isSearchQueryInRange(data) {
  if (2 <= data.length && data.length <= 10) {
    clearList();
    const countryListMarkup = buildCountryList(data);
    return insertMarkUp(countryListMarkup);
  }
  if (data.length === 1) {
    clearList();
    const countryMarkup = buildCountryMarkup(data);
    return insertMarkUp(countryMarkup);
  }
  if (data.length > 10) {
    clearList();
    return PNotify.alert(
      'To many matches found.  Please enter a more specific query!',
    );
  } else {
    return PNotify.alert('There are no countries with your query!');
  }
}


function buildCountryMarkup(country) {
  return countryTemaplate(country);
}

function buildCountryList(countries) {
  return countryListTemplate(countries);
}

function insertMarkUp(markUp) {
  refs.articleList.insertAdjacentHTML('beforeend', markUp);
}

function clearList() {
  refs.articleList.innerHTML = '';
}
