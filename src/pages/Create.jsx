import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import EditQueries from '../components/EditQueries'
import CreateText from '../components/CreateText'
import CreateAudio from '../components/CreateAudio'

const Create = () => {
    const [text, setText] = useState(null)
    const [style, setStyle] = useState("Charles Dana Gibson style")
    const [storyId, setStoryId] = useState(null)

    useEffect( () => {
        console.log("effect")
        setText(null)
    }, [])
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <div className='text-center text-white text-6xl pt-10'>
                        <h1>Create </h1>
                        <div className='w-full h-[700px] flex justify-evenly py-20'>
                            <Link to="audio"><img src="/src/assets/audio.svg" alt="" className='h-full w-full p-10 object-center border rounded-3xl backdrop-blur-xl hover:scale-110 animations-all duration-500' /></Link>
                            <Link to="text"><img src="/src/assets/text.svg" alt="" className='h-full w-full p-10 object-center border rounded-3xl backdrop-blur-xl hover:scale-110 animations-all duration-500' /></Link>
                        </div>
                    </div>
                } />
                <Route path="/text" element={text ? <Navigate to="../edit" /> : <CreateText setText={setText} setStoryId={setStoryId}/>} />
                <Route path="/audio" element={text ? <Navigate to="../edit" /> : <CreateAudio setText={setText}/>} />
                <Route path="/edit" element={<EditQueries text={text} style={style} setStyle={setStyle} storyId={storyId}/>} />
            </Routes>
        </>
    )
}

export default Create