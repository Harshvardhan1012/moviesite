import React from 'react'
import { Link } from 'react-router-dom';
import { Spinner } from './Spinner';
import { useSelector } from 'react-redux';
import { getallseries } from '../Store/movieslice';
import './all.css'
export const ShowCard=()=>{
  let renderseries="";
  const shows=useSelector(getallseries);

  renderseries=shows.Response==="True"?(shows.Search.map((show)=>(
    
    <div className='card'>
    <Link to={`/movie/${show.imdbID}`}>
    <img src={show.Poster} width='100' height='100' />
        <div>{show.Title}</div>
        <div>{show.Type}</div>
        </Link>
    </div>
  ))):(<Spinner/>)
return(
  <div className='shows'>{renderseries}</div>
)
    // const {show}=props;


  
}

