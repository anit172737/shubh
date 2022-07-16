import React from 'react'
import '../sass/Nike.scss'
import img1 from '../img/5.jpeg';
import img2 from '../img/nike/1.jpeg'
import img3 from '../img/nike/2.jpeg'
import img4 from '../img/nike/3.jpeg'
import img5 from '../img/nike/5.jpeg'
import img6 from '../img/nike/6.jpeg'

const Nike = () => {
  return (
    <div className='nike'>
        <p className='nike__title'>NIKE</p>
        <div className='nike__sec'>
            <div className='nike__sec--first'>
                <p className='nike__sec--first-1'></p>
                <p className='nike__sec--first-2'></p>
            </div>
            <div className='nike__sec--last'>
                <img className='nike__sec--last-img nike__sec--last-img-1' src={img1} alt={img1}></img>
                <img className='nike__sec--last-img nike__sec--last-img-2' src={img2} alt={img2}></img>
                <img className='nike__sec--last-img nike__sec--last-img-3' src={img3} alt={img3}></img>
                <img className='nike__sec--last-img nike__sec--last-img-4' src={img4} alt={img4}></img>
                <img className='nike__sec--last-img nike__sec--last-img-5' src={img6} alt={img5}></img>
                <img className='nike__sec--last-img nike__sec--last-img-6' src={img5} alt={img6}></img>
            </div>
            <div className='nike__sec--end'>
            <p className='nike__sec--end-1'></p>
            </div>
        </div>
    </div>
  )
}

export default Nike