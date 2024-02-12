import React from 'react'
import { NavLink } from 'react-router-dom'
import img from './download.png'
import './all.css'
export const Header = () => {
  return (
<nav className='navbar'>
      <NavLink  to='/'>Home</NavLink>
      <NavLink to='shows'>Shows</NavLink>
      <img src={img}  width='50' height='30'/>
</nav>
    


  )
}
