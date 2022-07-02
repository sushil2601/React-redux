import React from 'react'
import { useSelector } from 'react-redux'
import moviesReducer from '../../reducers/moviesReducer'

const Moviestats = (props) =>{

    const movies = useSelector((state)=>{
        return state.movies
    })

    return(
        <div>
            <h2>Movie Stats</h2>
            <h3>Total Movie - {movies.length}</h3>
            <h2>{`#${movies.rank} ${movies.name}`}</h2>
        </div>
    )
}

export default Moviestats