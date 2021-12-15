const apiKey = "b4aab36220aa5bd0c23941a35e819ec8";
const popularUrl = "https://api.themoviedb.org/3/movie/popular?api_key=";
const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=";

class DataSource {
  static searchMovie(keyword) {
    return fetch(
      `${searchUrl}${apiKey}&language=en-US&query=${keyword}&page=1&include_adult=false`
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

class PopularMovies {
  static fetchPopularMovies() {
    return fetch(`${popularUrl}${apiKey}&language=en-US&page=1`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results && responseJson.total_results !== 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`movies not found`);
        }
      });
  }
}

export { DataSource, PopularMovies };
