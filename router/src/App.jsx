import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import {Routes,Route} from "react-router-dom"
import PageNotFound from './Components/PageNotFound'
import Forms from './Components/Registration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>

    {/* performing routing  */}
    {/* <Home/>
    <Contact/>
    <About/> */}

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path='/form' element={<Forms/>}/>
      
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </>
  )
}

export default App
