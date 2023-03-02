import Component from "../core/component";

export default class Headline extends Component {
  render() {
    this.el.classList.add("headline");
    this.el.innerHTML = /*html*/ `
        <h1 href="/" class="font-mono font-black text-7xl mb-5  text-amber-500">
          OMDb
        </h1>
        <h2 class="text-4xl text-amber-100">The Open Movie Database</h2>
        <p class="opacity-50 my-2.5">
          OMDb (an abbreviation of The Open Movie Database) is an online database of information related to movie, series, episode.
        </p>
    `;
  }
}
