import Component from "../core/component";

export default class Home extends Component {
  render() {
    this.el.innerHTML = `
      <h1 class='text-xl'>Home</h1>
    `;
  }
}
