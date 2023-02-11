import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

createMurkup(galleryItems);

galleryRef.addEventListener("click", onGalleryItemClick);




//--------Functions-----------------------------------------
function createMurkup(items) {
    return galleryRef.innerHTML = items.map(item =>
        `<div class="gallery__item">
            <a class="gallery__link" href=${item.original}>
                <img
                    class="gallery__image"
                    src=${item.preview} 
                    data-source=${item.original} 
                    alt=${item.description}
                />
            </a>
        </div>`).join(" ");    
}

function onGalleryItemClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;    

    const instance = basicLightbox.create(`
        <div class="modal">
            <img src=${event.target.dataset.source} width="800">
        </div>
    `);

    instance.show();
    // // Close lightbox when clicking the background
	// if (opts.closable === true) elem.addEventListener('click', (e) => {

	// 	// If e.target is not the same element as elem,
	// 	// then the user clicked a descendant of the element.
	// 	if (e.target !== elem) return

	// 	// Close lightbox with the instance function
	// 	_close()

	// })
}
// console.log(galleryItems);
