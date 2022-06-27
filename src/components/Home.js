import React from 'react'
import '../sass/Home.scss'
import Header from './Header'

const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <div className='home__description'>
            <p className='home__description--title'>👋🏻Hello, I’m Shubh</p>
            <p className='home__description--sec'>
                I’m a designer that transforms complex
                problems into elegant solutions using
                visual design, rapid prototyping, 
                and interaction skills.
            </p>   
        </div>
        
    </div>
  )
}

export default Home