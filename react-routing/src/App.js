import * as React from 'react'
import { Link, Route,Routes} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import UsersList from './UsersList'
import UserShow from './UserShow'

const App = (props) => {

    return(
        
        <div>
            <h1>React Routing</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/users">users</Link></li>
                
            </ul>
            
            <Routes>
               { /* <Route path="/" component={Home} exact={true}/>  component didnot work more.
                Instead of component we use element*/}
                <Route path="/" element={<Home/>} exact={true}/>
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>}/> 
                <Route path="/users" element={<UsersList/>} exact={true}/>
                <Route path="/users/:id" element={<UserShow/>}/>   
            </Routes> 
            
                        
                    
                   
            
            
                
            

         </div>
        
    )
}

export default App


/*
    1. Create a component
    2. export the component
    3. import the component inside App
    4. Specify the route
*/
