import Component from "../core/component";

interface State {
  [key: string]: unknown;
  links: {
    href: string;
    text: string;
  }[];
}

export default class Header extends Component {
  public declare state: State;

  constructor() {
    super({
      tagName: "header",
      state: {
        links: [
          {
            href: "#/",
            text: "Search",
          },
          {
            href: "#/movie",
            text: "Movie",
          },
          {
            href: "#/about",
            text: "About",
          },
        ],
      },
    });

    window.addEventListener("popstate", () => {
      this.render();
    });
  }

  render() {
    this.el.classList.add(
      "px-10",
      "py-3",
      "bg-neutral-700/50",
      "sticky",
      "top-0",
      "z-10",
      "flex",
      "items-center",
      "gap-10"
    );

    this.el.innerHTML = /*html*/ `
      <a href="#/" class="font-mono font-black text-4xl text-amber-500 hover:text-amber-100">OMDb</a>
      <nav>
        <ul class="flex gap-5">
          ${this.state.links
            .map((link) => {
              const href = link.href.split("?")[0];
              const hash = location.hash.split("?")[0];
              const isActive = href === hash;
              return /*html*/ `
            <li>
              <a href="${link.href}" class="font-semibold ${
                isActive ? "text-amber-500 text-lg" : "text-amber-100"
              }">${link.text}</a>
            </li>
          `;
            })
            .join("")}
        </ul>
      </nav>
    `;
  }
}
