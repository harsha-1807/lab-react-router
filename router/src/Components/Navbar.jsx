import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="container">
    <Link to={"/"} style={{display:"flex",textDecoration:"none"}}>
    <h1>KALVIUM</h1>
    <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" />   
    </Link >

    <div className='links'>
        <Link to={"/about"}>
        <h1 style={{cursor:"pointer"}}>ABOUT</h1>

        </Link>
        <Link to={"/contact"}>
        <h1 style={{cursor:"pointer"}}>CONTACT</h1>

        </Link>
    </div>
    </div>
  )
}

export default Navbar