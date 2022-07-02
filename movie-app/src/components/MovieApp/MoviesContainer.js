import react from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'
import AddMovie from './AddMovie'
import Moviestats from './MovieStats'


const MoviesContainer = (props) =>{
    const movies = useSelector((state)=>{
        return state.movies
    })

    return(
        <div>
            <h2>No. of movie  - {movies.length}</h2>
            <MoviesList />
            <AddMovie/>
            <Moviestats />
        </div>
    )

}

export default MoviesContainer