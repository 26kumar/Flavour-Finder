import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Mainpage from './Component/Mainpage'
import {Routes, Route } from 'react-router-dom'
import Mealinfo from './Component/Mealinfo'

function App() {
  

  return (
    <Routes>
      {/* <Route path='/' element={<InitialPage/>}></Route> */}
      <Route path='/' element={<Mainpage/>}></Route>
      <Route path='/:mealid' element={<Mealinfo/>}></Route>
    </Routes>
  )
}

export default App
