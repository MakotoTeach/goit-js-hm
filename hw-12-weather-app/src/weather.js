const base =
  'https://api.darksky.net/forecast/71595e5270e96d9a3e9d5e2444302759/37.8267,-122.4233';

fetch(base, {
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Encoding': 'gzip'
  },
}).then(response => console.log(response));
// .then(data => console.log(data))
// .then(weather => {
//   console.log(weather);
// });
