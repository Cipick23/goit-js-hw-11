import PhotosApi from './api.js';
import { createImageCard, clearGallery } from './markup.js';
import notiflix from "notiflix";
import LoadMore from './loadMoreBtn.js';

const form = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');

const loadMore = new LoadMore({
    selector: '#loadMore',
    ishidden: true
  })

const photosApi = new PhotosApi();

form.addEventListener('submit', onsubmit);

async function onsubmit(event) {
 // loadMore.button.addEventListener('click', displayImages);
  event.preventDefault();
  const form = event.currentTarget;
  photosApi.searchQuery = form.element.photos.value.trim();
  clearGallery();
  photosApi.resetPage();

    try {
      await displayImage();
      displayImages(images);
    // loadMoreBtn.show();
    } catch (error) {
      console.error('Error fetching photos:', error);
      notiflix.Notify.Failure('Error fetching images. Please try again later.');
    }
   finally {
    form.reset();
  }
};

async function displayImages(images) {
      // loadMoreBtn.disable();
  clearGallery();
// loadMoreBtn.enable();
  if (images.length === 0) {
    notiflix.Notify.Failure('Sorry, there are no images matching your search query. Please try again.');
    return;
  }

  // Creează carduri pentru fiecare imagine și adaugă-le la galerie
  images.forEach(image => {
    const card = createImageCard(image);
    gallery.appendChild(card);
  });

}