import React from 'react'
import '../sass/Home.scss'
import img1 from '../img/1.jpeg'
import img2 from '../img/2.jpeg'
import img3 from '../img/3.png'
import img4 from '../img/4.jpeg'
import img5 from '../img/5.jpeg'
import img6 from '../img/6.png'
import img7 from '../img/Safar Poster.jpg'
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
            <NavLink to='/virtual'>
                <img className='home__end--img home__end--img1' src={img2} alt='img-2'></img>
            </NavLink>
            <NavLink to='/stizer'>
                <img className='home__end--img home__end--img1' src={img3} alt='img-3'></img>
            </NavLink>
            <NavLink to='/illustration'>
                <img className='home__end--img home__end--img1' src={img4} alt='img-4'></img>
            </NavLink>
            <NavLink to='/nike'>
                <img className='home__end--img home__end--img1' src={img5} alt='img-5'></img>
            </NavLink>
            <NavLink to='/safar'>
                <img className='home__end--img home__end--img6' src={img7} alt='img-7'></img>
            </NavLink>
            </div>
    </div>
  )
}

export default Home