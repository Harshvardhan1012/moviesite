import React, { useEffect } from 'react'
// import { NavLink } from 'react-router-dom'
// import { Navlink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Apikey } from '../APi/mmovieapikey'
import movieapi from '../APi/movieapi'
import { useDispatch } from 'react-redux'
import { addmovies } from '../Store/movieslice'
import { MovieListeng } from './MovieListeng'

// import { NavLink } from 'react-router-dom'
export const Home = () => {

  
  
  return (
    <div><h1>Home Page</h1>
    <p>Welcome to the Home Page!</p>
   
      <MovieListeng/>
    </div>
  )
}
