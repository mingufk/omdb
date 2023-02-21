import Component from "../core/component";
import Headline from "../components/Headline";

export default class Home extends Component {
  render() {
    const headline = new Headline().el;

    this.el.classList.add("container", "m-auto", "p-8");
    this.el.append(headline);
  }
}
