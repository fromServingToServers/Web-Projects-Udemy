"use strict";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=81f4455aabdf258cb6aa6af66283d224";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=81f4455aabdf258cb6aa6af66283d224&query="';

//
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  // res=response
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    // destructuring movie object
    const { title, poster_path, vote_average, overview } = movie;

    console.log(movie);
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
        <img
          src="${IMG_PATH + poster_path}" alt="${title}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRating(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
         ${overview}
        </div>
      
    `;
    // putting into the DOM
    main.appendChild(movieEl);
  });
}

function getClassByRating(vote) {
  if (vote >= 8.0) {
    return "green";
  } else if (vote >= 5.0) {
    return "orange";
  } else return "red";
}

// search functionality
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    // clears search term
    search.value = "";
  } else {
    window.location.reload();
  }
});
