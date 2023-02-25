import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gelleryRef = document.querySelector(".gallery");
const cardMarkup = createGalleryItems(galleryItems);

gelleryRef.addEventListener("click", (e) => {
	e.preventDefault();
	if (e.target.nodeName !== "IMG") {
		return;
	}
	const urlImg = e.target.dataset.source;
	const instance = basicLightbox.create(`
    <img src="${urlImg}" width="800" height="600">
`);
	instance.show();
});

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
gelleryRef.insertAdjacentHTML("beforeend", cardMarkup);
