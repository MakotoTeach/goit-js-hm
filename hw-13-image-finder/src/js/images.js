import imagesService from './images-service';
import imagesListItemsTemplates from '../templates/image-list-items.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
};

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

function loadMoreBtnHandler() {
  imagesService.fetchImages().then(images => {
   
    const markup = buildListImagesMarkup(images);

    insertImageList(markup);
  });
}

function searchFormSubmitHandler(e) {
  e.preventDefault();

  const inputValue = e.currentTarget.elements.query.value;

  clearList();
  
  imagesService.resetPage();

  imagesService.searchQuery = inputValue;

  imagesService.fetchImages().then(images => {

    const markup = buildListImagesMarkup(images);

    insertImageList(markup);
  });
}

function buildListImagesMarkup(items) {
  return imagesListItemsTemplates(items);
}

function insertImageList(items) {
  refs.gallery.insertAdjacentHTML('beforeend', items);
}

function clearList () {
    refs.gallery.innerHTML = ''
}