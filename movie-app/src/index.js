import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider  } from 'react-redux'

import configureStore from './store/configureStore'
import App from './App'


const store = configureStore()
// console.log(store)

console.log('state',store.getState())

store.subscribe(()=>{
  console.log('state updated',store.getState())
})


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

