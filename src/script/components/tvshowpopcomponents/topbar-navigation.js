class TopbarNavigation extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<div class="topbar container bg-gradient">
      <div class="d-none d-lg-flex social-links align-items-center">
        <a href="https://www.instagram.com/h.amril/" class="instagram"><i class="fab fa-instagram"></i></a>
      </div>

      <div class="d-none d-lg-flex social-links align-items-center">
        <a href="https://www.linkedin.com/in/amril-hakim-sihotang-s-kom-5ab9b4199/" class="linkedin"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>`;
  }
}

customElements.define("topbar-navigation", TopbarNavigation);
