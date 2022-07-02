import React,{useState} from 'react'
import { useDispatch  } from 'react-redux'
import { addMovie, moviesAction } from '../../actions/moviesAction'


const AddMovie = (props) =>{

    const dispatch = useDispatch()

    const [title,setTitle] = useState('')
    const [rank,setRank] = useState('')
    
    const handleTitleChange = (e) =>{
        setTitle(e.target.value)
    }

    const handleRankChange = (e) =>{
        setRank(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        const formData = {
            id : Number(new Date()),
            title : title,
            rank : Number(rank)
        }
        dispatch(addMovie(formData))
        console.log('form Data', formData)
        setTitle('')
        setRank('')
    }


   
    return(
        <div>
            <h2>Add Movie</h2>
            <form onSubmit={handleSubmit}>

                <input 
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                /><br />
                <input 
                    type="text"
                    value={rank}
                    onChange={handleRankChange}
                /><br />
                
                <input type="submit" value="save"/>
            </form>
        </div>
    )
}

export default AddMovie