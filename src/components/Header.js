import React from 'react'
import { NavLink } from 'react-router-dom'
import '../sass/Header.scss'
import img1 from '../icons/insta.png'
import img2 from '../icons/in.png'

const Header = ({backColor , setBackColor}) => {
  return (
    <div className={backColor ? 'header__1' : 'header'}>
        <div className='header__start'>
            <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
                <img className={backColor ? 'header__start--img-1' : 'header__start--img'} src={img1} alt='linkedin'></img>
            </a>
            <a href='https://www.linkedin.com' target='_blank' rel='noreferrer'>
                <img className={backColor ? 'header__start--img-1':'header__start--img'} src={img2} alt='insta'></img>
            </a>
        </div>
        <div className='header__center'>
            <p className={backColor ? 'header__center--title-1':'header__center--title'}>SHUBHAM GHANEKAR</p>
        </div>
        
        <div className='header__end'>
        <NavLink  
            to='/' onClick={()=>setBackColor(false)}
            className={({ isActive }) => (isActive ? 'header__end--active' : backColor ? 'header__end--title-1' : 'header__end--title')}>
                Home
            </NavLink>
            <NavLink  
            to='/work' onClick={()=>setBackColor(false)}
            className={({ isActive }) => (isActive ? 'header__end--active' : backColor ? 'header__end--title-1' : 'header__end--title')} >
                Work
            </NavLink>
            <NavLink  
            to='/about' onClick={()=>setBackColor(false)}
            className={({ isActive }) => (isActive ? 'header__end--active' : backColor ? 'header__end--title-1' : 'header__end--title')}>
                About
            </NavLink>
        </div>
    </div>
  )
}

export default Header