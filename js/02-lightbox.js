import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gelleryRef = document.querySelector(".gallery");
const cardMarkup = createGalleryItems(galleryItems);

gelleryRef.insertAdjacentHTML("beforeend", cardMarkup);

new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionPosition: "bottom",
	captionDelay: 250,
});

function createGalleryItems(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<a class="gallery__item"
   href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
           alt="${description}"
    />
</a>
`;
		})
		.join("");
}
