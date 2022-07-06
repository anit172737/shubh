import React from 'react'
import '../sass/CleanMumbai.scss'
import img1 from '../img/cleanMumbai/1.png'

const CleanMumbai = () => {
  return (
    <div className='clean'>
      <div className='clean__head'>
        <p className='clean__head--p'>Mobile <br/>Application &nbsp;----</p>
        <p className='clean__head--title'>Clean Mumbai Application</p>
        <p className='clean__head--details'>Clean Mumbai is a mobile app that 
          assists in keeping the city clean. 
          It promotes the convergence of BMC and Mumbai residents into a single platform. It allows citizens the ease of connecting with BMC workers just through one app. No more searching phone numbers from numerous people.
        </p>
        <div className='clean__head--end'>
          <p>Year<br/><br/>2021</p>
          <p>Role<br/><br/>2UI/UX</p>
        </div>
      </div>
      <div>
        <img className='clean__img' src={img1} alt='clean__img1'></img>
      </div>
    </div>
  )
}

export default CleanMumbai