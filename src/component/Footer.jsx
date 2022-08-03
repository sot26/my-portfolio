import React from "react";
import { FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    return(
        <div className=" w-full h-[50px] bg-black  text-gray-200 2xl:h-[150px]">
            <div className="flex flex-col justify-center items-center ">
                    <p className="text-2xl pb-6 2xl:text-4xl 2xl:py-8">
                    @{year} | Made by Samuel OluwaTobi
                    </p>
            </div>
        </div>
    )
}

export default Footer