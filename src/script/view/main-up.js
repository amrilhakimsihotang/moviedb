import "../components/upcpmingplayingcomp/movie-list-up.js";

import { UpcomingPlayingMovies } from "../data/data-source-up.js";

const upcomingplaying = () => {
  const movieListElement = document.querySelector("movie-list-up");

  const upcomingplaying = async () => {
    try {
      const result = await UpcomingPlayingMovies.fetchUpcomingPlayingMovies();
      document.getElementById(
        "upcomingplayingElement"
      ).innerHTML = `<h4 id="upcomingplayingElement">Upcoming</h4>`;
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

  upcomingplaying();
};

export { upcomingplaying };
