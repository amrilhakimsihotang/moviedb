class HeaderBackground extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }
  render() {
    this.innerHTML = `
       <header class="container bg-img text-light">
          <div class="row">
            <div class="col-12 py-4 text-center">
              <h1 class="display-1">The Movie Db</h1>
              <p class="lead">
                Welcome to the movie and tv show database
              </p>
            </div>
          </div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Menu</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
            </ul>
            <div class="d-flex">
              <input id="searchElement" class="form-control me-2" type="search" placeholder="Search movie only" aria-label="Search"/>
              <button id="searchButtonElement" class="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
      `;

    this.querySelector("#searchButtonElement").addEventListener(
      "click",
      this._clickEvent
    );

    document
      .querySelector(".navbar-toggler")
      .addEventListener("click", function (e) {
        document
          .querySelector("#navbarSupportedContent")
          .classList.toggle("show");
      });
  }
}
customElements.define("header-background", HeaderBackground);
