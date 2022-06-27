import React from 'react'
import '../sass/Header.scss'
import img1 from '../icons/insta.png'
import img2 from '../icons/in.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='header__start'>
            <a href='https://www.instagram.com' target='_blank'>
                <img className='header__start--img' src={img1} alt='linkedin'></img>
            </a>
            <a href='https://www.linkedin.com' target='_blank'>
                <img className='header__start--img' src={img2} alt='insta'></img>
            </a>
        </div>
        <div className='header__center'>
            <p className='header__center--title'>SHUBHAM GHANEKAR</p>
        </div>
        
        <div className='header__end'>
            <input 
            className='header__end--title' 
            type='button' 
            value='Work'
            />
            <input 
            className='header__end--title' 
            type='button' 
            value='About'/>
        </div>
    </div>
  )
}

export default Header