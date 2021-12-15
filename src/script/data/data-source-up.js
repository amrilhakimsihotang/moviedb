const apiKey = "b4aab36220aa5bd0c23941a35e819ec8";
const upcomingUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=";

class UpcomingPlayingMovies {
  static fetchUpcomingPlayingMovies() {
    return fetch(`${upcomingUrl}${apiKey}&language=en-US&page=1`)
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

export { UpcomingPlayingMovies };
