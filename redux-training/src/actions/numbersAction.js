

export const addNumber = (randomNum) => {
    return{
        type: 'ADD_NUMBER',
        payload : randomNum
    }
}

export const plusTwo = () => {
    return{
        type: 'PLUS_TWO'
    }
}

export const removeAll = () => {
    return{
        type: 'REMOVE_ALL'
    }
}

export const decrementNumber = (id) => {
    return{
        type:'DECREMENT_NUMBER',
        payload : id 
    }
}

export const incrementNumber = (id) =>{
    return{
        type:'INCREMENT_NUMBER',
        payload : id
    }
}

export const hanldeRemove = (id) =>{
    return{
        type:'HANDLE_REMOVE',
        payload: id
    }
}

export const removeNumber = (n) =>{
    return{
        type : 'REMOVE_NUMBER',
        payload : n
    }
}