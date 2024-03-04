import React, { useState } from "react";

function WatchList({ watchlist }) {

  const[ search,setSearch] = useState('');

  const handleSearch =(e)=>{
    setSearch(e.target.value)

  }

  return (
    <>
      <div className="flex justify-center m-4 flex-wrap">
        <div className="bg-blue-400 h-[3rem] w-[9rem] flex items-center justify-center rounded-lg font-bold text-white m-4">
          All Genere
        </div>
        <div className="bg-blue-400 h-[3rem] w-[9rem] flex items-center justify-center rounded-lg font-bold text-white m-4">
          Action
        </div>
        <div className="bg-blue-400 h-[3rem] w-[9rem] flex items-center justify-center rounded-lg font-bold text-white m-4">
          Crime
        </div>
      </div>

      <div className="flex justify-center py-4">
        <input
          type="text"
          value={search}
          placeholder="Search Movies"
          className="bg-gray-200 h-[3rem] w-[18rem] px-3"
          onChange={handleSearch}
        ></input>
      </div>

      <div className="border-gray-200 border rounded-lg m-8 overflow-hidden">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>Rating</th>
              <th>Popularity</th>
              <th>Gener</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
            .filter((dataObj)=>{
                      return dataObj.title.toLowerCase().includes(search.toLowerCase())})
            .map((dataObj, index) => {
              return <tr className="border-b-2" key={index}>
                    <td className="flex items-center px-6 py-4">
                      <img src={dataObj.image} className="h-[6rem] w-[10rem]" />
                      <div className="mx-10"> {dataObj.title}</div>
                    </td>
                    <td>8.5</td>
                    <td>9</td>
                    <td>Action</td>
                    <td className="text-red-800">Delete</td>
                  </tr> 
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
