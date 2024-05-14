import './about.scss'
import React, { useRef } from 'react'
import BgParticles from './bg-particles/BgParticles'
import { motion, useInView } from 'framer-motion'

const introAnimation = {
  initial:{
      scale:1,
      opacity:1
  },
  animate:{
    scale:1.5,
    opacity:0,
  },
}
const detailsAnimation = {
  initial:{
      scale:1,
      opacity:1
  },
  animate:{
    scale:0.5,
    opacity:0,
  },
}


function About() {
  
const screenRef =  useRef(null)

const isInView = useInView(screenRef,{
  margin:"-100%"
})
  return (
    <div className='about-me' ref={screenRef}>
      <BgParticles/>
    <div className='content-wrapper'>
      <div className='content-card'>
        <div className='card-col'>
          <img className='display-img' src="/animoji.webp" alt="" />
        </div>
        <div className='card-col'>
          <motion.div className="overlay-intro" animate={isInView?"initial":"animate"} variants={introAnimation}>
            <h1>
              You can call me, Mir 😎
            </h1>
          </motion.div>
          <motion.div className="align-row" animate={isInView?"animate":"initial"} variants={detailsAnimation}>
            <ul className='inline-info'>
                <li><img src="/icons/gender.svg" alt="gender" /> Male</li>
                <li><img src="/icons/baby.svg" alt="baby" /> 23years</li>
            </ul>
            <p>I am a results-driven developer and computer science engineer with a deep passion for programming and a constant thirst for knowledge. Having 2 years of experience in the software development industry, I have honed my skills in various programming languages and technologies, always striving to push the boundaries of what's possible. I believe that the best ideas are born through collaboration, and I thrive in an environment that fosters teamwork, diversity, and open exchange of ideas.</p>        
            <ul className='inline-info'>
                <li><img src="/icons/home.svg" alt="home" />Bolpur, Bhibhum, WB, India</li>
                <li><img src="/icons/location.svg" alt="location" /> Kolkata, WB, India</li>
            </ul>            
          </motion.div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default About