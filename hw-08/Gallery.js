import imagesArray from "./gallery-items.js";

("Use strict");

const gallery = document.querySelector(".gallery");
const lightBoxImage = document.querySelector(".lightbox___image");
const lightBox = document.querySelector(".lightbox");
const LightBoxButton = document.querySelector(".lightbox__button");
const lightboxContent = document.querySelector(".lightbox__content");

gallery.addEventListener("click", handleImageClick);
LightBoxButton.addEventListener("click", closeLightBox);
lightboxContent.addEventListener("click", handleLightBoxClick);

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

function openLightBox() {
  lightBox.classList.add("is-open");
  window.addEventListener("keydown", handleKeyPress);
}
function closeLightBox() {
  lightBox.classList.remove("is-open");
  window.removeEventListener("keydown", handleKeyPress);
}
function handleImageClick(event) {
  event.preventDefault();
  const clickedElement = event.target.parentNode;
  if (clickedElement.tagName != "A") {
    return;
  }
  lightBoxImage.src = clickedElement.href;
  openLightBox();
}
function handleLightBoxClick(event) {
  const targetTagName = event.target.nodeName;
  if (targetTagName === "IMG") {
    return;
  }
  closeLightBox();
}
function handleKeyPress(event) {
  if (event.code !== "Escape") {
    return;
  }
  closeLightBox();
}
