import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaGoogle, FaTwitter } from "react-icons/fa";



function Sidebar() {
  return (
    <div className="hidden lg:flex fixed flex-col top-[30%] left-0">
    <ul>
        <li className="text-white w-[140px] h-[60px] flex justify-center items-center ml-[-85px]  hover:ml-[-10px] duration-300 bg-[#EA4335] 2xl:w-[200px] 2xl:h-[100px]">
            <a className="flex justify-between items-center w-full m-5"
            href="mailto:omotoshotobi26@gmail.com">
                Google <FaGoogle size={30} className="2xl:w-[80px]"/>
            </a>
        </li>
        <li className="text-white w-[140px] h-[60px] flex justify-center items-center ml-[-85px]  hover:ml-[-10px] duration-300 bg-[#0072b1] 2xl:w-[200px] 2xl:h-[100px]">
            <a className="flex justify-between items-center w-full m-5"
            href="https://www.linkedin.com/in/oluwatobi-omotosho-854804145/">
                Linkedin <FaLinkedin size={30} className="2xl:w-[80px]"/>
            </a>
        </li>
        <li className="text-white w-[140px] h-[60px] flex justify-center items-center ml-[-85px]  hover:ml-[-10px] duration-300 bg-[#171515] 2xl:w-[200px] 2xl:h-[100px]">
            <a className="flex justify-between items-center w-full m-5"
            href="https://github.com/sot26">
                Github <FaGithub size={30} className="2xl:w-[80px]"/>
            </a>
        </li>
        {/* <li className="text-white w-[140px] h-[60px] flex justify-center items-center ml-[-85px]  hover:ml-[-10px] duration-300 bg-[#1DA1F2] 2xl:w-[200px] 2xl:h-[100px]">
            <a className="flex justify-between items-center w-full m-5"
            href="https://twitter.com/tobiie___">
                Twitter <FaTwitter size={30} className="2xl:w-[80px]"/>
            </a>
        </li> */}
        <li className="text-white w-[140px] h-[60px] flex justify-center items-center ml-[-85px]  hover:ml-[-10px] duration-300 bg-[#e95950] 2xl:w-[200px] 2xl:h-[100px]">
            <a className="flex justify-between items-center w-full m-5"
            href="https://www.instagram.com/_s_o_t__/">
                Instagram <FaInstagram size={30} className="2xl:w-[80px]"/>
            </a>
        </li>
    </ul>
    </div>
  )
}

export default Sidebar