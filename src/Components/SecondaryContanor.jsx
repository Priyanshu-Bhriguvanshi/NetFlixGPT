import React from 'react'
import NowPlayingMovies from "./NowPlayingMovies";
import PopularMovies from './PopularMovies';
import useAi from "../Hooks/useAi"
const SecondaryContanor = () => {
  return (
    <div className="bg-black flex flex-col space-y-4">
        <NowPlayingMovies/>
        <PopularMovies/>
    </div>
  )
}

export default SecondaryContanor