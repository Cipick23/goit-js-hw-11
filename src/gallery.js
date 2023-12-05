import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { createImageCard, clearGallery } from "./markup.js";
import Notiflix from 'notiflix';

export const galleryContainer = document.querySelector('.gallery');

export function unpackPhotos(images) {
  clearGallery();

  const formattedImages = images.map(image => ({
    largeImageURL: image.largeImageURL,
  }));

 
  formattedImages.forEach(image => {
    const card = createImageCard(image);
    galleryContainer.appendChild(card);
  });


  const lightbox = new SimpleLightbox('.gallery a', {
    captionData: 'alt',
    captionDelay: 250,
  });

  Notiflix.Notify.success(`Successfully loaded ${formattedImages.length} images.`);

  return formattedImages;
}
