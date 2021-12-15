class MainBody extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <main class="container border">
     <div class="row">
        <div class="col-md-9 py-5 flex-container">
          <h4 id="popularElement">Popular</h4>
          <movie-list></movie-list>
        </div>
        <!--aside-->
        <div class="col-md-3">
          <div class="col-md-9 py-5">
            <h5>What's the next..?</h5>
            <button type="button" class="button1 btn" onclick="location.href='index.html'">Popular</button>
            <button type="button" class="button2 btn" onclick="location.href='upcomingplaying.html'">Upcoming</button>
            <button type="button" class="button3 btn" onclick="location.href='tvshow.html'">TVShow</button>
          </div>
        </div>
        <!--end aside-->
      </div>

</main>`;
  }
}
customElements.define("main-body", MainBody);
