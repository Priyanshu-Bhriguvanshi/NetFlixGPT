import React from 'react'
import { useSelector } from 'react-redux'
const VideoCont = () => {
    const moviesDetails = useSelector((state)=>state.movies.movieTrailor)
    return (
        <div className='relative overflow-x-hidden overflow-y-hidden aspect-video'>
            <iframe
                className="w-screen aspect-video"
                src={`https://www.youtube.com/embed/${moviesDetails?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&playsinline=1&loop=1&playlist=${moviesDetails?.key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default VideoCont