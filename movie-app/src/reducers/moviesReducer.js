const moviesInitialState = []

const moviesReducer = (state = moviesInitialState,action) =>{
    switch(action.type){

        case 'ADD_MOVIE' : {
            return [...state,{...action.payload}]
        }

        default:{
            return [...state]
        }
    }
}

export default moviesReducer