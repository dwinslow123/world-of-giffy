document.addEventListener('DOMContentLoaded', function() {
	q = "+=";

	req = new XMLHttpRequest;
	req.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=aPvjKyc7BnhDtjxCZ0lmC5OWxmoMyRto&limit=5', true);

	req.onload = function() {
		if (req.status >= 200 && req.status < 400) {
			data = JSON.parse(req.responseText).data.image_url;
			document.getElementById('output').innerHTML = '<center><img src = "'+data+'" title="GIF from Giphy"></center>';
		} else {
			console.log('You made it Giphy, but there was an error :(');
		}
	};

	req.onerror = function() {
		console.log('CONNECTION ERROR');
	};

	req.send();
});