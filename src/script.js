import Notiflix from 'notiflix';
import PhotosApi from './api.js';
import LoadMoreBtn from './loadMoreBtn.js';
import { clearGallery } from './markup.js';

const form = document.getElementById('search-form');
const photosApi = new PhotosApi();
const loadMoreBtn = new LoadMoreBtn('#loadMore', photosApi);

form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();
  const searchQuery = event.currentTarget.elements.searchQuery.value.trim();

  clearGallery();
  loadMoreBtn.hide();
  photosApi.resetPage();

  try {
    const images = await photosApi.getPhotos(searchQuery);

    if (images.length > 0) {
      loadMoreBtn.show();
      loadMoreBtn.displayImages(images);
    } else {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
  } catch (error) {
    console.error('Error fetching photos:', error);
    Notiflix.Notify.failure('Error fetching images. Please try again later.');
  }
}
