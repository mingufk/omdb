import Component from "../core/component";

export default class NotFound extends Component {
  render() {
    this.el.innerHTML = /*html*/ `
      <div class="h-screen w-full flex flex-col justify-center items-center">
        <h1 class="text-9xl font-extrabold tracking-widest">404</h1>
        <div class="bg-amber-500 text-amber-50 px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <button class="mt-5">
          <a href="#/"
            class="relative inline-block text-sm font-medium text-amber-300 group active:text-amber-400 focus:outline-none focus:ring"
          >
            <span
              class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-amber-500 group-hover:translate-y-0 group-hover:translate-x-0"
            ></span>
            <span class="relative block px-8 py-3 bg-neutral-900 border border-current">
              <div>Go Home</div>
            </span>
          </a>
        </button>
      </div>
  `;
  }
}
