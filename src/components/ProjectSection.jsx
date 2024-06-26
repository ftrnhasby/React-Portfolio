import { useState } from "react";
import { projects } from "../constants/Index";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ProjectModal from "./ProjectModal";

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const boxVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const ProjectSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null); // State to track selected project index

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);

  const openModal = (index) => {
    setSelectedProject(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div
      id="projects"
      className="min-h-screen w-full flex flex-col justify-center items-start p-4 sm:p-8"
      style={{ overflowX: "hidden" }}
      ref={containerRef}
    >
      <h1 className="text-3xl sm:text-4xl mb-8 sm:mb-11 tracking-[.05em] text-start px-10">
        Projects
      </h1>
      <motion.div
        variants={gridVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-10  w-full max-w-7xl"
      >
         {projects.map((item, index) => (
          <motion.div
            variants={boxVariants}
            key={index}
            whileHover={{ scale: 1.1, zIndex: 40 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileTap={{ scale: 1 }}
            className={`rounded-lg p-4 shadow-xl bg-white/5 ring-1 ring-white/20 backdrop-blur-xl  sm:mb-0 ${
              hoveredIndex !== null && hoveredIndex !== index ? "blur-sm" : ""
            }`}
            onClick={() => openModal(index)} // Open modal on click
          >
            <img
              src={item.image}
              className="mb-2 w-full h-auto rounded-lg"
              alt={item.title}
            />
            <div className="flex justify-between items-center mb-2">
              <h6 className="font-semibold">{item.title}</h6>
              <h6 className="text-neutral-400">{item.date}</h6>
            </div>
            <p className="text-neutral-400 mb-4 text-left">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 rounded border-[1px] border-teal-400 bg-teal-400 bg-opacity-5 px-2 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selectedProject !== null && (
        <ProjectModal
          project={projects[selectedProject]}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};
