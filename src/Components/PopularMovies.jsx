import React from 'react'
import usePopularMovies from '../Hooks/usePopular'
import MoviesCard from './MoviesCard'
const PopularMovies = () => {
    const popularMoviesList = usePopularMovies()
    if(!popularMoviesList)return null
    return (
    
    <div className='flex flex-col p-8 text-white space-y-4'>
        <h2 className='font-bold text-3xl '>Popular Movies</h2>
        <div className="flex flex-row shrink-0 "   style={{ overflowX: "scroll", scrollbarWidth: "none" }}
>
            {
                popularMoviesList.map((movies=><MoviesCard key={movies.id} title={movies.title} posterPath={movies.poster_path}/>))
            }
        </div>
    </div>
  )
}

export default PopularMovies