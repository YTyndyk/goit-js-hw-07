import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gelleryRef = document.querySelector(".gallery");

const cardMarkup = createGalleryItems(galleryItems);

gelleryRef.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("Натиснули на картинку!");
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

const instance = basicLightbox.create(`
    <img src="" width="800" height="600">
`);

instance.show();
