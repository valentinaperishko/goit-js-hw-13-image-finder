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

function insertListItems(resultItemCard) {
  const markup = imageTemplate(resultItemCard);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  if (markup) {
    refs.btnMore.classList.add('visible');
  }
}

function clearListItems() {
  refs.gallery.innerHTML = '';
}
