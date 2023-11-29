
import Notiflix from "notiflix";
import PhotosApi from "./api.js";
import { createImageCard, clearGallery } from "./markup.js";

class LoadMoreBtn {
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
      document.querySelector('.gallery').appendChild(card);
    });
  }

  hide() {
    this.button.style.display = "none";
  }

  show() {
    this.button.style.display = "block";
  }
}

const form = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
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
      Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    }
  } catch (error) {
    console.error('Error fetching photos:', error);
    Notiflix.Notify.failure('Error fetching images. Please try again later.');
  }
}