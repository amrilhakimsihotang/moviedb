import "../tvshowpopcomponents/tvshow-part.js";

class TVShowList extends HTMLElement {
  set tvshow(tvshow) {
    this._tvshow = tvshow;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3";

    this._tvshow.forEach((tivishow) => {
      const tvShowItemElement = document.createElement("tvshow-part");
      tvShowItemElement.tivishow = tivishow;
      this.appendChild(tvShowItemElement);
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

customElements.define("tvshow-list", TVShowList);
