import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increment } from '../../actions/countAction'
import { decrementNumber , incrementNumber,removeNumber } from '../../actions/numbersAction'

const NumbersList = (props) =>{

    const dispatch = useDispatch()
    const numbers = useSelector((state)=>{
        return state.numbers
    })

    const handleDecrement = (id) =>{
        dispatch(decrementNumber(id))
    }

    const handleIncrement = (id) =>{
        dispatch(incrementNumber(id))
    }

    const hanldeRemove = (id) =>{
        dispatch(removeNumber(id))
    }

    return(
        <div>
            <ul>
                { numbers.map((num)=>{
                    return <li key={num.id}> { num.value } 
                    <button onClick={()=>{
                        handleDecrement(num.id)
                    }}> - </button>
                    <button onClick={()=>{
                        handleIncrement(num.id)
                    }}> + </button>
                    <button onClick={()=>{
                        hanldeRemove(num.id)
                    }}> x </button>
                     </li>
                })}
            </ul>
        </div>
    )
}

export default NumbersList