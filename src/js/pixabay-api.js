import axios from 'axios';

const API_KEY = '45168431-de79dc5356fbae8131b712894'; 
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;  

export async function fetchImages(query, page) {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: PER_PAGE
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}