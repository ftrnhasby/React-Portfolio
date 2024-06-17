import React from "react";
import { motion } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: "-50%" },
  visible: { opacity: 1, y: "0%", transition: { duration: 0.3 } },
};

const ProjectModal = ({ project, closeModal }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black/50"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className="bg-[#121212] rounded-lg p-6 max-w-3xl mx-4 md:mx-auto overflow-y-auto max-h-full"
        variants={modalVariants}
        style={{ maxHeight: "90vh" }}
      >
        <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
        <p className="text-gray-400 mb-4">{project.paragraphOne}</p>
        
        {project.images.map((image, index) => (
          <img
            src={image}
            className="mb-2 w-full h-auto rounded-lg"
            alt={`Project ${index + 1}`}
            key={index}
          />
        ))}

        {project.features.map((feature, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-4 text-gray-400">{feature.title}</h2>
            <ul className="text-gray-400 mb-4 list-disc list-inside">
              {feature.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        
        <motion.button
          onClick={closeModal}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1, backgroundColor: "#4ECDC4" }}
          className="border border-blue-200 py-1 px-20 rounded-lg mt-8"
        >
          Close
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
