import React from 'react'
import MoviesCard from './MoviesCard'

function Movies() {
  return (
    <div>
    <div className='flex justify-center m-5 text-2xl font-bold'>
      Trending Movies
    </div>
    <div className='flex  flex-row flex-wrap  justify-around gap-3'>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>

          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
          <MoviesCard/>
    </div>
    </div>
  )
}

export default Movies