import './parallax.scss';
import {motion, useScroll, useTransform} from "framer-motion"
import { useRef } from 'react'

function Parallax({title}) {

    const parallaxRef = useRef()
    const {scrollYProgress} = useScroll({
        target: parallaxRef,
        offset: ["start start","end start"]
    })

    const verticalText = useTransform(scrollYProgress,[0,1],["0%","500%"])
    const verticalBg = useTransform(scrollYProgress,[0,1],["0%","100%"])

  return (
    <div className="parallax" ref={parallaxRef}>
        <motion.h1 style={{y:verticalText}}>{title}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div style={{y:verticalBg}} className="planets"></motion.div>
        <motion.div style={{x:verticalBg}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax