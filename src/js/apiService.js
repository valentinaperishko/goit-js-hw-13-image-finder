export default {
    apiKey: '19922290-d1fcc8d698349f9cb6de79e81',
    BASE_URL: 'https://pixabay.com/api/',
    searchQuery: '',
    pageNumber: 1,
    perPage: 12,
    totalPages: 0,
    isLastPage: false,
    
      async fetchImages() {
        const response = await fetch(`${this.BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.pageNumber}&per_page=${this.perPage}&key=${this.apiKey}`);
        const parseResponse =  await response.json();
        this.incrementPage();
        return parseResponse.hits;
    
       },
      resetPage() {
        this.pageNumber = 1;
      },
      incrementPage() {
        this.pageNumber += 1;
      },
      get query() {
        return this.searchQuery;
      },
      set query(newSearchQuery) {
        this.searchQuery = newSearchQuery;
      },
    };
    