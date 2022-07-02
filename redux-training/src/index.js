import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import configureStore from './store/configureStore'

import { increment,decrement,incrementBy } from './actions/countAction'
import { Provider } from 'react-redux'


const store = configureStore()
// console.log(store)

console.log('state',store.getState())

store.subscribe(()=>{
  console.log('state updated',store.getState())
})

// store.dispatch(increment())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
)


