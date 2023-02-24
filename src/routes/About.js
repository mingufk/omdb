import Component from "../core/component";
import aboutStore from "../store/about";

export default class About extends Component {
  render() {
    const { name, gmail, instagram, github, repository } = aboutStore.state;

    this.el.classList.add("flex", "flex-col", "items-center");
    this.el.innerHTML = /*html*/ `
      <div class="my-6 py-6 font-black text-5xl text-amber-500"><a href="${instagram}" target="_blank">${name}</a></div>
      <div class="my-6 text-2xl text-amber-100 font-semibold"> 
        <div class="hover:text-amber-300"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=${gmail}" target="_blank">Gmail</a></div>
        <div class="my-3 hover:text-amber-300"><a href="${github}" target="_blank">GitHub</a></div>
        <div class="hover:text-amber-300"><a href="${repository}" target="_blank">Repository</a></div>
      </div>
    `;
  }
}
