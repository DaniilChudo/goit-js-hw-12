import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css'; 
import 'simplelightbox/dist/simple-lightbox.min.css'; 

let lightbox;

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');

  if (images.length === 0) {
    showError('Sorry, there are no images matching your search query. Please try again!');
    return;
  }

  images.forEach(image => {
    const card = document.createElement('a');
    card.classList.add('card');
    card.href = image.largeImageURL; 
    card.setAttribute('data-caption', image.tags);

    const imgElement = document.createElement('img');
    imgElement.src = image.webformatURL;
    imgElement.alt = image.tags;

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

    const likes = document.createElement('p');
    likes.textContent = `Likes: ${image.likes}`;

    const views = document.createElement('p');
    views.textContent = `Views: ${image.views}`;

    const comments = document.createElement('p');
    comments.textContent = `Comments: ${image.comments}`;

    const downloads = document.createElement('p');
    downloads.textContent = `Downloads: ${image.downloads}`;

    cardInfo.appendChild(likes);
    cardInfo.appendChild(views);
    cardInfo.appendChild(comments);
    cardInfo.appendChild(downloads);

    card.appendChild(imgElement);
    card.appendChild(cardInfo);

    gallery.appendChild(card);
  });

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'data-caption',
      captionDelay: 250,
    });
  }
}

export function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    position: 'topRight'
  });
}
