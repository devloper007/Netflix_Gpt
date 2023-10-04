import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        popularMovies: null,
        topMovies: null,
        upcomingMovies: null,
        trailerKey: null
    },
    reducers:{
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addpopularMovies: (state, action) =>{
            state.popularMovies = action.payload;
        },
        addtopMovies: (state, action) =>{
            state.topMovies = action.payload;
        },
        addupcomingMovies: (state, action) =>{
            state.upcomingMovies = action.payload;
        },
        addTrailerKey: (state, action) =>{
            state.trailerKey = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addTrailerKey, addpopularMovies, addtopMovies, addupcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;