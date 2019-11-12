const baseUrl = 'https://pixabay.com/api/';
const key = '14239053-7da15a6cef2814c1860b92e83';

export default {
  page: 4,
  query: '',
  fetchImages() {
    const requestParams = `?q=${this.query}&page=${this.page}&per_page=20&image_type=photo&key=`;

    return fetch(baseUrl + requestParams + key)
      .then(response => response.json())
      .then(parsedResponse => {
        this.incrementPage();

        return parsedResponse.hits;
      });
  },
  get searchQuery() {
    return this.query;
  },

  set searchQuery(string) {
    this.query = string;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
      this.page = 1;
  }
};
