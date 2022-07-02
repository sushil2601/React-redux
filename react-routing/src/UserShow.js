import React,{ useState, useEffect } from 'react'
import { Link,useParams} from 'react-router-dom'
import axios from 'axios'

const UserShow = (props) => {

    const [user,setUser] = useState({})

    // const { id } = props.match.params  {No longer used so used below one}
    const { id } = useParams();

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response)=>{
                const result = response.data
                setUser(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])

    return(
        <div>
            <h1>Show - { id }</h1>
            <p>{ user.name } - { user.email } - { user.address && user.address.city }</p>

            <Link to="/users">back</Link>
        </div>

    )
}

export default UserShow