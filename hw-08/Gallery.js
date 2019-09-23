import imagesArray from "./gallery-items.js";

("Use strict");

const gallery = document.querySelector(".gallery");
const lightBoxImage = document.querySelector(".lightbox___image");
const lightBox = document.querySelector(".lightbox");
const LightBoxButton = document.querySelector(".lightbox__button");

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

gallery.insertAdjacentHTML("beforeEnd", createGallery(imagesArray));

const showImage = event => {
  event.preventDefault();
  let clickedElement = event.target.parentNode;
  if (clickedElement.tagName != "A") {
    return;
  }
  lightBoxImage.src = clickedElement.href;
  lightBox.classList.add("is-open");
};

const closeLightBox = event => {
  lightBox.classList.remove("is-open");
};

gallery.addEventListener("click", showImage);
LightBoxButton.addEventListener("click", closeLightBox);
