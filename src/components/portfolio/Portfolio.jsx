import { useRef } from 'react'
import './portfolio.scss'
import {motion ,useScroll, useSpring, useTransform} from 'framer-motion'

function Project({item}) {

    const projectRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target:projectRef,
        offset:["start end", "end start"]
    })

    const scrollYTransform = useTransform(scrollYProgress,[0,1],["300%",'-300%'])
    // style={{y:scrollYTransform}}
  return (
    <section style={{height:"80vh"}} ref={projectRef}>
        <div className="container">
            <div className="wrapper">
                <div className="img-container">
                    <img src={item.img} alt="" />                    
                </div>
            <motion.div style={{y:scrollYTransform}} className="text-container">
                <h2 >{item.title}</h2>
                <p>{item.description}</p>
                <button>Know More</button>
            </motion.div>                
            </div>

        </div>
    </section>
  )
}


function Portfolio() {
    const projectLists = [
        {
            id:1,
            title:"Project 1",
            img:"https://images.pexels.com/photos/20147082/pexels-photo-20147082/free-photo-of-a-sunset-over-a-river-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam architecto nobis a? Ut cupiditate dicta vitae? Facere ea enim, hic excepturi corporis, porro dolorem temporibus exercitationem ducimus obcaecati aut beatae?"
        },
        {
            id:2,
            title:"Project 2",
            img:"https://images.pexels.com/photos/20147082/pexels-photo-20147082/free-photo-of-a-sunset-over-a-river-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam architecto nobis a? Ut cupiditate dicta vitae? Facere ea enim, hic excepturi corporis, porro dolorem temporibus exercitationem ducimus obcaecati aut beatae?"
        },
        {
            id:3,
            title:"Project 3",
            img:"https://images.pexels.com/photos/20147082/pexels-photo-20147082/free-photo-of-a-sunset-over-a-river-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam architecto nobis a? Ut cupiditate dicta vitae? Facere ea enim, hic excepturi corporis, porro dolorem temporibus exercitationem ducimus obcaecati aut beatae?"
        },
        {
            id:4,
            title:"Project 4",
            img:"https://images.pexels.com/photos/20147082/pexels-photo-20147082/free-photo-of-a-sunset-over-a-river-and-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam architecto nobis a? Ut cupiditate dicta vitae? Facere ea enim, hic excepturi corporis, porro dolorem temporibus exercitationem ducimus obcaecati aut beatae?"
        },
    ]
    const portfolioRef = useRef(null)

    const {scrollYProgress} = useScroll({
        target:portfolioRef,
        offset:["end end","start start"]
    })
    
    const horizonScale = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30
    })

  return (
    <div className='portfolio' ref={portfolioRef}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX:horizonScale}} className="progress-bar"></motion.div>
        </div>
        {
            projectLists.map((value,index)=><Project item={value} key={index}/>)
        }
    </div>
  )
}

export default Portfolio