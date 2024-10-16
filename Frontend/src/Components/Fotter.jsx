import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Fotter() {
  return (
    <div className='bg-Dark h-16 w-screen flex xl:justify-around text-white xl:items-center p-2 text-center md:justify-around md:items-center 
    '>
        <div className='w-1/3'>
        © 2024 All rights reserved.
        </div>
        <div className='w-1/3' >
            <a href="">Privacy and policy</a>
           

        </div>
        <div className='flex w-1/3 justify-center'> 
        <FaLinkedin className="text-Teal mr-3 " />
          <FaGithub className="text-Teal" />

        </div>

    </div>
  )
}

export default Fotter