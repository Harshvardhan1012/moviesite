import React, { useEffect } from 'react'
import { fetchasyncids, getallids, removeselectedmovieorshow } from '../Store/movieslice'
import {  useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Spinner } from './Spinner'
export const MovieDetail = (props) => {
  const dispatch=useDispatch();
  const {imdbID} =useParams();
  useEffect(()=>{
    dispatch(fetchasyncids(imdbID));
    return()=>{
      dispatch(removeselectedmovieorshow());
    }
  },[dispatch,imdbID])
  const id=useSelector(getallids);
  console.log(id);
  return (
    <div className='moviedetail'>
     {/* {Object.keys(id).map((key) => (
        <div key={key}>{key}: {id[key]}</div>
      ))} */}
<div>{id.Title}</div>
<img src={id.Poster} height='100' width='100' />
<div>{id.Actors}</div>
<div>{id.Awards}</div>
<div>{id.Director}</div>
<div>{id.Type}</div>
<div>{id.imdbRating}</div>
<div>{id.Writer}</div>
{/* {id.Ratings.map((s)=>(<div>{s.Source}{s.Value}</div>))} */}
<div>{id.imdbVotes}</div>

    </div>
  )
}
