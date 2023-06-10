import React, { useEffect, useState } from 'react'
import { urlImages, urlPrompts } from '../constant';
import Query from './Query';

const EditQueries = ({ text, style }) => {
    const [prompts, setPromts] = useState(null);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        fetch(urlPrompts, {
            method: "POST",
            body: JSON.stringify({
                story: text
            })
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(data => {
            setPromts(data.queries)
        })
    }, [])
    return (
        <div className='flex flex-col items-center gap-5'>
            {prompts ? prompts.map((prompt, i) => {
                return <Query key={i} prompt={prompt} style={style} index={index} setIndex={setIndex} maxIndex={prompts.length - 1} selected={(index == i) ? true : false}/>
            }) : <div className=' h-screen w-screen flex flex-col justify-center items-center backdrop-blur-md absolute top-0'>
                    <img src="/src/assets/loading.svg" alt="" />
                    <h1 className='text-white text-2xl'>Un momento, estamos segmentando su texto... </h1>
                </div>
            }
        </div>
    )
}

export default EditQueries