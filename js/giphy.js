document.addEventListener('DOMContentLoaded', function () {
	
	req = new XMLHttpRequest;
	req.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC', true);
	
	req.onload = function() {
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
});