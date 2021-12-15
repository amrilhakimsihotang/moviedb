import "../components/movie-part.js";

class MovieList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3";

    this._movies.forEach((movie) => {
      const movieItemElement = document.createElement("movie-part");
      movieItemElement.movie = movie;
      this.appendChild(movieItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = `
        <style>
             .placeholder {
                   font-weight: lighter;
                   color: rgba(0,0,0,0.5);
               }
        </style>`;
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define("movie-list", MovieList);
