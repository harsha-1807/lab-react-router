import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="container">
    <Link to={"/"} style={{display:"flex",textDecoration:"none"}}>
    <h1>KALVIUM</h1>
    <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" />   
    </Link >

    <div className='links' style={{marginRight:"15px",display:"flex",alignItems:"center",textDecoration:"none"}}>
        <Link to={"/about"}>
        <h2 style={{cursor:"pointer"}}>ABOUT</h2>

        </Link>
        <Link to={"/contact"}>
        <h2 style={{cursor:"pointer"}}>CONTACT</h2>

        </Link>
        <Link to={"/form"}>
        <h2 style={{cursor:"pointer"}}>REGISTER</h2>

        </Link>
    </div  >
    </div>
  )
}

export default Navbar