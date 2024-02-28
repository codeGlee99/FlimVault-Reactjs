import React, { useEffect, useState } from 'react'
import MoviesCard from './MoviesCard'
import axios from "axios";

function Movies() {

  const[Movies,setMovies] = useState([]);

  const url = "https://dummyapi.online/api/movies";

  useEffect(()=>{
    axios.get(`${url}`).then(
      function(res){
      //  console.log(res.data)
       setMovies(res.data)
      }
    )
  },[])

  return (
    <div>
    <div className='flex justify-center m-5 text-2xl font-bold'>
      Trending Movies
    </div>
    <div className='flex  flex-row flex-wrap  justify-around gap-3'>
      {
        Movies.map((movies) =>{
          // console.log(movies.image,"imkdjf")
          return <MoviesCard key={movies.id} path={`${url}/${movies.image}`} name={movies.movie}/>
        })
      }
          
    </div>
    </div>
  )
}

export default Movies