const baseUrl = 'https://pixabay.com/api/';
const key = '14239053-7da15a6cef2814c1860b92e83';

export default {
  page: 1,
  query: '',
  fetchImages() {
    const requestParams = `?q=${this.query}&page=${this.page}&per_page=12&image_type=photo&key=`;

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


// export class ImagesService {
//   key = null;
//   url = null;
  
//   constructor(url, key) {
//       this.key = key;
//       this.url = url;
//       this.page = 1;
//       this.query = '';
//   }

//   fetchImages() {
//     const requestParams = `?q=${this.query}&page=${this.page}&per_page=12&image_type=photo&key=`;

//     return fetch(this.url + requestParams + this.key)
//       .then(response => response.json())
//       .then(parsedResponse => {
//         this.page +=1;

//         return parsedResponse;
//       });
//   }

//   resetPage() {
//     this.page = 1;
//   }
// }