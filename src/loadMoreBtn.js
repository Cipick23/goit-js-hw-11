import Notiflix from 'notiflix';
import { createImageCard, galleryContainer } from './markup.js';

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
      } else {
        this.hide();
        Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
      }
    } catch (error) {
      console.error('Error fetching photos:', error);
      Notiflix.Notify.failure('Error fetching images. Please try again later.');
    }
  }

  displayImages(images) {
    images.forEach(image => {
      const card = createImageCard(image);
      galleryContainer.appendChild(card);
    });
  }

  hide() {
    this.button.style.display = "none";
  }

  show() {
    this.button.style.display = "block";
  }
}
