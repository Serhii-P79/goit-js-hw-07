import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const refer = {
  containerGallery: document.querySelector(".gallery"),
};
// console.log(refer.containerGallery);
createGallery(galleryItems);

refer.containerGallery.addEventListener("click", (e) => {
  e.preventDefault();

  const originalImageLink = e.target.dataset.source;

  const originalImage = basicLightbox.create(`
    <img src="${originalImageLink}" width="800" height="600">
  `);

  originalImage.show();

  const onClosingModalWindowKeyEscape = (e) => {
    e.preventDefault();
    // console.log(e.code);

    if (e.code === "Escape") {
      window.removeEventListener("keydown", onClosingModalWindowKeyEscape);
      originalImage.close();
    }
  };

  window.addEventListener("keydown", onClosingModalWindowKeyEscape);

  // console.log(e.target);
  // console.log(e.currentTarget);
});

function createGallery(galleryItems) {
  refer.containerGallery.insertAdjacentHTML(
    "beforeend",
    galleryItems
      .map((galleryItem) => {
        return createPicture(galleryItem);
      })
      .join("")
  );
}

function createPicture({ preview, original, description }) {
  return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
}
