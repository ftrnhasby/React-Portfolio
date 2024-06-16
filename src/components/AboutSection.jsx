import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const AboutSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Transform for h1 to animate from bottom to top
  const headingTransform = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const headingOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Transforms for paragraphs to animate from left and right
  const paragraphLeft = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const paragraphRight = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const paragraphOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div id="about" className="h-screen w-full flex justify-center items-center" ref={containerRef} style={{ overflowX: 'hidden' }}>
      <div className="flex flex-col px-5 h-screen text-left gap-5 sm:w-[80%] md:w-[80%] lg:w-[80%] justify-center">
        <motion.h1
          style={{ translateY: headingTransform, opacity: headingOpacity }}
          className="text-4xl font-bold mb-4 text-center"
        >
          Hi, Nice to meet you!
        </motion.h1>
        <motion.p
          style={{ translateX: paragraphLeft, opacity: paragraphOpacity }}
          className="text-lg text-center"
        >
          Back in May 2023, I made the decision to relocate in order to pursue employment. I put a lot of effort into obtaining my dream job as a web developer, and eventually, I was employed as a Fullstack Web Developer remotely :)
        </motion.p>
        <motion.p 
          style={{ translateX: paragraphRight, opacity: paragraphOpacity }}
          className="text-lg text-center"
        >
          Currently, I have experience with a wide range of tasks, including managing servers, domains, landing sites, CRM, and APIs. In addition, I am a web administrator at Pamulang University, where I work.
        </motion.p>
        <motion.p 
          style={{ translateX: paragraphLeft, opacity: paragraphOpacity }}
          className="text-lg text-center"
        >
          When I’m not at the computer, I usually go out by myself to get coffee and spend the afternoon listening to music.
        </motion.p>
      </div>
    </div>
  );
};
