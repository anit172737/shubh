import React, { useEffect } from 'react'
import img1 from '../img/4.jpeg'

const Illustration = () => {

  return (
    <div className='home'>
      <div className='home__description'>
            <p style={{fontSize:'3vw', fontWeight:'700', color:'white'}}>Illustration</p>
            <p style={{fontSize:'2vw', color:'white', textAlign:'center', padding:'0vw 5vw' }}>
            Earlier, I developed Illustration skills so I started making my own characters. 
            Uptil now I have created 3 characters.
            </p>   
        </div>
        <div style={{display:'grid', justifyContent:'center', padding:'3vw 0vw'}}>
        <img style={{height:'40vw', width:'50vw'}} src={img1} alt='img1'></img>
        </div>
    </div>
  )
}

export default Illustration