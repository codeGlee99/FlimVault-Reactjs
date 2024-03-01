import React from 'react'

const MoviesCard = ({path, name, price}) => {
 
  const imageUrl = path;
  

  return (
    <div className='rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex-row mb-10'>
      <div className="bg-slate-400 text-white flex  justify-center place-items-center place-self-end h-[5vh] w-[100px] rounded-full">
        ${price}</div> 
    <div 
    className='h-[40vh] w-[300px] bg-center bg-cover flex flex-col justify-between items-end'
    //  style={{ backgroundImage:`url("https://dummyapi.online/api/${path}")`}}
     style={{ backgroundImage: `url("${imageUrl}" )`, 
     border: '10px thin #ccc',
     backgroundSize: 'cover', 
     backgroundPosition: 'center', 
     }}
    >
      <div className='flex  w-8 h-[8] m-4 bg-gray-900/60  justify-center rounded-lg'>
      &#128512;
      </div>
    </div>
    <div className='bg-slate-700 text-white h-[10vh] w-[300px] p-2 font-semibold'>{name}</div>
    </div>
  )
}

export default MoviesCard