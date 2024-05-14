import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion"

const variants = {
  visible:{
      opacity:1,
      scale:1,
      transition:{
          duration:0.5,
          staggerChildren:0.2
      }
  },
  hidden:{
      opacity:0,
      scale:0.5
  }
}

const Navbar = () => {

  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial="hidden" animate="visible" variants={variants} >M.I.R</motion.span>
        <motion.div initial="hidden" animate="visible" variants={variants} className="social">
          <motion.a variants={variants} href=""><img src="/facebook.png" alt="" /></motion.a>
          <motion.a variants={variants} href=""><img src="/instagram.png" alt="" /></motion.a>
          <motion.a variants={variants} href=""><img src="/youtube.png" alt="" /></motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
