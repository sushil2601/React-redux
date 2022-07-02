import React from 'react'
import {Link,Route,Routes,Router} from 'react-router-dom'
import Users from './Components/UserAuth/UsersList'
import Home from './Components/UserAuth/Home'
import NumbersContainer from './Components/NumbersApp/NumbersContainer'

function App(props){
  return(
    <div>
      <h1>Random Number Generator</h1>
      <NumbersContainer />

      <li><Link to="/">Home</Link></li>
      <li><Link to="/users">Users</Link></li>

      <Router>
        <Routes>
          <Route path="/" element={<Home/>} exact={true}/>   
          <Route path="/users" element={<Users/>} exact={true}/>  
        </Routes>
      </Router>
     
    </div>

  )
}

export default App





















// import { useSelector,useDispatch } from 'react-redux'
// import { increment } from './actions/countAction'
// import Btn from './Btn'
// import ShowCount from './Show'

// function App() {
//   const count = useSelector((state)=>{
//     return state.count
//   })

//   const dispatch = useDispatch()

//   return (
//     <div> 
//       <h1>Redux training</h1>
//       <h2>Count - { count }</h2>
//       <button onClick={()=>{
//         dispatch(increment())
//       }}> +1 </button>

//       <Btn />
//       <hr />
//       <ShowCount />
//     </div>
//   )
// }

// export default App



