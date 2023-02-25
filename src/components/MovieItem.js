import Component from "../core/component";

export default class MovieItem extends Component {
  constructor(props) {
    super({
      props,
      tagName: "a",
    });
  }

  render() {
    const { movie } = this.props;

    this.el.setAttribute("href", `#/movie?id=${movie.imdbID}`);
    this.el.classList.add(
      "relative",
      "w-48",
      "h-72",
      "rounded",
      "bg-neutral-500",
      "bg-cover",
      "overflow-hidden",
      "transition-all",
      "duration-75",
      "ease-in-out",
      "hover:border-solid",
      "hover:border-2",
      "hover:border-amber-500"
    );
    this.el.style.backgroundImage = `url(${movie.Poster})`;
    this.el.innerHTML = /*html*/ `
      <div class="w-full p-4 box-border text-center absolute left-0 bottom-0 bg-neutral-900/50 backdrop-blur-sm">
        <div class="text-amber-500 text-sm">
          ${movie.Year}
        </div>
        <div class="text-amber-100 text-base">
          ${movie.Title}
        </div>
      </div>
    `;
  }
}
