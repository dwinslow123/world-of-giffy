// this is to help prevent Cross browser issues
const createCORSRequest = (method, url) => {
  req = new XMLHttpRequest();
  if ("withCredentials" in req) {
    req.open(method, url, true);
  } else if (typeof XDomainRequest !== "undefined") {
    req = new XDomainRequest();
    req.open(method, url);
  } else {
    req = null;
  }
  return req;
}

document.addEventListener('DOMContentLoaded', () => { // waits for content to load before executing
  const url = 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'

  const req = createCORSRequest('GET', url); // makes the request to the Giphy API
  if (!req) alert('CORS not supported');

	req.onload = () => {
		if (req.status >= 200 && req.status < 400){
      console.log(req.responseText);
			const data = JSON.parse(req.responseText).data.fixed_height_downsampled_url;
			console.log(data);
			document.getElementById("output").innerHTML = '<img src = "'+data+'"  title="GIF from Giphy">'; // this places the gif in the html element
		} else {
      console.log('SOMETHING WENT WRONG! You reached Giphy, but the API returned an error!');
    }
	};
  
  req.send(); // sends the gif
  

  // this does the same thing as before, but only when the button is clicked
  document.getElementById('btn').addEventListener('click', () => {
  const url = 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC'

  const req = createCORSRequest('GET', url);
  if (!req) alert('CORS not supported');
  
    req.onload = () => {
      if (req.status >= 200 && req.status < 400){
        console.log(req.responseText);
        data = JSON.parse(req.responseText).data.fixed_height_downsampled_url;
        console.log(data);
        document.getElementById("output").innerHTML = '<img src = "'+data+'"  title="GIF from Giphy">';
      } else {
        console.log('SOMETHING WENT WRONG! You reached Giphy, but the API returned an error!');
       }
    };
    req.send();
  })
});
