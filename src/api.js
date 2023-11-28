import axios from "axios";

const API_KEY = '40921400-16e67c90d6d4404c43b5f3edb';
const ENDPOINT = 'https://pixabay.com/api/';

async function getPhotos(query) {
    const response = await axios.get(`${ENDPOINT}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`);

    return response.data.articles;
} 

export default { getPhotos };

