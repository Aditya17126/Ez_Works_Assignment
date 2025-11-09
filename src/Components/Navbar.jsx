import React from 'react'
import '../Components/Css/navbar.css'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className='navbar'>
        <ul className='element'>
           <li className='contact'><Link to={"/ContactForm"}>Contact Us</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar