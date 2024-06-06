import logo from "../assets/logo.jpg"
import instagram from "../assets/instagram.png"
import { navItems } from "../constants/Index"
import {Menu, X} from "lucide-react"
import { useState } from "react"

export const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

        const toggleNavbar = () => {
            setMobileDrawerOpen(!mobileDrawerOpen)
        };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
    <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          
            <div className=" ml-4 flex items-center flex-shrink-0 lg:ml-12">
                <img className="w-7 h-7 mr-2" src={logo} alt="logo" />
            </div>

            <div className="flex items-center space-x-8 mr-12">
                <ul className="hidden lg:flex space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>

                <span className="hidden lg:flex border-r-2 border-white h-6"></span>

                <div className="hidden lg:flex items-center">
                    <a href="#">
                        <img className="w-6 h-6" src={instagram} alt="Instagram" />
                    </a>
                </div>
            </div>

            <div className="lg:hidden md:flex flex-col justify-end mr-4">
                <button onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X /> : <Menu />}
                </button>
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

