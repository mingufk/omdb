import Store from "../core/store";

interface State {
  name: string;
  gmail: string;
  instagram: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  name: "Mingu Kim",
  gmail: "mingufk@gmail.com",
  instagram: "https://www.instagram.com/mingufk/",
  github: "https://github.com/mingufk",
  repository: "https://github.com/mingufk/omdb",
});
