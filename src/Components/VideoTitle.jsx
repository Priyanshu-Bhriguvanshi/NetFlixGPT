import React from 'react';
import Button from './Button';
import { useSelector } from 'react-redux';
import useMovieTrailor from '../Hooks/useMovieTrailor';
const VideoTitle = () => {

  const moviesList= useSelector(state=>state?.movies?.nowPlayingMovies)
  if(!moviesList)return
  const toDisplay = moviesList[0]
  
  return (
    <div className="absolute top-0 left-0 w-full aspect-video bg-gradient-to-r from-black to-transparent  text-white p-8">
      {/* Content Wrapper */}
      <div className="absolute top-1/3 left-1/12 max-w-lg space-y-4">
        {/* Title */}
        <h1 className="font-bold text-6xl">{toDisplay.title}</h1>
        
        {/* Description */}
        <p className="text-lg">
          {toDisplay.overview}
        </p>

        {/* Button */}
        <div>
          <Button className="bg-red-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300" name="Watch" />
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
