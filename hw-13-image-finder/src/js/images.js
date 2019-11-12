import imagesService from './images-service';
import imagesListItemsTemplates from '../templates/image-list-items.hbs';
import spinner from '../js/spinner';
import * as basicLightbox from 'basiclightbox';


const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
};

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);
refs.gallery.addEventListener('click', handleImageClick);

function modalOpen(src) {
  const modalItem = basicLightbox.create(
    `<img width="1400" height="900" src="${src}">`,
  );
  modalItem.show();
}

function handleImageClick(event) {
  event.preventDefault();

  console.log(event.target.parentNode.href);

  const currentImage = event.target.parentNode.href;

  if (currentImage) {
    modalOpen(currentImage);
  }
  return;
}
function searchFormSubmitHandler(e) {
  e.preventDefault();

  const inputValue = e.currentTarget.elements.query.value;
  clearList();

  imagesService.resetPage();

  imagesService.searchQuery = inputValue;

  fetchImages();
}

function loadMoreBtnHandler() {
  spinner.show();

  fetchImages();
}

function fetchImages() {
  spinner.show();

  imagesService
    .fetchImages()
    .then(images => {
      const markup = buildListImagesMarkup(images);
      insertImageList(markup);
      spinner.hide();
    })
    .catch(error => {
      console.warn(error);
    });
}

function buildListImagesMarkup(items) {
  return imagesListItemsTemplates(items);
}

function insertImageList(items) {
  refs.gallery.insertAdjacentHTML('beforeend', items);
}

function clearList() {
  refs.gallery.innerHTML = '';
}
