const posterpathUrl = "https://image.tmdb.org/t/p/w500/";

class MoviePart extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="card-body">
      <img class="img-responsive img-thumbnail size w-50 h-50" src="${posterpathUrl}${
      this._movie.poster_path
    }" alt="${this._movie.original_title}"><br>
      <button class="btn btn-primary bottom-right">${
        this._movie.vote_average
      }</button>
       <br>
      <h7 class="card-title"><b>Title: ${this._movie.original_title}</b></h7>
      <p class="card-text">Release: ${this._movie.release_date.substring(
        0,
        4
      )}</p>
      </div>
    `;
  }
}

customElements.define("movie-part", MoviePart);
