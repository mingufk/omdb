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
        <h1 class="mb-4 text-3xl font-extrabold text-neutral-900 dark:text-neutral-50 md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-amber-700 from-amber-300">${upperTitle}</span> (${
      movie.Year
    })
        </h1>

        <span class="bg-amber-100 text-amber-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-amber-200 dark:text-amber-800 ml-2">${
          movie.Rated
        }</span>

          <p class="my-2 tracking-tighter text-neutral-500 md:text-xl dark:text-neutral-50">${
            movie.Country
          }</p>
          <p class="my-2 tracking-tight text-neutral-500 md:text-xl dark:text-neutral-50">${
            movie.Runtime
          }</p>
          <p class="my-2 tracking-normal text-neutral-500 md:text-xl dark:text-neutral-50">${
            movie.Genre
          }</p>
          <p class="my-2 tracking-wide text-neutral-500 md:text-xl dark:text-neutral-50">${
            movie.Released
          }</p>
          <p class="my-2 tracking-wider font-semibold text-amber-500 md:text-2xl">${
            movie.BoxOffice
          }</p>

        <hr class="w-48 h-1 mx-auto my-1 bg-neutral-100 border-0 rounded md:my-10 dark:bg-neutral-800/50">

        <div class="flex justify-center">
          <dl class="max-w-md text-neutral-900 dark:text-neutral-50">
            <div class="pb-1">
              <dt class="mb-1 text-neutral-500 md:text-xl dark:text-neutral-400">Director</dt>
              <dd class="text-xl font-semibold">${movie.Director}</dd>
            </div>
            <div class="py-1">
              <dt class="mb-1 text-neutral-500 md:text-xl dark:text-neutral-400">Writer</dt>
              <dd class="text-xl font-semibold">${movie.Writer}</dd>
            </div>
            <div class="pt-1">
              <dt class="mb-1 text-neutral-500 md:text-xl dark:text-neutral-400">Actors</dt>
              <dd class="text-xl font-semibold">${movie.Actors}</dd>
            </div>
          </dl>
        </div>
        <hr class="w-48 h-1 mx-auto my-1 bg-neutral-100 border-0 rounded md:my-10 dark:bg-neutral-800/50">
        <div>
          <h2 class="mb-2 text-xl text-neutral-900 dark:text-neutral-400">Ratings</h2>
          ${movie.Ratings.map((rating) => {
            return `<p class="mb-2 space-y-1 text-2xl font-semibold text-neutral-500 list-inside dark:text-neutral-50">${rating.Source} - ${rating.Value}</p>`;
          }).join("")}
        </div>
        <h2 class="my-8 text-2xl font-bold leading-none tracking-tight text-neutral-900 dark:text-neutral-50"><span class="underline underline-offset-3 decoration-8 decoration-amber-400 dark:decoration-amber-700">${
          movie.Awards
        }</span></h2>
        <hr class="w-48 h-1 mx-auto my-1 bg-neutral-100 border-0 rounded md:my-10 dark:bg-neutral-800/50">
        <p class="text-left my-3 font-light text-neutral-500 dark:text-neutral-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-neutral-900 dark:first-letter:text-neutral-100 first-letter:mr-3 first-letter:float-left">${
          movie.Plot
        }</p>
      </div>
    `;
  }
}
