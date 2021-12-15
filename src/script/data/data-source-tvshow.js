const apiKey = "b4aab36220aa5bd0c23941a35e819ec8";
const populartvhshowUrl = "https://api.themoviedb.org/3/tv/popular?api_key=";
const searchtvshowUrl = "https://api.themoviedb.org/3/search/tv?api_key=";

class DataSourceTVShow {
  static datasourcesearchTVShow(keyword) {
    return fetch(
      `${searchtvshowUrl}${apiKey}&language=en-US&page=1&query=${keyword}&include_adult=false`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results && responseJson.total_results !== 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} No Results`);
        }
      });
  }
}

class PopularTVshow {
  static fetchPopulartvshow() {
    return fetch(`${populartvhshowUrl}${apiKey}&language=en-US&page=1`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results && responseJson.total_results !== 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`TV SHOW not found`);
        }
      });
  }
}

export { DataSourceTVShow, PopularTVshow };
