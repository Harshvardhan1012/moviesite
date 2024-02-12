import React from 'react'
import { useSelector } from 'react-redux'
import { getallmovies, getallseries } from '../Store/movieslice'
import { MovieCard } from './MovieCard'
import { ShowCard } from './ShowCard'
import { Spinner } from './Spinner'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchasyncmovies } from '../Store/movieslice'
import { fetchasyncseries } from '../Store/movieslice'

export const MovieListeng = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(fetchasyncmovies());
      dispatch(fetchasyncseries());
      console.log("dispatched");  
  },[])
  const movies=useSelector(getallmovies);
  // console.log(movies);
  let rendermovies="";
  // let renderseries="";

  rendermovies=movies.Response==="True"?(movies.Search.map((movie,index)=>
  <MovieCard key={index} data={movie}/>)
  ):(<Spinner/>);



  return (
    <div >
    <div className='listening'>{rendermovies}</div>
    {/* <div className='shows'>SHOWS</div> */}


    </div>
  )
}
