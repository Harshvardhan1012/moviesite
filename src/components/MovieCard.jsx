import React from 'react'
import { Link } from 'react-router-dom';
export const MovieCard = (props) => {
    const {data}=props;

  return (
    <div className='card'>
       <Link to={`/movie/${data.imdbID}`}> 
       <img src={data.Poster} alt={data.Title} width='100' height='180'/>
    <div>{data.Title}</div>
        <div>{data.Year}</div>
    </Link>
    </div>
  )
}
