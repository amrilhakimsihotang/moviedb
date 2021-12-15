import "../components/tvshowpopcomponents/tvshow-list.js";
import "../components/tvshowpopcomponents/header-background-tv.js";

import { DataSourceTVShow, PopularTVshow } from "../data/data-source-tvshow";

const searchtvshow = () => {
  const searchTVShowElement = document.querySelector("header-background-tv");
  const tvshowListElement = document.querySelector("tvshow-list");

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSourceTVShow.datasourcesearchTVShow(
        searchTVShowElement.value
      );
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    tvshowListElement.tvshow = results;
  };

  const fallbackResult = (message) => {
    tvshowListElement.renderError(message);
  };

  searchTVShowElement.clickEvent = onButtonSearchClicked;
};

const tvshowpopular = () => {
  const tvshowListElement = document.querySelector("tvshow-list");

  const tvshowpopular = async () => {
    try {
      const result = await PopularTVshow.fetchPopulartvshow();

      document.getElementById(
        "tvshowpopularElement"
      ).innerHTML = `<h4 id="tvshowpopularElement">TV Show Popular</h4>`;
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };
  const renderResult = (results) => {
    tvshowListElement.tvshow = results;
  };

  const fallbackResult = (message) => {
    tvshowListElement.renderError(message);
  };

  tvshowpopular();
};

export { searchtvshow, tvshowpopular };
