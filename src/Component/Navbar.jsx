import React from 'react'
import MovieLogo from "../Assets/movie-logo.jpg"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center border lg:space-x-8 pl-3 space-x-4 md:space-x-8'>
        <img  className='w-[100px]' src={MovieLogo} alt='MovieLogo'/>
        <Link to='/' className='font-semibold lg:text-3xl  text-xl bg-gradient-to-r from-yellow-500  to-lime-600 inline-block text-transparent bg-clip-text'>
            HOME</Link>
        <Link to='/watchList' className='font-semibold lg:text-3xl text-xl bg-gradient-to-r from-yellow-500  to-lime-600 inline-block text-transparent bg-clip-text'>
            WATCHLIST</Link>
    </div>
  )
}

export default Navbar