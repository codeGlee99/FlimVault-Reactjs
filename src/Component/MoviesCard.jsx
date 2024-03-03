import React from "react";
import CloseIcon from "../Assets/closeIcon.png";

const MoviesCard = ({
  dataObj,
  path,
  name,
  price,
  handleWatchList,
  handleRemoveWatchList,
  watchlist,
}) => {
  const imageUrl = path;

  function doesContain(dataObj) {
    for (let i = 0; i <= watchlist.length; i++) {

      if (watchlist[i] == dataObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex-row mb-10">
      <div className="bg-slate-400 text-white flex  justify-center place-items-center place-self-end h-[5vh] w-[100px] rounded-full">
        ${price}
      </div>

      <div
        className="h-[40vh] w-[300px] bg-center bg-cover flex flex-col justify-between items-end"
        style={{
          backgroundImage: `url("${imageUrl}" )`,
          border: "10px thin #ccc",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {doesContain(dataObj) 
        ? (<div  className="flex  w-8 h-[8] m-4 bg-gray-900/60  justify-center rounded-lg"
          onClick={() => {
            handleRemoveWatchList(dataObj);
          }}>
             <img src={CloseIcon} alt="closeIcon"/>
           </div>) 
        : (
           <div className="flex  w-8 h-[8] m-4 bg-gray-900/60  justify-center rounded-lg"
          onClick={() => {
            handleWatchList(dataObj);
          }}
        >
          &#128512;
        </div>) }
       
      </div>
      <div className="bg-slate-700 text-white h-[10vh] w-[300px] p-2 font-semibold">
        {name}
      </div>
    </div>
  );
};

export default MoviesCard;
