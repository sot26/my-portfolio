import React from "react"
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi"
import Typewriter from "typewriter-effect";
import hand from "../asset/hand.png"
import Fade from 'react-reveal/Fade';



function Home(){
    return(
        
        <div name="Home" className="bg-black w-full h-screen" >
                
                <div className="max-w-[1100px] h-full mx-auto text-white flex flex-col justify-center px-8 lg:px-48 2xl:max-w-[1800px]">
                <Fade bottom>
                    <div className="w-auto">
                        <p className="flex justify-center sm:flex sm:justify-start text-3xl sm:text-4xl font-bold 2xl:text-5xl">Hi there<img className="wave w-[25px] h-auto sm:w-[35px] sm:h-auto ml-2 2xl:w-[50px] 2xl:h-auto" src={hand} alt="waving hand" />,</p>
                        <p className=" justify-center sm:flex sm:justify-start py-2 text-4xl sm:text-7xl font-bold flex 2xl:text-9xl">I'm  <p className="pl-3 sm:pl-4 text-[#FF0000]">S</p>amuel <p className="pl-3 sm:pl-4 text-[#FF0000]">O</p>luwa<p className="text-[#FF0000]">T</p>obi</p>
                        <p className="flex justify-center sm:flex sm:justify-start pt-0 text-3xl sm:text-6xl font-bold text-gray-200 2xl:text-8xl">
                            <Typewriter 
                                options={{
                                    autoStart:true,
                                    loop: true,
                                    delay: 70,
                                    strings: ["Frontend developer.", "UI designer."]
                                }}
                            />
                        </p>
                        <p className="flex justify-center px-[0px] sm:px-0 text-justify sm:flex sm:justify-start  py-3 text-2xl font-bold text-gray-400 max-w-[650px] 2xl:text-5xl 2xl:max-w-[1040px]">
                            A passionate Frontend developer🚀 I enjoy solving problem. I also build responsive Web
                            applications with JavaScript / Reactjs / Tailwind and some other cool tools.
                        </p>
                    </div>
                    </Fade>
                    <div className=" text-2xl flex justify-center sm:justify-start">
                    <Fade bottom>
                    <Link  to="Contact" smooth={true} duration={500} >
                    <button className="group border-2 rounded-lg border-[#30d5c8] px-6 py-3 mt-2 font-bold flex justify-center items-center bg-[#30d5c8] hover:bg-white hover:text-black hover:border-white 2xl:h-24 2xl:mt-7 2xl:text-4xl">Contact Me 
                        <span className="group-hover:rotate-90 duration-300 "><HiArrowNarrowRight className="ml-2"/></span>
                        </button>
                    </Link>
                    </Fade>  
                    </div>
                </div>
           
        </div>
        
    )
}


export default Home