import React from 'react'
import { addNumber,plusTwo, removeAll } from '../../actions/numbersAction'
import { useDispatch } from 'react-redux'

const NumbersControl = (props) =>{

    const dispatch = useDispatch()

    const generateNumber = () => {
        const randomNumber = Math.round(Math.random()*100)
        const num = {
            id: Number(new Date()),
            value: randomNumber
        }
        dispatch(addNumber(num))
    }

    const handlePlusTwo = () => {
        dispatch(plusTwo())

    }

    const handleRemoceAll = () =>{
        dispatch(removeAll())
    }

    return(
        <div>
            <button onClick={generateNumber}>Generate</button>
            <button onClick={handlePlusTwo}>+2</button>
            <button onClick={handleRemoceAll}>Remove All</button>
        </div>
    )
}

export default NumbersControl