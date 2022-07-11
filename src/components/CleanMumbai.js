import React, { useState } from 'react'
import '../sass/CleanMumbai.scss'
import img1 from '../img/cleanMumbai/1.png'
import img2 from '../img/cleanMumbai/2.jpeg'
import img3 from '../img/cleanMumbai/3.png'
import img4 from '../img/cleanMumbai/4.png'
import img5 from '../img/cleanMumbai/5.png'
import img6 from '../img/cleanMumbai/6.png'
import img7 from '../img/cleanMumbai/7.png'
import Modal from './Modal'


const CleanMumbai = () => {
  const [showModal, setShowModal] = useState(false)
  const handleOpen = () =>{
    setShowModal(true)
  }

  const handleClose = () =>{
    setShowModal(false)
  }

  return (
    <div className='clean'>
      {showModal && 
        <Modal showModal={showModal} handleClose = {handleClose}/>
      }
      <div>
      <div className='clean__head'>
        <p className='clean__head--p'>Mobile <br/>Application &nbsp;----</p>
        <p className='clean__head--title'>Clean Mumbai Application</p>
        <p className='clean__head--details'>Clean Mumbai is a mobile app that 
          assists in keeping the city clean. 
          It promotes the convergence of BMC and Mumbai residents into a single platform. It allows citizens the ease of connecting with BMC workers just through one app. No more searching phone numbers from numerous people.
        </p>
        <div className='clean__head--end'>
          <p><span style={{fontWeight:'bold'}}>Year</span><br/><br/><span>2021</span></p>
          <p><span style={{fontWeight:'bold'}}>Role</span><br/><br/><span>2UI/UX</span></p>
        </div>
      </div>
      <div>
        <img className='clean__img' src={img1} alt='clean__img1'></img>
      </div>
      </div>

      <div>
      <div className='clean__overview'>
        <p className='clean__head--title'>Overview:</p>
        <p className='clean__head--details'>
          <span style={{fontWeight:'bold'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Clean Mumbai</span> is a mobile app that assists in keeping the <span style={{fontWeight:'bold'}}>city clean. </span> It promotes the convergence of BMC and Mumbai residents into a single platform. It allows citizens the ease of connecting with BMC workers just through one app. 
          <span style={{fontWeight:'bold'}}> No more searching phone numbers</span> from numerous people.<br/><br/>

          The <span style={{fontWeight:'bold'}}>reason</span> why I chose to create<span style={{fontWeight:'bold'}}> Clean Mumbai app</span> is because of my personal experience as a citizen of Mumbai. 
          The irony is many houses in Mumbai are well cleaned and spotless.<br/><br/>

          Yet right outside rows of these clean houses, there are filthy streets with <span style={{fontWeight:'bold'}}>mountains of garbage. </span> 
          Its not entirely the people’s fault since there is lack of roadside dustbins and public washrooms. 
          The citizens have a hard time realizing the fact that their personal hygiene is being affected in so many ways. 
          Looking at unclean surrounding places and roads it felt the need to find a faster way that would be more 
          <span style={{fontWeight:'bold'}}> efficient</span> and <span style={{fontWeight:'bold'}}>effective</span> for both BMC and citizens.
        </p>
      </div>
      <div>
        <img className='clean__img' src={img2} alt='clean__img2'></img>
      </div>
      </div>

      <div>
        <div className='clean__overview'>
          <p className='clean__head--title'>Problem Statement:</p>
          <p className='clean__head--details'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          As of right now, every day we see <span style={{fontWeight:'bold'}}>bunch of garbage</span> in our surrounding. 
            We have to call the BMC workers to clean it and to connect with them <span style={{fontWeight:'bold'}}>becomes a tough task. </span>becomes a tough task. 
            The main problem is existing cleaning methods are very time consuming, we don’t even know when the garbage will be cleaned. 
          </p>
        </div>
        <div>
        <img className='clean__img' src={img3} alt='clean__img3'></img>
        </div>
      </div>

      <div>
        <div className='clean__overview'>
          <p className='clean__head--title'>User Research:</p>
          <p className='clean__head--details'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Since I was dealing with 2 sided users, I wanted to get insights of both citizens and BMC to create surveys.
          There was total 20 people (10 each survey) who filled out these surveys.<br/><br/>
          In citizens POV survey, the questions consisted of their experience about cleanliness in their surrounding 
          and whether or not they are satisfied with the actions taken by government.<br/><br/>
          In BMC POV survey, the questions that were asked solely about their work schedule and problems that they suffer while doing cleaning.
          </p>
        <div>
        <img className='clean__img' style={{padding:'2vw 1vw', height:'62vw'}} src={img4} alt='clean__img4'></img>
        </div>
        </div>
      </div>
      <div>
        <p className='clean__head--title' style={{textAlign:'center', fontSize:'2.5vw', padding:'3vw 0vw'}}>User Persona - 1</p>
        <img className='clean__img' style={{padding:'2vw 0vw', height:'74vw'}} src={img5} alt='clean__img5'></img>
      </div>

        <div className='clean__overview'>
          <p className='clean__head--title'  style={{textAlign:'center', fontSize:'2.5vw', padding:'1vw 0vw'}}>Insights</p>
          <p className='clean__head--details' style={{textAlign:'center'}}>
          From the responses I gathered from the two surveys, it was clear that both sides
          had a major problem with the current interaction between Citizen and Bmc workers.
          </p>
          <img className='clean__img' style={{height:'31vw', paddingTop:'2vw', paddingBottom:'4vw'}} src={img6} alt='clean__img6'></img>        
        </div>

        <div style={{backgroundColor:'#CDE5FF', paddingBottom:'3vw'}}>
        <div className='clean__overview'>
          <p className='clean__head--title'>Information Architecture:</p>
          <p className='clean__head--details'>
            After analyzing the data gathered from my <span style={{fontWeight:'bold'}}>user research</span>, I wanted to create a mobile app. The main reason was that I 
            wanted the product to be <span style={{fontWeight:'bold'}}>accessible</span> where users can pull out the app 
            <span style={{fontWeight:'bold'}}> whenever</span> and <span style={{fontWeight:'bold'}}> wherever</span> they are.<br/><br/> 
            An IA was created to help me figure out all the different functions needed in the app.</p>
        </div>
        </div>

        <div>
          <div className='clean__overview'>
            <p className='clean__head--title'>Low-fidelity wireframes:</p>
            <p className='clean__head--details'>
              Once I had clear idea of information architecture of the app, I went ahead and created low-fidelity wireframes for both citizen and bmc. There are 3 main functions
              i wanted to focus on to solve the problem: reporting, complaints gathering and taking actions on it.
            </p>
          </div>
          <img className='clean__img' style={{height:'45vw', cursor:'pointer'}} onClick={handleOpen}  src={img7} alt='clean__img7'></img>
        </div>

        <div>
          <div className='clean__overview'>
            <p className='clean__head--title'>Usability Testing:</p>
            <p className='clean__head--details'>
            Before moving on to hi-fi wireframes, I wanted to make sure the app I created was functional and covered all the necessary workflows. 
            I tested on 5 different people who were asked to go through several tasks that would allow them to experience the whole app.
            </p>
          </div>
          <img className='clean__img' style={{height:'45vw'}}  src={img7} alt='clean__img7'></img>
        </div>
    </div>
  )
}

export default CleanMumbai