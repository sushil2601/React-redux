import axios from 'axios'

// start or async


export const startGetUsers = () =>{
    return (dispatch) =>{

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response)=>{
                const users = response.data
                // dispatch({ type : 'SET_USERS' , payload : users})
                dispatch(setUsers(users))
            })
            .catch((err)=>{
                alert(err.message)
            })

        // setTimeout(()=>{
        //     dispatch({ type : 'SET_USERS' , payload : ['jack','jill']})

        // },2000)
        // api call


        // dispatch()
    }
}

export const setUsers = (users) =>{
    return {
        type : 'SET_USERS',
        payload : users
    }
}