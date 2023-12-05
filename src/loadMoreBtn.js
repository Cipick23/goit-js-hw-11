import Notiflix from 'notiflix';
import { createImageCard } from './markup.js';

export default class LoadMoreBtn {
  constructor(selector, photosApi) {
    this.button = document.querySelector(selector);
    this.photosApi = photosApi;
    this.initialize();
  }

  initialize() {
    this.button.addEventListener("click", this.loadMoreImages.bind(this));
    this.hide();
  }

  async loadMoreImages() {
    try {
      const images = await this.photosApi.getPhotos(
        this.photosApi.searchQuery,
        this.photosApi.queryPage,
        this.photosApi.pageSize
      );

      if (images.length > 0) {
        this.displayImages(images);
        this.photosApi.incrementPage();

        // Verificați dacă butonul "Load more" trebuie să fie afișat sau ascuns după fiecare încărcare
        if (this.photosApi.hasMorePages()) {
          this.show();
        } else {
          this.hide();
          Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
        }
      } else {
        // Dacă nu există imagini, ascundeți butonul
        this.hide();
        Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
      }
    } catch (error) {
      console.error('Error fetching photos:', error);
      Notiflix.Notify.failure('Error fetching images. Please try again later.');
    }
  }

  displayImages(images) {
    if (images.length > 0) {
      images.forEach(image => {
        const card = createImageCard(image);
        document.querySelector('.gallery').appendChild(card);
      });

      // Apelați funcția pentru derularea ușoară
      scrollSmoothlyAfterImages();
    }
  }

  hide() {
    this.button.style.display = "none";
  }

  show() {
    this.button.style.display = "block";
  }
}

function scrollSmoothlyAfterImages() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
