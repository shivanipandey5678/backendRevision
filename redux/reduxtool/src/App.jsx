
import { useState } from 'react'
import './App.css'
import { store } from './store'
function App() {
  const [data,setData]=useState(0);
  store.subscribe(()=>{
    console.log(store.getState())
    setData(data+1)
  })

  return (
    <>
   
    
     {JSON.stringify(store.getState())}
     <button onClick={()=>{store.dispatch({type:'SUB'})}}>subtract</button>
     <button onClick={()=>{store.dispatch({type:'ADD'})}}>ADD</button>
  
    </>
  )
}

export default App
