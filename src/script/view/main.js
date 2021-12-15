import "../components/movie-list.js";
import "../components/header-background.js";

import { DataSource, PopularMovies } from "../data/data-source.js";

const search = () => {
  const searchElement = document.querySelector("header-background");
  const movieListElement = document.querySelector("movie-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    movieListElement.movies = results;
  };

  const fallbackResult = (message) => {
    movieListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

const popular = () => {
  const movieListElement = document.querySelector("movie-list");

  const popular = async () => {
    try {
      const result = await PopularMovies.fetchPopularMovies();

      document.getElementById(
        "popularElement"
      ).innerHTML = `<h4 id="popularElement">Popular</h4>`;
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };
  const renderResult = (results) => {
    movieListElement.movies = results;
  };

  const fallbackResult = (message) => {
    movieListElement.renderError(message);
  };

  popular();
};

export { search, popular };
