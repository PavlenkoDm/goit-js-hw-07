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
        <img src=${event.target.dataset.source} width="800">
    `);

    instance.show();

    document.addEventListener("keydown", onEscapePress);
    
    function onEscapePress(event) {
        if (event.code !== "Escape") return;
        
        document.removeEventListener("keydown", onEscapePress);

        instance.close();
    }
}


