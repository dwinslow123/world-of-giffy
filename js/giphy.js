// const api = "http://api.giphy.com/v1/gifs/search";
// const apiKey ="&api_key=dc6zaT0xFJmzc";
// const query = "&q=rainbow";

// const setup = () => {
//   noCanvas();
//   const url = api + apiKey + query;
//   loadJSON(url, gotData);
// }

// const gotData = (data) => {
//   for (let i = 0; i < giphy.data.length; i++) {
//     createImg(giphy.data.data[0].images.original.url);
// 	}
// }

const GphApiClient = require('giphy-js-sdk-core');
const client = GphApiClient("aPvjKyc7BnhDtjxCZ0lmC5OWxmoMyRto");

client.search('gifs', { "q": "banana" })
  .then((res) => {
    res.data.forEach((gif) => {
      console.log(gif);
    })
  })
  .catch((err) => {
    console.log(err)
  });
