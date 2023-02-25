import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gelleryRef = document.querySelector(".gallery");
const cardMarkup = createGalleryItems(galleryItems);

gelleryRef.insertAdjacentHTML("beforeend", cardMarkup);

new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {
	// do something…
});

function createGalleryItems(galleryItems) {
	return galleryItems
		.map(({ preview, original }) => {
			return `<a class="gallery__item"
   href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
           alt="Image description"
    />
</a>
`;
		})
		.join("");
}
