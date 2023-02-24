import Component from "../core/component";
import movieStore, { getMovie } from "../store/movie";

export default class Movie extends Component {
  async render() {
    this.el.classList.add("flex", "flex-col", "items-center", "justify-center");

    this.el.innerHTML = /*html*/ `
      <div class="animate-pulse">
        <div style="width: 594px; height: 840px;" class="bg-neutral-700 rounded">
        </div>

        <div class="m-9 w-auto h-12 bg-neutral-600 rounded"></div>
      </div>
    `;

    await getMovie(history.state.id);

    const { movie } = movieStore.state;
    const upperTitle = movie.Title.toUpperCase();
    const uhdPoster = movie.Poster.replace("SX300", "SX3840");

    this.el.innerHTML = /*html*/ `
      <div style="background-image: url(${uhdPoster}); width: 594px; height: 840px;" class="bg-cover rounded">
      </div>

      <div class="text-center mt-4">
        <div class="font-black text-5xl m-5">${upperTitle}&nbsp;(${
      movie.Year
    })</div>
        <div>${movie.Country}</div>
        <div>${movie.Rated}</div>
        <div>${movie.Runtime}</div>
        <div>${movie.Genre}</div>
        <div>${movie.Released}</div>
        <div>${movie.BoxOffice}</div>
        <div>Director - ${movie.Director}</div>
        <div>Writer - ${movie.Writer}</div>
        <div>Actors - ${movie.Actors}</div>
        <div>
          <h3>Ratings</h3>
          ${movie.Ratings.map((rating) => {
            return `<p>${rating.Source} - ${rating.Value}</p>`;
          }).join("")}
        </div>
        <div>${movie.Awards}</div>
        <div>${movie.Plot}</div>
      </div>
    `;
  }
}
