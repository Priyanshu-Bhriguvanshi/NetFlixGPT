import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import constantValue from "../Config/Constant";
import { addMovieTrailor } from "../Store/MoviesSlice";

const useMovieTrailor = (movie_id) => {
    const dispatch = useDispatch();
    const movieTrailor = useSelector((state) => state.movies.movieTrailor);
    const url = `${constantValue.TMDB_URL}/${movie_id}/videos`;
    
    useEffect(() => {
        if(!movie_id)return;
        const fetchMovieTrailor = async () => {
            try {
                const response = await axios.get(url, constantValue.TMDB_OPTION);
                const trailors = response.data.results.filter(
                    (video) => video.type === "Trailer" && video.site === "YouTube"
                );


                const moviesTrailor = trailors.length > 0 ? trailors[0] : null;

                if (moviesTrailor) {
                    dispatch(addMovieTrailor(moviesTrailor));
                }
            } catch (error) {
                console.error("Error fetching movie trailer:", error.message);
            }
        };

        if (!movieTrailor) {
            fetchMovieTrailor();
        }
    }, [movieTrailor, dispatch, movie_id]); 

    return movieTrailor; 
};

export default useMovieTrailor;
