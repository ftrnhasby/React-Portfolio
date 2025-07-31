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
          In May 2023, I made the decision to relocate to seek employment opportunities. After putting in a lot of effort, I achieved my dream of becoming a web developer and was hired as a Fullstack Developer.
        </motion.p>
        <motion.p 
          style={{ translateX: paragraphRight, opacity: paragraphOpacity }}
          className="text-lg text-center"
        >
          Currently, I have a diverse set of skills, including managing servers and domains, Managing Wordpress site, Create landing page, company profile, CRM systems, and APIs. Additionally, I work as a web administrator at Pamulang University, where Im studying.
        </motion.p>
        <motion.p 
          style={{ translateX: paragraphLeft, opacity: paragraphOpacity }}
          className="text-lg text-center"
        >
         When I'm not working at the computer, I enjoy going out alone to get coffee and spend my afternoons listening to music.
        </motion.p>
      </div>
    </div>
  );
};
