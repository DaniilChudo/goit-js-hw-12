import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showError } from './js/render-functions.js';

const PER_PAGE = 15; 
let currentQuery = '';
let totalHits = 0;
let page = 1;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.search-form');
  const input = document.querySelector('.search-input');
  const loader = document.querySelector('.loader');
  const loadMoreBtn = document.querySelector('.load-more-btn');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    currentQuery = input.value.trim();
    if (!currentQuery) {
      showError('Please enter a search query.');
      return;
    }

    page = 1;
    loader.classList.remove('hidden');
    loadMoreBtn.classList.add('hidden');

    try {
      const { hits, totalHits: total } = await fetchImages(currentQuery, page);
      totalHits = total;
      renderImages(hits);
      loadMoreBtn.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      showError('An error occurred while fetching images.');
    } finally {
      loader.classList.add('hidden');
    }
  });

  loadMoreBtn.addEventListener('click', async () => {
    if (page * PER_PAGE >= totalHits) {
      showError("We're sorry, but you've reached the end of search results.");
      loadMoreBtn.classList.add('hidden');
      return;
    }

    loader.classList.remove('hidden');
    page += 1;

    try {
      const { hits } = await fetchImages(currentQuery, page);
      renderImages(hits);

      const card = document.querySelector('.card');
      if (card) {
        const cardHeight = card.getBoundingClientRect().height;
        window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
      }
    } catch (error) {
      showError('An error occurred while fetching images.');
    } finally {
      loader.classList.add('hidden');
    }
  });
});

