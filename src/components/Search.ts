import Component from "../core/component";
import movieStore, { searchMovies } from "../store/movie";

export default class Search extends Component {
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /*html*/ `
      <div class="relative my-5">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" class="w-5 h-5 text-neutral-500 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input 
          value="${movieStore.state.searchText}"
          class="block w-full p-4 pl-10 text-sm text-neutral-900 border border-neutral-300 rounded-lg bg-neutral-50 focus:ring-amber-500 focus:border-amber-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="Search OMDb" required />
        <button class="absolute right-2.5 bottom-2.5 bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">Search</button>
      </div>
    `;

    const inputEl = this.el.querySelector("input");
    inputEl?.addEventListener("input", () => {
      movieStore.state.searchText = inputEl.value;
    });
    inputEl?.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });

    const buttonEl = this.el.querySelector("button");
    buttonEl?.addEventListener("click", () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });
  }
}
