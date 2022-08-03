import React from 'react'
import Pulse from 'react-reveal/Pulse';
import { FaLink } from 'react-icons/fa';



function Card(props) {
  return (
   <div className='flex justify-center 2xl:mx-6'>
        <div className='w-auto h-auto my-6 shadow-md shadow-[#354259]  md:w-[300px] 2xl:h-[600px] 2xl:w-[600px]'>
            <Pulse>
                <div className='flex justify-center bg-white h-auto 2xl:h-[500px] image-design'>
                    <img src={props.images} alt="project image"/>
                </div>
                <div className='w-auto my-4 justify-between px-6 2xl:h-[100px] '>
                    <div className='flex items-center justify-center mb-6'>
                        <p className='text-2xl md:text-2xl 2xl:text-4xl'>{props.name}</p>
                    </div>
                    <div className='flex items-center justify-between w-full mb-6'>
                        <div>
                            <a  href={props.code}><button className='w-[90px] h-[30px] border-2  rounded-2xl hover:scale-110 duration-500 hover:bg-gray-700 2xl:w-[120px] 2xl:h-[40px]'><p className='2xl:text-2xl'>View code</p></button></a>
                        </div>
                        <div>
                            <a href={props.view}><button className='w-[90px] h-[30px] border-2  rounded-2xl hover:scale-110 duration-500 hover:bg-gray-700 2xl:w-[120px] 2xl:h-[40px]'><p className='2xl:text-2xl'>View site</p></button></a>
                        </div>
                    </div>
                </div>
            </Pulse>
        </div> 
    </div>
  )
}

export default Card