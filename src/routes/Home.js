import Component from "../core/component";
import Headline from "../components/Headline";
import Search from "../components/Search";
import MovieList from "../components/MovieList";
import MoreExactMatches from "../components/MoreExactMatches";

export default class Home extends Component {
  render() {
    const headline = new Headline().el;
    const search = new Search().el;
    const movieList = new MovieList().el;
    const moreExactMatches = new MoreExactMatches().el;

    this.el.classList.add("container", "m-auto", "p-8");
    this.el.append(headline, search, movieList, moreExactMatches);
  }
}
