import React from 'react'
import { Link } from 'react-router-dom'

const Create = () => {
    console.log(window.location.pathname)
    return (
        <div className='text-center text-white text-6xl pt-10'>
            <h1>Create </h1>
            <div className='w-full h-[700px] flex justify-evenly py-20'>
                <Link to="audio"><img src="/src/assets/audio.svg" alt="" className='h-full w-full p-10 object-center border rounded-3xl backdrop-blur-xl hover:scale-110 animations-all duration-500' /></Link>
                <Link to="text"><img src="/src/assets/text.svg" alt="" className='h-full w-full p-10 object-center border rounded-3xl backdrop-blur-xl hover:scale-110 animations-all duration-500' /></Link>
            </div>
        </div>
    )
}

export default Create