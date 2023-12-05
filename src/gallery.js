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

  // Adaugă fiecare imagine în galerie împreună cu linkul
  formattedImages.forEach(image => {
    const card = createImageCard(image);
    galleryContainer.appendChild(card);
  });

  // Inițializează lightbox-ul
  const lightbox = new SimpleLightbox('.gallery a', {
    captionData: 'alt',
    captionDelay: 250,
  });

  Notiflix.Notify.success(`Successfully loaded ${formattedImages.length} images.`);

  return formattedImages;
}
