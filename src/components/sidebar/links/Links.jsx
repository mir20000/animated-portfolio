import { motion } from "framer-motion";
const Links = ({setIsOpen}) => {
  const variants = {
    open: {
      transition: {
        staggerChildren: 0.17,
      },
    },
    close: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const childVariants = {
    open: {
      x: 0,
      opacity: 1,
    },
    close: {
      x: -75,
      opacity: 0,
    },
  };

  const sidebarLinks = [
    {
      name: "Home",
      anchor: "#home",
    },
    {
      name: "About",
      anchor: "#about",
    },
    {
      name: "Portfolio",
      anchor: "#portfolio",
    },
    {
      name: "Content",
      anchor: "#content",
    },
  ];
  return (
    <motion.div className="links" variants={variants}>
      {sidebarLinks.map((link, index) => (
        <motion.a
          variants={childVariants}
          href={link.anchor}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          key={index}
          onClick={()=>setIsOpen((prev)=>!prev)}
        >
          {link.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
