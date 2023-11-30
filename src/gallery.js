// import axios from "axios";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

// const API_KEY = '40921400-16e67c90d6d4404c43b5f3edb';
// const ENDPOINT = 'https://pixabay.com/api/';
// const galleryContainer = document.querySelector('div.gallery');

// export default async function unpackPhotos() {
//   const url = `${ENDPOINT}?key=${API_KEY}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true`;

//   try {
//     const response = await axios.get(url);
//     const images = response.data.hits;

//     this.incrementPage();
//     const formattedImages = images.map(image => ({
//       largeImageURL: image.largeImageURL,
//     }));

//     // Adaugă imaginile în galerie
//     formattedImages.forEach(image => {
//       const card = createImageCard(image);
//       galleryContainer.appendChild(card);
//     });

//     // Inițializează lightbox-ul
//     const lightbox = new SimpleLightbox('.gallery a', {});

//     return formattedImages;
//   } catch (error) {
//     console.error('Error fetching image', error);
//     Notiflix.Notify.failure('Error fetching image. Please try again later.');
//     throw error;
//   }
// }


//     function zoomImageCard(image) {
//         const card = document.createElement('div');
//         card.classList.add('image-card');
      
//         const link = document.createElement('a');
//         link.href = image.largeImageURL;
//         link.setAttribute('data-lightbox', 'gallery');
      
//         const img = document.createElement('img');
//         img.src = image.largeImageURL;
//         img.alt = 'Image';
      
//         link.appendChild(img);
//         card.appendChild(link);
      
//         return card;
//       }
      