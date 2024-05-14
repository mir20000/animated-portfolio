import "./hero.scss";
import {motion} from "framer-motion"

const textAnimation = {
    initial:{
        x:-500,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            durations:1,
            staggerChildren:0.15
        }
    },
    scrollOption:{
        opacity:[1,1,0],
        y:[0,20,20,0],
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }
}
const rollingTextAnimation = {
    initial:{
        x:0,
    },
    animate:{
        x:"-100%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:25,
        }
    },
}

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="text-container" variants={textAnimation} initial="initial" animate="animate">
          <motion.h2 variants={textAnimation}>Mir Ijazur Rahaman</motion.h2>
          <motion.h1 variants={textAnimation}>Web Developer and UI designer</motion.h1>
          <motion.div variants={textAnimation} className="buttons">
            <motion.button variants={textAnimation} whileHover={{scale:1.1}} whileTap={{scale:0.9}}>Works</motion.button>
            <motion.button variants={textAnimation} whileHover={{scale:1.1}} whileTap={{scale:0.9}}>Contact me</motion.button>
          </motion.div>
          <motion.img animate="scrollOption" variants={textAnimation} src="/scroll.png" alt="scroll mouse" />
        </motion.div>
      </div>
      <motion.div className="rolling-text" variants={rollingTextAnimation} initial="initial" animate="animate">
         Developer * UI designer * Explorer
      </motion.div>
      <div className="image-container">
        <motion.img variants={textAnimation} initial="initial" animate="animate" src="/hero.png" alt="hero image" />
      </div>
    </div>
  );
}

export default Hero;
