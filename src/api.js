import axios from "axios";
import notiflix from "notiflix";

const API_KEY = '40921400-16e67c90d6d4404c43b5f3edb';
const ENDPOINT = 'https://pixabay.com/api/';

export async function getPhotos(query) {
  try {
    const response = await axios.get(`${ENDPOINT}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`);
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching photos:', error);
    notiflix.Notify.Failure('Error fetching images. Please try again later.');
    throw error;
  }
}
