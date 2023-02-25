import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gelleryRef = document.querySelector(".gallery");
const cardMarkup = createGalleryItems(galleryItems);

gelleryRef.addEventListener("click", onImgClick);

gelleryRef.insertAdjacentHTML("beforeend", cardMarkup);

function onImgClick(e) {
	e.preventDefault();
	if (e.target.nodeName !== "IMG") {
		return;
	}

	let gallery = new SimpleLightbox(".gallery a");
	gallery.on("show.simplelightbox", function () {
		// do something…
	});
}

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
