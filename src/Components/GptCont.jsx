import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'
import  MoviesCard from "./MoviesCard"

const GptCont = () => {
  const movies = useSelector(state=>state.gpt.movies)

  return (
    <div className='bg-gray-800 flex flex-col justify-center items-center pt-30 h-screen'>
        
            <GptSearch/>
            {(movies && movies.length>0) && <div className='flex flex-row  justify-center overflow-x-scroll w-full px-4 gap-4' style={{ scrollbarWidth: 'none' }}>
              {
                movies?.map(movie=><MoviesCard key={movie[0]?.id}title={movie[0]?.title} posterPath={movie[0]?.poster_path}></MoviesCard>)
              }
            </div>}
       

    </div>
  )
}

export default GptCont