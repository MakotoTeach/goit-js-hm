import imagesArray from "./gallery-items.js";

("Use strict");

const gallery = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) => {
  const galleryItem = `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
      <span class="gallery__icon">
        <i class="material-icons">zoom_out_map</i>
      </span>
    </a>
  </li>`;

  return galleryItem;
};

const createGallery = array => {
  return array.map(item => createGalleryItem(item)).join("");
};
console.log(createGallery(imagesArray));

gallery.insertAdjacentHTML('beforeEnd', createGallery(imagesArray))

const checkClick = event => {
    event.preventDefault();

    console.log('currentTarget', event.currentTarget.tagName)
    console.log('target', event.target.tagName)
}
 
gallery.addEventListener('click', checkClick)