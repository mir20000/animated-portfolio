import { useState } from "react";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import {motion} from "framer-motion"

const variants = {
  open: {
    clipPath:"circle(1200px at 50px 50px)",
    transition:{
      deploy:0.5,
      type:"spring",
      stiffness:20,
    }
  },
  close: {
    clipPath:"circle(30px at 50px 50px)",
    transition:{
      deploy:0.5,
      type:"spring",
      stiffness:400,
      damping:40
    }
  },
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div className="sidebar" animate={isOpen?'open':'close'}>
      <motion.div className="bg-overlay" variants={variants}>
        <Links setIsOpen={setIsOpen}/>
      </motion.div>
      <ToggleButton setIsOpen={setIsOpen} />
    </motion.div>
  );
};

export default Sidebar;
