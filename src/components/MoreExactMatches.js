import Component from "../core/component";
import movieStore, { searchMovies } from "../store/movie";

export default class MoreExactMatches extends Component {
  constructor() {
    super({
      tagName: "button",
    });
    movieStore.subscribe("maxPage", () => {
      const { page, maxPage } = movieStore.state;
      page < maxPage
        ? this.el.classList.remove("hidden")
        : this.el.classList.add("hidden");
    });
  }

  render() {
    this.el.classList.add(
      "block",
      "hidden",
      "mx-auto",
      "my-4",
      "rounded-lg",
      "bg-gradient-to-r",
      "from-amber-500",
      "via-amber-600",
      "to-amber-700",
      "px-5",
      "py-2.5",
      "text-center",
      "text-sm",
      "font-medium",
      "shadow-amber-500/50",
      "hover:bg-gradient-to-br",
      "focus:outline-none",
      "focus:ring-4",
      "focus:ring-amber-300"
    );
    this.el.textContent = "More exact matches";
    this.el.addEventListener("click", async () => {
      this.el.classList.add("hidden");
      await searchMovies(movieStore.state.page + 1);
    });
  }
}
