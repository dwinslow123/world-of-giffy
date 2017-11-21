$(document).ready(() => {
  const $search = $('.search');
  const $formValue = $('#form-value');
  const $gif = $('#gif');
  const $reset = $('#reset');
  const apiKey = '&api_key=dc6zaTOxFJmzC'
  const url = 'http://api.giphy.com/v1/gifs/search?q='

        $search.on('click', () => {
        let userInput = $formValue.val().trim();  
          userInput = userInput.replace(/ /g, "+");
          const queryURL = url + userInput + apiKey;
  
          $.ajax({url: queryURL, method: 'GET'}).done( (response) => {
              const giphyURL = response.data[Math.floor(Math.random()) * 25].images.original.url;              
            $gif.attr('src', giphyURL);
          });
         $reset.on('click', () => {
            $gif.attr("src",'');
          });
          return false;
        })
      });