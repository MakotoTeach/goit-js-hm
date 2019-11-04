import countryService from './service';
import countryTemaplate from '../templates/country.hbs';
import countryListTemplate from '../templates/country-list.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
  articleList: document.querySelector('#article-list'),
};

document.querySelector('.input-test').addEventListener('input', _.debounce(onInput, 500));

function onInput () {
  console.log('input even');
}
refs.searchForm.addEventListener('submit', searchFormSubmitHandler);

function searchFormSubmitHandler(e) {
  e.preventDefault();

  const searchQuery = e.currentTarget.elements.query.value;

  countryService.fetchArticles(searchQuery).then(data => {
    console.log(data);
    console.log(data.length);
    isSearchQueryInRange(data);
  });
}

function isSearchQueryInRange(data) {
  if (2 <= data.length && data.length <= 10) {
    clearList();
    const countryListMarkup = buildCountryList(data);
    console.log(countryListMarkup);
    return insertCountryList(countryListMarkup);
  }
  if (data.length === 1) {
    const countryMarkup = buildCountryMarkup(data);
    console.log(countryMarkup);
    return insertCountry(countryMarkup);
  } else {
    console.log('ERROR!!!');
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


function clearList () {
  refs.articleList.innerHTML = '';
}