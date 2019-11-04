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
  _.debounce(searchFormSubmitHandler, 500),
);

function searchFormSubmitHandler(e) {
  e.preventDefault();

  const searchQuery = e.target.value;

  if (searchQuery === '') {
    return;
  } else {
    countryService.fetchArticles(searchQuery).then(data => {
      isSearchQueryInRange(data);
    });
  }
}

function isSearchQueryInRange(data) {
  if (2 <= data.length && data.length <= 10) {
    clearList();
    const countryListMarkup = buildCountryList(data);
    return insertCountryList(countryListMarkup);
  }
  if (data.length === 1) {
    const countryMarkup = buildCountryMarkup(data);
    return insertCountry(countryMarkup);
  } else {
    PNotify.alert(
      'To many matches found.  Please enter a more specific query!',
    );
    return;
  }
}

function buildCountryMarkup(country) {
  return countryTemaplate(country);
}

function buildCountryList(countries) {
  return countryListTemplate(countries);
}

function insertCountry(country) {
  refs.articleList.insertAdjacentHTML('beforeend', country);
}

function insertCountryList(countries) {
  refs.articleList.insertAdjacentHTML('beforeend', countries);
}

function clearList() {
  refs.articleList.innerHTML = '';
}
