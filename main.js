const imageURL = "https://image.tmdb.org/t/p/w500/"
const searchMovie = 'https://api.themoviedb.org/3/search/movie?api_key=7ef91e17a5cad14217b1e285a03dddc2&language=en-US'
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const searchMovieContainer = document.querySelector('#searchMovieContainer');


function movieSection(movies) {
  return movies.map((movie) => {
    if(movie.poster_path) {
      return `<img src=${imageURL + movie.poster_path} 
      data-movie-id=${movie.id}
      />`;
    }
  })
}



function createMovieContainer(movies){
  const movieElement = document.createElement('div');
  movieElement.setAttribute('class', 'movie');

  const movieTemplate = `
  <section class="section">
  ${movieSection(movies)}
  </section>
  <div class="content">
  <p id = "content-close"></p>
  </div>`

  movieElement.innerHTML = movieTemplate;
  return movieElement;
}



function renderSearchMovies(data){
    searchMovieContainer.innerHTML = '';
    const movies = data.results;
    const movieBlock = createMovieContainer(movies);
    searchMovieContainer.appendChild(movieBlock);
    console.log('Data: ', data);
}



buttonElement.onclick = function (event) {
  event.preventDefault();
  const value = inputElement.value;
  const newUrl = searchMovie + '&query=' + value;

  fetch(newUrl)
  .then((res) => res.json() )
  .then(renderSearchMovies)
  .catch((error) => {
    console.log('Error: ', error)
  });

  inputElement.value = '';

console.log('Value: ', value);

}



  









//Getting data from API and parsing into json

