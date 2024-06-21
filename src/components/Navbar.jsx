import logo from "../assets/logo.jpg"
import instagramIcon from "../assets/instagram.png"
import githubICon from "../assets/github.png"
import whatsappIcon from "../assets/whatsappIcon.png"
import { navItems } from "../constants/Index"
import {Menu, X} from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

const menuVariants = {
    hidden: {opacity: 0}, 
    show: {opacity: 1, 
    transition: {staggerChildren: 0.25, }}
  }
  
  const logoVariants = {
    hidden: {opacity: 0, x: -100}, 
    show: {opacity: 1, x: 0,},
    transition: {delay: 0.5}
  }

  const hamburgerVariants = {
    hidden: {opacity: 0, x: 100}, 
    show: {opacity: 1, x: 0,}
  }

  const liVariants = {
    hidden: {opacity: 0}, 
    show: {opacity: 1},
    transition: {delay: 1}
  }

  const iconVariants = {
    hidden: {opacity: 0}, 
    show: {opacity: 1},
    transition: {delay: 2}
  }

export const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

        const toggleNavbar = () => {
            setMobileDrawerOpen(!mobileDrawerOpen)
        };

  return (
    <nav  className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80" >
    <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          
            <div  className=" ml-4 flex items-center flex-shrink-0 lg:ml-12">
                <motion.a variants={logoVariants} initial="hidden" animate="show" href="#"> <img className="w-7 h-7 mr-2 rounded-xl" src={logo} alt="logo" /></motion.a>
            </div>

            <motion.div variants={menuVariants} initial="hidden" animate="show" className="flex items-center space-x-8 gap-5 mr-12">
                <ul className="hidden lg:flex space-x-12">
                    {navItems.map((item, index) => (
                        <motion.li variants={liVariants} key={index}>
                            <a className="nav hover:text-teal-300 transition-all duration-300" href={item.href}>{item.label}</a>
                        </motion.li>
                    ))}
                </ul>

                <span className="hidden lg:flex border-r-2 border-white h-6"></span>

                <div className="hidden lg:flex gap-7 items-center">
                    <motion.a variants={iconVariants} href="https://wa.me/+6285860044207">
                        <img className="w-6 h-6" src={whatsappIcon} alt="Whatsapp" />
                    </motion.a>
                    <motion.a variants={iconVariants} href="https://github.com/ftrnhasby">
                        <img className="w-6 h-6" src={githubICon} alt="Github" />
                    </motion.a>
                </div>
            </motion.div>

            <div className="lg:hidden md:flex flex-col justify-end mr-4">
                <motion.button variants={hamburgerVariants} initial="hidden" animate="show" onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X /> : <Menu />}
                </motion.button>
            </div>

        </div>

      {mobileDrawerOpen && (
        <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-left mt-3  border-t border-neutral-700/80 items-start lg:hidden">
            <ul>
                {navItems.map((item, index) => (
                    <li key={index} className="py-2">
                        <a href={item.href}>{item.label}</a>
                    </li>
                ) )}
            </ul>

        </div>
      )}

    </div>
</nav>

  )
}

