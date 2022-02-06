// Add imports above this line
import  SimpleLightbox  from 'simplelightbox';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEBox = document.querySelector('.gallery');
// create images
const arrImages = galleryItems.map(({ preview, original, description }) => {
   return `<li><a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/></a></li>`;
});
galleryEBox.insertAdjacentHTML('beforeend', arrImages.join(''));
// open modal window
let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
   gallery.defaultOptions.captionDelay = 250;
});

