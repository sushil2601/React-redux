import React from 'react'
import { useSelector } from 'react-redux'
import NumbersControl from './NumbersControl'
import NumbersList from './NumbersList'
import AddNumber from './AddNumber'



const NumbersContainer = (props) => {
    const numbers = useSelector((state)=>{
        return state.numbers
    })

    const findSum = () =>{
        let sum = 0
        numbers.forEach((ele)=>{
            sum += ele.value
        })
        return sum
    }


    return(
        <div>
            <h2>Listing - { numbers.length }, Sum - { findSum() }</h2>

            <NumbersList />
            <NumbersControl />
            <AddNumber />
        </div>
    )

}

export default NumbersContainer