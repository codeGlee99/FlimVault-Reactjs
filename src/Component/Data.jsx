import React, { useEffect, useState } from 'react'
import DatasCard from "./DatasCard";
import axios from "axios";

function Data({handleWatchList, handleRemoveWatchList,watchlist}) {

  const[Data,setData] = useState([]);

  const url = "https://fakestoreapi.com/products";

  useEffect(()=>{
    axios.get(`${url}`).then(
      function(res){
   
       setData(res.data)
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
        Data.map((items) =>{
        
          return <DatasCard 
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

export default Data