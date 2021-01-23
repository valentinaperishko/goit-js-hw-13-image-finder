import fetchImages from './apiService.js';
import imageTemplate from '../templates/imageTemplate.hbs';
import refs from './refs.js';

refs.searchForm.addEventListener('submit', searchFormSubmit);
refs.btnMore.addEventListener('click', loadMoreButton);

function searchFormSubmit(e) {
  e.preventDefault();
  const input = e.currentTarget.elements.query;

  clearListItems();
  fetchImages.resetPage();
  fetchImages.searchQuery = input.value;
  fetchImages.fetchImages().then(insertListItems);
  input.value = '';
}

function loadMoreButton() {
  fetchImages.fetchImages().then(insertListItems);
}

function insertListItems(itemCard) {
  const markup = imageTemplate(itemCard);
  refs.gallery.insertAdjacentHTML('beforeend', markup);

  if (itemCard.length < 12) {
    refs.btnMore.classList.remove('visible');
  } else refs.btnMore.classList.add('visible');

  if (fetchImages.pageNumber > 2) {
    window.scrollBy({
      top: window.innerHeight - 200,
      behavior: 'smooth',
    });
  }
}

function clearListItems() {
  refs.gallery.innerHTML = '';
}
