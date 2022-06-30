import React from 'react'
import { NavLink } from 'react-router-dom'
import '../sass/Header.scss'
import img1 from '../icons/insta.png'
import img2 from '../icons/in.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='header__start'>
            <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
                <img className='header__start--img' src={img1} alt='linkedin'></img>
            </a>
            <a href='https://www.linkedin.com' target='_blank' rel='noreferrer'>
                <img className='header__start--img' src={img2} alt='insta'></img>
            </a>
        </div>
        <div className='header__center'>
            <p className='header__center--title'>SHUBHAM GHANEKAR</p>
        </div>
        
        <div className='header__end'>
        <NavLink  
            to='/'
            className={({ isActive }) => (isActive ? 'header__end--active' : 'header__end--title')}>
                Home
            </NavLink>
            <NavLink  
            to='/work'
            className={({ isActive }) => (isActive ? 'header__end--active' : 'header__end--title')} >
                Work
            </NavLink>
            <NavLink  
            to='/about'
            className={({ isActive }) => (isActive ? 'header__end--active' : 'header__end--title')}>
                About
            </NavLink>
        </div>
    </div>
  )
}

export default Header