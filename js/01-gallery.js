import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

function renderGallery (gallery) {
    return gallery.map(({ preview, original, description }) => 
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    ).join('');
}

galleryList.innerHTML = renderGallery(galleryItems);
galleryList.addEventListener('click', onClickImages);

function onClickImages(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }
    modalOpen(e);
}; 

function modalOpen(e) {
    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`);
    instance.show();
    window.addEventListener('keydown', onExitModal);
};

function onExitModal(e) {
    if (e.code!=='Escape') {
        return
    }    
    document.querySelector('.basicLightbox').remove();    
};

