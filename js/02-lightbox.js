import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

function renderGallery (gallery) {
    return gallery.map(({ preview, original, description }) => 
        `<li>
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    ).join('');
}

galleryList.innerHTML = renderGallery(galleryItems);

const lightbox = new SimpleLightbox('.gallery .gallery__item', { animationSpeed: 250, loop: true, enableKeyboard: true, preloading: true, docClose: true, captionsData: 'alt'});
