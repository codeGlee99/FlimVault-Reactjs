import React from 'react'

const MoviesCard = ({path, name}) => {

   console.log(path,"path")
 
  //  const imageUrl = `https://dummyapi.online/api/${path}`;
  const imageUrl = path;
  

  return (
    <div 
    className='h-[40vh] w-[200px] bg-center bg-cover flex-row  rounded-xl hover:cursor-pointer hover:scale-110 duration-300'
    //  style={{ backgroundImage:`url("https://dummyapi.online/api/${path}")`}}
     style={{ backgroundImage: `url("${imageUrl}")`, 
     border: '1px solid #ccc',
     }}
    >
      <div>{name}</div>

    </div>
  )
}

export default MoviesCard