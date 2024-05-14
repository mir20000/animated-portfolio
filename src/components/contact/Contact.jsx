import React, { useRef, useState } from 'react'
import './contact.scss'
import {motion, useInView} from 'framer-motion'
import emailjs from '@emailjs/browser';

const animation = {
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    }
}

function Contact() {
    const contactRef =useRef(null);
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const isView = useInView(contactRef,{margin:'-100px'})

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_dypevvu",
            "template_vl8kd5g",
            formRef.current,
            "Bbrb3LhPV08Ah4Eto"
          )
          .then(
            (result) => {
              setSuccess(true)
            },
            (error) => {
              setError(true);
            }
          );
      };

  return (
    <motion.div ref={contactRef} className='contact' variants={animation} initial="initial" whileInView="animate">
        <motion.div className="text-container" variants={animation}>
            <motion.h1 variants={animation}>Way to reach me</motion.h1>
            <motion.div className="item" variants={animation}>
                <motion.h2>Mail</motion.h2>
                <motion.span>ijazur38@gmail.com</motion.span>
            </motion.div>
            <motion.div className="item" variants={animation}>
                <motion.h2>Address</motion.h2>
                <motion.span>School Bagan, Bolpur, Birbhum, WB, India</motion.span>
            </motion.div>
            <motion.div className="item" variants={animation}>
                <motion.h2>Phone</motion.h2>
                <motion.span>+91 9232384204</motion.span>
            </motion.div>
        </motion.div>
        <motion.div className="form-container">
        <motion.div
          className="phone-svg"
          initial={{ opacity: 1 }}
          animate={isView&&{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <svg width="450px" height="450px" viewBox="0 0 32.666 32.666">
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isView&&{ pathLength: 1 }}
              transition={{ duration: 4 }}
              d="M21.8178 7.68475C22.5632 8.25194 23 9.13431 23 10.071V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V10.071C1 9.13431 1.43675 8.25194 2.18224 7.68475C4.36739 6.02221 8.93135 2.55149 10.2 1.6C11.2667 0.8 12.7333 0.8 13.8 1.6C15.0686 2.55148 19.6326 6.02221 21.8178 7.68475ZM3 10.1688L10.1411 15.8065C11.231 16.667 12.769 16.667 13.8589 15.8065L21 10.1688V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V10.1688ZM12.6 3.2L19.7792 8.58443L12.6196 14.2367C12.2563 14.5236 11.7437 14.5236 11.3804 14.2367L4.22077 8.58443L11.4 3.2C11.7556 2.93333 12.2444 2.93333 12.6 3.2Z"
            />
          </svg>
        </motion.div>
            <motion.form
              initial={{ opacity: 0 }}
              animate={isView&&{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
              ref={formRef}
              onSubmit={sendEmail}
            >
          <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
            </motion.form>
        </motion.div>
    </motion.div>
  )
}

export default Contact