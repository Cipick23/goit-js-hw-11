import { getPhotos } from './api.js';
import { createImageCard, clearGallery } from './markup.js';
import notiflix from "notiflix";
import loadMore from './loadMoreBtn.js';

const form = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
const loadBtn = document.querySelector('loadMore');

const loadMore = new loadMore({
    selector: '#loadMore',
    ishidden: true
  })


form.addEventListener('submit', async function (event) {
 // loadMoreBtn.button.addEventListener('click', displayImages);
  event.preventDefault();
  const searchQuery = event.target.searchQuery.value.trim();

  if (searchQuery !== '') {
    try {
      const images = await getPhotos(searchQuery);
      displayImages(images);
    // loadMoreBtn.show();
    } catch (error) {
      console.error('Error fetching photos:', error);
      notiflix.Notify.Failure('Error fetching images. Please try again later.');
    }
  } else {
    notiflix.Notify.Info('Please enter a search query.');
  }
});

function displayImages(images) {
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
