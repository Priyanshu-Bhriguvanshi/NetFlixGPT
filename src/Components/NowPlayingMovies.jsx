import React from "react";
import MoviesCard from "./MoviesCard";
import { useSelector } from "react-redux";

const NowPlayingMovies = () => {
  const nowPlayingList = useSelector((state) => state.movies.nowPlayingMovies);

  return ( <div className="-mt-45 mx-10 flex hide-scrollbar"   style={{ overflowX: "scroll", scrollbarWidth: "none" }}
>
    {nowPlayingList &&
      nowPlayingList.map((movie) => (
        <MoviesCard key={movie.id} title={movie.title} posterPath={movie.poster_path} />
      ))}
  </div> 
  
    
  );
};

export default NowPlayingMovies;



