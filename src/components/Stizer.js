import React from 'react'
import img1 from '../img/3.png'

const Stizer = () => {
  return (
    <div className='home'>
      <div className='home__description'>
            <p style={{fontSize:'3vw', fontWeight:'700', color:'white'}}>STIZER</p>
            <p style={{fontSize:'2vw', color:'white', textAlign:'center', padding:'0vw 5vw' }}>
            Poster Design for Stizermusic - Music Producer.
            There was one music event held at College festival for that I made posters for his performance. 
            It was grand festival so he wanted to have some unique entry posters and one song poster called “DHYAN”. 
            </p>   
        </div>
        <div style={{display:'grid', justifyContent:'center', padding:'2vw 0vw'}}>
        <img style={{height:'40vw', width:'50vw'}} src={img1} alt='img1'></img>
        </div>

        <div style={{paddingBottom:'8vw'}}>
            <p style={{fontSize:'2vw', color:'white', textAlign:'center', padding:'5vw 5vw' }}>
            “The real question is not whether life exists after death. 
             The real question is whether you are alive before death." - OSHO 
            </p>   
        
        <div style={{display:'grid', justifyContent:'center'}}>
        <img style={{height:'40vw', width:'50vw'}} src={img1} alt='img1'></img>
        </div>
        </div>
    </div>
  )
}

export default Stizer