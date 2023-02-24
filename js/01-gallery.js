import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gelleryRef = document.querySelector(".gallery");
const cardMarkup = createGalleryItems(galleryItems);

gelleryRef.insertAdjacentHTML("beforeend", cardMarkup);

function createGalleryItems(galleryItems) {
	return galleryItems
		.map(({ preview, original }) => {
			return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image description"
    />
  </a>
</div>
`;
		})
		.join("");
}
