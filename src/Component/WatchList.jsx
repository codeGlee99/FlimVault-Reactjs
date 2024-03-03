import React from 'react'

function WatchList({watchlist}) {
  return (
    <>

 <div className='flex justify-center m-4 flex-wrap'>
  <div className='bg-blue-400 h-[3rem] w-[9rem] flex items-center justify-center rounded-lg font-bold text-white m-4'>All Genere</div>
  <div className='bg-blue-400 h-[3rem] w-[9rem] flex items-center justify-center rounded-lg font-bold text-white m-4'>Action</div>
  <div className='bg-blue-400 h-[3rem] w-[9rem] flex items-center justify-center rounded-lg font-bold text-white m-4'>Crime</div>
 </div>

    <div className='flex justify-center py-4'>
      <input type='text' placeholder='Search Movies' className='bg-gray-200 h-[3rem] w-[18rem] px-3'></input>
    </div>

    <div className='border-gray-200 border rounded-lg m-8 overflow-hidden'>
      <table  className="w-full text-gray-500 text-center">
        <thead className="border-b-2">
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Popularity</th>
            <th>Gener</th>
          </tr>
        </thead>
        <tbody>
          {
            watchlist.map((dataObj) =>{
              return(
                <>
                   <tr  className="border-b-2">
            <td className='flex items-center px-6 py-4'>
              <img src={dataObj.image}
                   className='h-[6rem] w-[10rem]'
              />
              <div className='mx-10'> THE ARCHER</div>
            </td>
            <td>8.5</td>
            <td>9</td>
            <td>Action</td>
            <td className='text-red-800'>Delete</td>
          </tr>
                </>
              )
            })
          }
       
           
        </tbody>
      </table>
    </div>

    </>
  )
}

export default WatchList