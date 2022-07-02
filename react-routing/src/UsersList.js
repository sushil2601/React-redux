import React ,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UsersList = (props) => {

    const [ users , setUsers] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                const result = response.data
                setUsers(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])

    return(
        <div>
            <h1>Listing Users - { users.length }</h1>
            <ol>
                { users.map((user)=>{
                    return <li key={user.id}><Link to={`/users/${user.id}`}>
                        { user.username }</Link></li>
                })}
            </ol>
        </div>
    )
}

export default UsersList