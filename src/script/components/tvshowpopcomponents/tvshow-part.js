const posterpathUrl = "https://image.tmdb.org/t/p/w500/";

class TVShowPart extends HTMLElement {
  set tivishow(tivishow) {
    this._tivishow = tivishow;
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="card-body">
      <img class="img-responsive img-thumbnail size w-50 h-50" src="${posterpathUrl}${this._tivishow.poster_path}" alt="${this._tivishow.original_name}"><br>
      <button class="btn btn-primary bottom-right">${this._tivishow.vote_average}</button>
       <br>
      <h7 class="card-title"><b>Title: ${this._tivishow.original_name}</b></h7>
      <p class="card-text">Release: ${this._tivishow.first_air_date}</p>
      </div>
    `;
  }
}

customElements.define("tvshow-part", TVShowPart);
