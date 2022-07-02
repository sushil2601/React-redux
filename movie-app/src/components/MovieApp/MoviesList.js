import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { addMovie } from '../../actions/moviesAction'
import MovieCard from './MovieCard'

const MoviesList = (props) =>{
    const dispatch = useDispatch()
    // const movies = useSelector((state)=>{
    //     return state.movies
    // })
    return(
        <div>
            <h2>Movie List</h2>
            <MovieCard />
        </div>
    )
}

export default MoviesList