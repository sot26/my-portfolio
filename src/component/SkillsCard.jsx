import React from 'react'
import Pulse from 'react-reveal/Pulse';



function SkillsCard(props) {
  return (
    <Pulse>
    <div className="shadow-md shadow-[#354259] hover:scale-110 duration-500 hover:bg-gray-700  py-5 lg:h-auto 2xl:mx-10 2xl:w-120">
        <img className="w-20 mx-auto 2xl:w-40" src={props.image} alt="html-icon" />
        <p className="my-4 2xl:text-2xl">{props.name}</p>
    </div>
    </Pulse>
  )
}

export default SkillsCard