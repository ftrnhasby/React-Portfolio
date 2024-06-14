import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: { 
      duration: 3, 
      ease: "easeOut", 
      delay: 0.2 
    }
  }
};

export const HeroSection = () => {
  return (
    <div className="h-screen overflow-hidden w-full gap-1  flex flex-col justify-center items-center">

<div id="home" className="absolute inset-0 flex overflow-hidden justify-center items-center z-0">
    <div className="bg-shape1 absolute  opacity-50 filter blur-3xl rounded-full -top-10 -left-20"></div>
    <div className="bg-shape2 absolute opacity-50 filter blur-3xl rounded-full top-20 -right-20"></div>
  </div>

  <motion.div variants={heroVariants} initial="hidden" animate="show" className="relative -mt-14  z-10 text-center">
        <h1 className="text-xl sm:text-2xl lg:text-xl tracking-[.70em]">
            JUNIOR WEB <span className="inline bg-gradient-to-r from-teal-400 to-slate-400  text-transparent bg-clip-text">DEVELOPER</span>
        </h1>
        <h1 className="text-5xl sm:text-5xl lg:text-7xl font-bold">
            HASBY AS'SYADIQI
        </h1>
        <a href="#contact">
        <motion.button whileTap={{ scale:0.9 }} whileHover={{ scale:1.1,backgroundColor: "#4ECDC4" }} className="border border-blue-200 py-1 px-5 mt-5 rounded-lg">
            Hire Me
        </motion.button>
        </a>
    </motion.div>
    
    </div>
  )
}
