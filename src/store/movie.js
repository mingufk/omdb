import Store from "../core/store";

const store = new Store({
  searchText: "",
  page: 1,
  maxPage: 1,
  movies: [],
  movie: {},
  loading: false,
  message: "",
});

export default store;

export const searchMovies = async (page) => {
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
    store.state.message = e.message;
  } finally {
    store.state.loading = false;
  }
};

export const getMovie = async (id) => {
  store.state.loading = true;

  try {
    const res = await fetch("/api/movie", {
      method: "POST",
      body: JSON.stringify({ id }),
    });
    store.state.movie = await res.json();

    if (Response === "True") {
      store.state.movie = movie;
    } else {
      store.state.message = Error;
    }
  } catch (e) {
    store.state.message = e.message;
  } finally {
    store.state.loading = false;
  }
};
