import axios from "axios";
import notiflix from "notiflix";

const API_KEY = '40921400-16e67c90d6d4404c43b5f3edb';
const ENDPOINT = 'https://pixabay.com/api/';

export default class PhotosApi {
  constructor() {
    this.queryPage = 1;
    this.searchQuery = '';
  }

  async getPhotos(pageSize = 1, imageType = 'photo', orientation = 'horizontal') {
    const url = `${ENDPOINT}?q=${this.searchQuery}&page=${this.queryPage}&image_type=${imageType}&orientation=${orientation}&safesearch=true&per_page=${pageSize}`;
    const headers = {
      'X-Api-Key': API_KEY
    };

    try {
      const response = await axios.get(url, { headers });
      this.incrementPage();
      Notiflix.Notify.success('Imagini încărcate cu succes!');
      return response.data;
    } catch (error) {
      console.error('Eroare la preluarea imaginilor:', error);
      Notiflix.Notify.failure('Eroare la preluarea imaginilor. Vă rugăm să încercați din nou mai târziu.');
      throw error;
    }
  }

  resetPage() {
    this.queryPage = 1;
  }

  incrementPage() {
    this.queryPage += 1;
  }
}
