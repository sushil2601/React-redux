import React,{ useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { startGetUsers } from '../../actions/usersAction'

const UsersList = (props) =>{

    const dispatch = useDispatch()

    const users = useSelector((state)=>{
        return state.users
    })

    useEffect(()=>{
        //invoke a action creator
        dispatch(startGetUsers())
    },[])

    return(
        <div>
            <h1>Listing Users - { users.length }</h1>
        </div>
    )

}

export default UsersList