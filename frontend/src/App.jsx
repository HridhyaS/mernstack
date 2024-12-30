import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import View from './components/View'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <h1>HELLO</h1>
      <Routes>
        <Route path='/add' element={<Add />} />&nbsp;
        <Route path='/view' element={<View />} />
      
    
      </Routes>
        
     
    </>
  )
}

export default App
