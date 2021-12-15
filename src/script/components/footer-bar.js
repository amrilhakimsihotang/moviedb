class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `<footer class="container bg-light">
      <div class="row">
        <div class="col-12 py-4">
          &copy; 2021 The Movie Db-Amril Hakim Sihotang
        </div>
    </footer>`;
  }
}
customElements.define("footer-bar", FooterBar);
