import React, { useEffect, useState } from 'react'
import { urlImages, urlPrompts } from '../constant';
import Query from './Query';

const EditQueries = ({ text }) => {
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
            setPromts(data.prompts)
        })
    }, [])
    return (
        <div className='flex flex-col items-center gap-5'>
            {prompts ? <Query prompt={prompts[index]}/>
                : <div className=' h-screen w-screen flex flex-col justify-center items-center backdrop-blur-md absolute top-0'>
                    <img src="/src/assets/loading.svg" alt="" />
                    <h1 className='text-white text-2xl'>Un momento, estamos segmentando su texto... </h1>
                </div>
            }
        </div>
    )
}

export default EditQueries