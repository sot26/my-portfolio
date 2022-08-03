import React from 'react'
import { FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

function Contact(){
    return(
        <div name="Contact" className='h-auto text-white sm:h-screen w-full bg-black px-8 pt-24'>
            <div className="lg:px-28 max-w-[1100px] mx-auto flex flex-col justify-center w-full h-full px-8 2xl:max-w-[1800px]">
                    <div className='flex flex-col justify-center items-center'>
                    <Fade bottom>
                        <form method='POST' action='https://getform.io/f/79bfe30b-89c5-4f81-881b-333988b8c4e4' className='flex flex-col max-w-[600px] 2xl:max-w-[1100px]'>
                            <div>
                                <p className="text-4xl sm:text-6xl font-bold flex text-[#FF0000] 2xl:text-9xl"> Contact Me <a href='tel:+2348133168490'><img  className='w-10 mx-5 sm:w-14 2xl:pt-12 text-xs text-white'  src="https://twemoji.maxcdn.com/2/72x72/260e.png" alt='contact icon'/></a></p>
                                <p className="py-4 text-2xl 2xl:text-4xl 2xl:py-8">Discuss a project or just want to say hi? Please fill 
                                the form or make use of the social platform</p>
                            </div>
                                <input className='p-2 bg-gray-600 2xl:p-6 2xl:text-4xl ' type="text" placeholder="Fullname" name="name" required/>
                                <input className='p-2 bg-gray-600 mt-6 2xl:p-6 2xl:text-4xl 2xl:mt-12' type="email" placeholder="Email" name="Email" required/>
                                <input className='p-2 bg-gray-600 my-6 2xl:p-6 2xl:text-4xl 2xl:mt-12' type="text" placeholder="Subject" name="subect" required/>
                                <textarea className="p-2 bg-gray-600 2xl:p-6 2xl:text-4xl 2xl:mt-6" name="message" rows="10" placeholder='message' required/>
                                <button className='text-2xl rounded-lg mx-auto mt-10 border-2 px-6 py-3 font-bold hover:bg-white hover:border-white hover:text-black border-[#30d5c8] bg-[#30d5c8] 2xl:h-24 2xl:mt-7 2xl:text-4xl'>
                                Submit
                                </button>
                        </form>
                        
                        <div className="flex justify-center pb-4 lg:hidden mt-12">
                            <ul className='flex justify-center items-center'>
                                <a className=' contactsocial bg-[#0072b1] mx-2' href="https://www.linkedin.com/in/oluwatobi-omotosho-854804145/">
                                    <li className="flex justify-between items-center  m-5 w-auto h-auto ">
                                    <FaLinkedin size={20} className=" bg-[#0072b1]"/>
                                    </li>
                                </a>
                                <a className=' contactsocial bg-[#171515] mx-2' href="https://github.com/sot26">
                                    <li className="flex justify-between items-center  m-5 w-auto h-auto ">
                                    <FaGithub size={20} className="bg-[#171515]" />
                                    </li>
                                </a>
                                <a className=' contactsocial bg-[#EA4335] mx-2' href="mailto:omotoshotobi26@gmail.com">
                                    <li className="flex justify-between items-center  m-5 w-auto h-auto ">
                                    <FaGoogle size={20} className="bg-[#EA4335]" />
                                    </li>
                                </a>
                                {/* <a className=' contactsocial bg-[#1DA1F2] mx-2' href="https://twitter.com/tobiie___">
                                    <li className="flex justify-between items-center  m-5 w-auto h-auto ">
                                    <FaTwitter size={20} className="bg-[#1DA1F2]"/>
                                    </li>
                                </a> */}
                                <a className=' contactsocial bg-[#e95950] mx-2' href="https://www.instagram.com/_s_o_t__/">
                                    <li className="flex justify-between items-center  m-5 w-auto h-auto ">
                                    <FaInstagram size={20} className="bg-[#e95950] "/>
                                    </li>
                                </a>

                            </ul>
                        </div>
                        <div className='sm:mt-12 w-auto mt-4'>
                            <a  href='tel:+2348133168490'>
                            <p className="flex justify-center text-2xl pb-4 hover:scale-110 duration-500 hover:text -gray-400  2xl:text-4xl">+2348133168490</p> 
                            </a>                          
                        </div>

                    </Fade>
                    </div>
                </div>
        </div>

    )
}

export default Contact



                           
                             
                            