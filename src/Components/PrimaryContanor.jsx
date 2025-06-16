import React from "react";
import VideoCont from "./VideoCont";
import VideoTitle from "./VideoTitle";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import useMovieTrailor from "../Hooks/useMovieTrailor";

const PrimaryContainer = () => {
  const movieList = useNowPlayingMovies();
  const movieId = movieList?.[0]?.id;

  useMovieTrailor(movieId);
  if(!movieList)return null ;
  return (
    <div className="aspect-video">
      <VideoCont />
      <VideoTitle />
    </div>
  );
};

export default PrimaryContainer;
