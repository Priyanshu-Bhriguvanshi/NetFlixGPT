import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import constantValue from "../Config/Constant";
import axios from "axios";
import { addPopularMovies } from "../Store/MoviesSlice";

const usePopularMovies = () => {
    const popularMoviesList = useSelector(state => state.movies.popularMovies);
    const dispatch = useDispatch();
    const url = `${constantValue.TMDB_URL}/popular?language=en-US&page=1`;

    useEffect(() => {

        const fetchPopularMovies = async () => {
            try {
                const response = await axios.get(url, constantValue.TMDB_OPTION);
                dispatch(addPopularMovies(response.data.results)); 
            } catch (error) {
                console.error("Error fetching popular movies:", error.message);
            }
        };

        if (!popularMoviesList || popularMoviesList.length === 0) {
            fetchPopularMovies();
        }

    }, [dispatch, popularMoviesList, url]);

    return popularMoviesList;
};

export default usePopularMovies;
