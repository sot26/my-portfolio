import React from "react";
import Fade from 'react-reveal/Fade';

function About(){
    return(
        
        <div name="About" className="bg-black w-full h-screen lg:px-28 2xl:flex 2xl:justify-center" >
            <div className="flex flex-col justify-center items-center w-full h-full px-8 lg:px-28 2xl:max-w-[1800px]">
           
            {/* about */}
                <div className="max-w-[1100px] w-full  grid grid-cols-2 gap-8">
                    <div className="text-white sm:text-right pb-8 ">
                       <p className="text-4xl sm:text-6xl font-bold text-[#FF0000] 2xl:text-9xl">About</p>
                    </div>
                    <div className="hidden sm:flex"></div>

                </div>
                {/* about info */}
            <div className="text-white max-w-[1600px] w-full   grid md:grid-cols-2  gap-8">
                        <div className="sm:text-right 2xl:w-[800px]">
                        <Fade left>
                            <p className="text-3xl font-medium sm:text-5xl text-gray-100 2xl:text-7xl">
                                Hi, I'm Oluwatobi, nice to meet you. Please take a look around.
                            </p>
                        </Fade>
                        </div>
                        <div className="2xl:w-[800px]">
                        <Fade right>
                            <p className="text-1xl sm:text-2xl sm:pt-1 text-gray-100 2xl:text-5xl">
                            I am passionate about building a nice, efficient, responsive website that is easy to navigate, user friendly
                            and improve live of those around me. An incredibly smart, super flexible, amazingly powerful and 
                            visual by nature website. 
                            </p>
                        </Fade>
                        </div>
                </div>
            </div>
         </div>
         
        
    )
}

export default About