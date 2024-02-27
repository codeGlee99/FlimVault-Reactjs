import React from 'react';
import BannerImg from '../Assets/movie-banner/banner-img-1.jpg';
import "../styles/Banner.css";

function Banner() {
  return (



<div className='h-[20vh] md:h-[70vh]  bg-cover lg:bg-contain sm:bg-center md:bg-center pt-0 flex bg-red-300 justify-center items-end'
    style={{ 
      backgroundImage: `url(${BannerImg})`,
    }}>
      <div className='text-center bg-gray-900/60 w-full text-blue-100 text-3xl font-semibold p-4'>
        AVATAR'S FANTASY</div>
    </div>
     

 
  )
}

export default Banner