import React from 'react'
import '../sass/Home.scss'
import Header from './Header'
import img1 from '../img/1.jpeg'
import img2 from '../img/2.jpeg'
import img3 from '../img/3.png'
import img4 from '../img/4.jpeg'
import img5 from '../img/5.jpeg'
import img6 from '../img/6.png'
import { NavLink } from 'react-router-dom'

const Home = ({setBackColor}) => {
  return (
    <div className='home'>
        <div className='home__description'>
            <p className='home__description--title'>👋🏻Hello, I’m Shubh</p>
            <p className='home__description--sec'>
                I’m a designer that transforms complex
                problems into elegant solutions using
                visual design, rapid prototyping, 
                and interaction skills.
            </p>   
        </div>
        <div className='home__end'>
            <NavLink to='/clean_mumbai' onClick={() => setBackColor(true)}>
                <img className='home__end--img home__end--img1' src={img1} alt='img-1'></img>
            </NavLink>
                <img className='home__end--img home__end--img2' src={img2} alt='img-2'></img>
                <img className='home__end--img home__end--img3' src={img3} alt='img-3'></img>
                <img className='home__end--img home__end--img4' src={img4} alt='img-4'></img>
                <img className='home__end--img home__end--img5' src={img5} alt='img-5'></img>
                <img className='home__end--img home__end--img6' src={img6} alt='img-6'></img>
            </div>
    </div>
  )
}

export default Home