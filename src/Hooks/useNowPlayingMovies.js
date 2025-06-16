import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addNowPlayingMovies} from "../Store/MoviesSlice"
import constantValue from "../Config/Constant"

const useNowPlayingMovies=()=>{
    
    const dispatch = useDispatch()    
    const nowPlayingMovies = useSelector(state=> state.movies.nowPlayingMovies)
    const url = constantValue.TMDB_URL+"/now_playing?language=en-US&page=1"
   
    const fetchNowPlayMovies = async()=>{
        try {
            const moviesList = await axios.get(url, constantValue.TMDB_OPTION)
            if(moviesList){
                dispatch(addNowPlayingMovies(moviesList.data.results))
            }
        } catch (error) {
           console.error("Getting Error during fetching movies list", error.message)
        }
    }

    useEffect(()=>{
        !nowPlayingMovies && fetchNowPlayMovies()
    },[])
    return nowPlayingMovies

}
export default useNowPlayingMovies




// const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';


