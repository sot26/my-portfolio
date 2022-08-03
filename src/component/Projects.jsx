import React from 'react'
import todo from "../asset/todo.png"
import bmi from '../asset/bmi.png'
import crypto from '../asset/crypto.png'
import dice from '../asset/dice.png'
import banking from '../asset/banking.png'
import Card from './Card'
import Pulse from 'react-reveal/Pulse';


function Projects() {
  return (
    <div>
         <div name="Project" className=" bg-black w-full h-[100%] sm:h-[100vh] lg:px-28 text-white ">
            <div className="lg:px-28 max-w-[1100px] mx-auto flex flex-col justify-center w-full h-full px-8 2xl:max-w-[1800px]">
                <div className="flex justify-center">
                    <p className="text-4xl sm:text-6xl font-bold text-[#FF0000] 2xl:text-9xl">Projects</p><br/>
                </div>
                <div className="flex justify-center">
                    <p className="pt-4 text-2xl 2xl:text-4xl">These are few of my previos works</p><br/>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center pt-1 sm:px-10 mt-6">
                    {/* <Card 
                       name = "Dice Game"
                       images = {dice}
                       url = "/"
                    /> */}
                    <Card 
                       name = "Todo App"
                       images = {todo}
                       view = "https://sot-todo-app.netlify.app/"
                       code = "/"
                    />
                    <Card 
                       name = "Bmi calculator"
                       images = {bmi}
                       view = "https://sot-bmi-calculator.netlify.app/"
                       code = "/"
                    />
                    <Card 
                       name = "Crypto Tracker"
                       images = {crypto}
                       view = "https://sot-crypto-tracker.netlify.app/"
                       code = "/"
                    />
                    {/* Banking card */}
                    <div className='flex justify-center 2xl:mx-6'>
                        <div className='w-auto h-auto my-6 shadow-md shadow-[#354259]  md:w-[300px] 2xl:h-[600px] 2xl:w-[600px]'>
                            <Pulse>
                                <div className='flex justify-center bg-white h-auto 2xl:h-[500px] image-design'>
                                    <img src={banking} alt="project image"/>
                                </div>
                                <div className='w-auto my-4 justify-between px-6 2xl:h-[100px] '>
                                    <div className='flex items-center justify-center mb-6'>
                                        <p className='text-2xl md:text-2xl 2xl:text-4xl'>Banking App UI Design</p>
                                    </div>
                                    <div className='flex items-center justify-center w-full mb-6'>
                                        <div>
                                            <a href="https://www.figma.com/proto/QHL76s0bqJhMJ52tEAlrlP/Untitled?node-id=32%3A101&scaling=scale-down&page-id=0%3A1&starting-point-node-id=36%3A175">
                                                <button className='w-[90px] h-[30px]  border-2  rounded-2xl hover:scale-110 duration-500 hover:bg-gray-700 2xl:w-[120px] 2xl:h-[40px]'><p className='2xl:text-2xl'>View</p></button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Pulse>
                        </div> 
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects