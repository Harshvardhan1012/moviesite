import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { useState } from "react"
import movieapi from "../APi/movieapi";
import { Apikey } from "../APi/mmovieapikey";
export const fetchasyncmovies=createAsyncThunk("movies/fetchasyncmovies",async()=>{
    const movieText='Harry';
    const res=await movieapi.get(`?apikey=${Apikey}&s=${movieText}&type=movie`)
    .catch(err=>console.log(err))
   
    console.log("res->movie",res);
    return res.data;
    
})

export const fetchasyncids=createAsyncThunk("movies/fetchasyncids",async(id)=>{
  const res=await movieapi.get(`?apikey=${Apikey}&i=${id}`)
  .catch(err=>console.log(err))
   
    console.log("res->id",res);
    return res.data;

})
export const fetchasyncseries=createAsyncThunk("movies/fetchasyncseries",async()=>{
    const seriesText='Harry';
    const res=await movieapi.get(`?apikey=${Apikey}&s=${seriesText}&type=series`)
    .catch(err=>console.log(err))
   
    console.log("res->series",res);
    return res.data;
    
})
const initialState={
    movies:{},
    shows:{},
    ids:{}
}
const movieslice=createSlice({
    name:"movies",
    initialState,
    reducers:{
       
        removeselectedmovieorshow:(state)=>{
          state.ids={};
        }
    //     getallmovies:(state,action)=>{
    //         state.movies.movies=action.payload;

    //     }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchasyncmovies.pending, (state) => {
            console.log("pending");
          })
          .addCase(fetchasyncmovies.fulfilled, (state, action) => {
            console.log("fulfilled");
            state.movies = action.payload;
          })
          .addCase(fetchasyncmovies.rejected, (state) => {
            console.log("reject");
          })
          .addCase(fetchasyncseries.fulfilled, (state, action) => {
            console.log("fulfilled");
            state.shows = action.payload;
          })
          .addCase(fetchasyncids.fulfilled,(state,{payload})=>{
            console.log("object");
            state.ids=payload;
          })
      }

})
export const {removeselectedmovieorshow}=movieslice.actions;
export default movieslice.reducer;
export const getallmovies=(state)=>state.movies.movies;
export const getallseries=(state)=>state.movies.shows;
export const getallids=(state)=>state.movies.ids;
// export loading
// export const getallmovies=((state)=>state.movies.movies);