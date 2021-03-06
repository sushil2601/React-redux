import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNumber } from '../../actions/numbersAction'

const AddNumber = (props) =>{
    const dispatch = useDispatch()
    const [number,setNumber] = useState('')
    const handleChange = (e) =>{
        setNumber(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const num = {
            id : Number(new Date()),
            // value : parseFloat(number)
            value : Number(number)
        }
        // console.log(num)
        dispatch(addNumber(num))
        setNumber('')//for reset form
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={number} onChange={handleChange}/>
            </form>
        </div>
    )

}

export default AddNumber