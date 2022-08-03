import React, {useState} from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaGoogle, FaTwitter} from "react-icons/fa";
import Slide from 'react-reveal/Slide';

function Navbar(){
    var [nav, setNav] = useState(false)

    function navClick(){
        setNav(!nav)
    }

    return(
       
    <div className="fixed h-[50px] pt-2 mb-4 sm:pt-[0]  w-full sm:h-[80px] flex justify-between items-center px-4 bg-black 2xl:px-80 2xl:h-[150px] navbar-custom">
    <header className="flex justify-between w-full skill">
         {/* logo */}
        <div className="text-4xl sm:text-5xl logo  font-semibold 2xl:text-9xl">
        <a href="/">
                <span className="text-[#acb9b8]">{'<'}</span>
                <span className="text-[#FF0000] px-2">Sot</span>
                <span className="text-[#acb9b8]">{'/>'}</span>
        </a>
        </div>

        {/* menu */}
        <div className="hidden md:flex text-white ">
            <ul className="flex  menu">
                <li  className="px-6 cursor-pointer text-2xl hover:scale-110 duration-500 hover:text-gray-400 2xl:text-4xl 2xl:px-10">
                    <Link  to="Home" smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className="px-6 cursor-pointer text-2xl hover:scale-110 duration-500 hover:text-gray-400 2xl:text-4xl 2xl:px-10">
                    <Link  to="About" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className="px-6 cursor-pointer text-2xl hover:scale-110 duration-500 hover:text-gray-400 2xl:text-4xl 2xl:px-10">
                    <Link  to="Skills" smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className="px-6 cursor-pointer text-2xl hover:scale-110 duration-500 hover:text-gray-400 2xl:text-4xl 2xl:px-10">
                    <Link  to="Project" smooth={true} duration={500} >
                        Project
                    </Link>
                </li>
                <li className="px-6 cursor-pointer text-2xl hover:scale-110 duration-500 hover:text-gray-400 2xl:text-4xl 2xl:px-10">
                    <Link  to="Contact" smooth={true} duration={500} >
                        Contact Me
                    </Link>
                </li>
            </ul>
        </div>
        {/* icons */}
        <div onClick={navClick} className="md:hidden z-10">
            {!nav ? <FaBars size={20} className="text-white cursor-pointer"/> : <FaTimes size={20} className="text-white cursor-pointer"/>}
        </div>


        {/* mobile menu */}
        <Slide top>
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-50vh bg-black flex flex-col justify-center items-center py-10 shadow-md text-white shadow-[#354259]' }>
                <li className="py-6 text-1xl">
                    <Link onClick={navClick}  to="Home" smooth={true} duration={500} >
                            <span className="cursor-pointer">Home</span>
                        </Link>
                </li>
                <li className="py-6 text-1xl">
                    <Link onClick={navClick} to="About" smooth={true} duration={500} >
                           <span className="cursor-pointer"> About </span>
                    </Link>
                </li>
                <li className="py-6 text-1xl">
                    <Link onClick={navClick} to="Skills" smooth={true} duration={500} >
                            <span className="cursor-pointer">Skills</span>
                    </Link>
                </li>
                <li className="py-6 text-1xl">
                    <Link onClick={navClick} to="Project" smooth={true} duration={500} >
                            <span className="cursor-pointer">Project</span>
                    </Link>
                </li>
                <li className="py-6 text-1xl">
                    <Link onClick={navClick} to="Contact" smooth={true} duration={500} >
                            <span className="cursor-pointer">Contact</span>
                    </Link>
                </li>
            </ul>
            </Slide>
            </header>


   
    </div>
    )
}

export default Navbar;