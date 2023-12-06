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
    const link = document.createElement('a');
    link.href = image.largeImageURL;
    link.appendChild(card);
    galleryContainer.appendChild(link);
  });


  const lightboxInit = () => {
    const lightbox = new SimpleLightbox('.gallery a', {
      captionData: 'alt',
      captionDelay: 250,
    });
  };

  lightboxInit();

  Notiflix.Notify.success(`Successfully loaded ${formattedImages.length} images.`);

  return formattedImages;
}


// export function updateImagesList(markup) {
//   const galleryContainer = document.querySelector('.gallery');
//   if (galleryContainer) {
//     galleryContainer.insertAdjacentHTML('beforeend', markup);

//     // Selectează toate imaginile adăugate recent în galerie
//     const newImages = galleryContainer.querySelectorAll('.gallery a');

//     // Adaugă eveniment de ascultare pentru fiecare imagine
//     newImages.forEach(image => {
//       image.addEventListener('click', event => {
//         event.preventDefault();
//       });
//     });

//     // Dacă există deja o instanță activă SimpleLightbox, distrugem instanța anterioară
//     if (window.simpleLightboxInstance) {
//       window.simpleLightboxInstance.destroy();
//     }

//     // Creează o nouă instanță SimpleLightbox pe toate imaginile
//     window.simpleLightboxInstance = new SimpleLightbox(newImages, {
//       // Opțiuni SimpleLightbox
//       sourceAttr: 'href',
//       captionsData: 'alt',
//       captionPosition: 'bottom',
//       captionDelay: 250,
//       animationSpeed: 250,
//       fadeSpeed: 300,
//       showCounter: true,
//       // Alte opțiuni pot fi adăugate aici
//     });
//   }
// }
