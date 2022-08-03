import React from "react";
import html from "../asset/html.png"
import css from "../asset/css.png"
import tailwind from "../asset/tailwind.png"
import javascript from "../asset/javascript.png"
import Figma from "../asset/Figma.png"
import react from "../asset/react.png"
import SkillsCard from "./SkillsCard";


function Skills(){
    return(
        <div name="Skills" className=" bg-black w-full h-screen lg:px-28 text-white ">
            <div className="lg:px-28 max-w-[1100px] mx-auto flex flex-col justify-center w-full h-full px-8 2xl:max-w-[1800px]">
                <div className="flex justify-center">
                    <p className="text-4xl sm:text-6xl font-bold text-[#FF0000] 2xl:text-9xl">Skills</p><br/>
                </div>
                <div className="flex justify-center">
                    <p className="py-4 text-2xl 2xl:text-5xl">These are the technologies i work with.</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center py-8">
                <SkillsCard 
                    image={html}
                    name= "HTML"
                />
                <SkillsCard 
                    image={css}
                    name= "CSS"
                />
                <SkillsCard 
                    image={tailwind}
                    name= "TAILWIND"
                />
                <SkillsCard 
                    image={javascript}
                    name= "JAVASCRIPT"
                />
                <SkillsCard 
                    image={react}
                    name= "REACT"
                />
                <SkillsCard 
                    image={Figma}
                    name= "FIGMA"
                />
                </div>
            </div>
        </div>
    )
}

export default Skills;