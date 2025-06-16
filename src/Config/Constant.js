const TMDB_URL = "https://api.themoviedb.org/3/movie";

const TMDB_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN }` 
  }
};

export default { TMDB_URL, TMDB_OPTION };
