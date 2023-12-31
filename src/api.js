import axios from "axios";
import Notiflix from "notiflix";

export const API_KEY = '40921400-16e67c90d6d4404c43b5f3edb';
export const ENDPOINT = 'https://pixabay.com/api/';

export default class PhotosApi {
  constructor() {
    this.queryPage = 1;
    this.searchQuery = '';
    this.pageSize = 20;
    this.totalHits = 0;
    this.loadedImages = [];
  }

  async getPhotos(searchQuery) {
    this.searchQuery = searchQuery;
    const url = `${ENDPOINT}?key=${API_KEY}&q=${searchQuery}&page=${this.queryPage}&per_page=${this.pageSize}&image_type=photo&orientation=horizontal&safesearch=true`;

    try {
      const response = await axios.get(url);
      const images = response.data.hits;

      if (images.length === 0) {
        Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        return [];
      }

      this.totalHits = response.data.totalHits;
      this.incrementPage();
      this.loadedImages = [...this.loadedImages, ...images.map(image => ({
        webformatURL: image.webformatURL,
        largeImageURL: image.largeImageURL,
        tags: image.tags,
        likes: image.likes,
        views: image.views,
        comments: image.comments,
        downloads: image.downloads,
      }))];
      return this.loadedImages;
    } catch (error) {
      console.error('Error fetching photos:', error);
      Notiflix.Notify.failure('Error fetching images. Please try again later.');
      throw error;
    } finally {
      if (this.totalHits > 0) {
        Notiflix.Notify.success(`Hooray! We found ${this.totalHits} images.`);
      }
    }
  }

  resetPage() {
    this.queryPage = 1;
  }

  incrementPage() {
    this.queryPage += 1;
  }

  hasMorePages() {
    return this.queryPage <= Math.ceil(this.totalHits / this.pageSize);
  }
}