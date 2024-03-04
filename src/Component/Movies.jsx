import React, { useEffect, useState } from 'react'
import MoviesCard from './MoviesCard'
import axios from "axios";

function Movies({handleWatchList, handleRemoveWatchList,watchlist}) {

  const[Movies,setMovies] = useState([]);

  const url = "https://fakestoreapi.com/products";

  useEffect(()=>{
    axios.get(`${url}`).then(
      function(res){
   
       setMovies(res.data)
      }
    )
  },[])

  return (
    <div>
    <div className='flex justify-center m-5 text-2xl font-bold'>
      TOP TRENDING ARRIVALS 
    </div>
    <div className='flex  flex-row flex-wrap  justify-around '>
      {
        Movies.map((items) =>{
        
          return <MoviesCard 
           dataObj={items}
           key={items.id} 
           path={items.image} 
           name={items.title} 
           price={items.price} 
           handleWatchList={handleWatchList}
           handleRemoveWatchList={handleRemoveWatchList}
           watchlist={watchlist} 
           />
        })
      }
    
          
    </div>
    </div>
  )
}

export default Movies