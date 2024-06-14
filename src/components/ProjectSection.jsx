import { projects } from "../constants/Index";
import { motion } from "framer-motion";

const gridVariants = {
  hidden: {opacity: 0}, 
  show: {opacity: 1, 
  transition: {staggerChildren: 0.25, }}
}

const boxVariants = {
  hidden: {opacity: 0}, 
  show: {opacity: 1}
}

export const ProjectSection = () => {
  return (
    <div id="projects" className="min-h-screen w-full flex flex-col justify-center items-center p-4 sm:p-8 overflow-x-hidden">
      <h1 className="text-3xl sm:text-4xl mb-8 sm:mb-11 tracking-[.05em]">Projects</h1>
      <motion.div variants={gridVariants} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-10 w-full max-w-7xl">
        {projects.map((item, index) => (
          <motion.div variants={boxVariants} key={index} className="rounded-lg p-4 shadow-xl bg-white/5 ring-1 ring-white/20 backdrop-blur-xl">
            <img src={item.Image} className="mb-2 w-full h-auto rounded-lg" alt={item.title} />
            <div className="flex justify-between items-center mb-2">
              <h6 className="font-semibold">{item.title}</h6>
              <h6 className="text-neutral-400">{item.date}</h6>
            </div>
            <p className="text-neutral-400 mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, index) => (
                <span key={index} className="mr-2 rounded border-[1px] border-teal-400 bg-teal-400 bg-opacity-5 px-2 py-1 text-sm">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
