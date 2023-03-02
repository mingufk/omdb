import Store from "../core/store";

export interface SearchMovies {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface State {
  searchText: string;
  page: number;
  maxPage: number;
  movies: SearchMovies[];
  movie: MovieDetails;
  loading: boolean;
  message: string;
}

const store = new Store<State>({
  searchText: "",
  page: 1,
  maxPage: 1,
  movies: [],
  movie: {} as MovieDetails,
  loading: false,
  message: "",
});

export default store;

export const searchMovies = async (page: number) => {
  store.state.loading = true;
  store.state.page = page;

  if (page === 1) {
    store.state.movies = [];
    store.state.message = "";
  }

  try {
    const res = await fetch("/api/movie", {
      method: "POST",
      body: JSON.stringify({
        title: store.state.searchText,
        page,
      }),
    });
    const { Search, totalResults, Response, Error } = await res.json();

    if (Response === "True") {
      store.state.movies = [...store.state.movies, ...Search];
      store.state.maxPage = Math.ceil(Number(totalResults) / 10);
    } else {
      store.state.message = Error;
    }
  } catch (e) {
    console.log(e);
  } finally {
    store.state.loading = false;
  }
};

export const getMovie = async (id: string) => {
  store.state.loading = true;

  try {
    const res = await fetch("/api/movie", {
      method: "POST",
      body: JSON.stringify({ id }),
    });
    store.state.movie = await res.json();
  } catch (e) {
    console.log(e);
  } finally {
    store.state.loading = false;
  }
};
