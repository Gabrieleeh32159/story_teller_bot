import React, { useContext, useEffect, useState } from 'react'
import { serverUrl } from '../constant';
import Query from './Query';
import { UserContext } from '../App';

const EditQueries = ({ text, style, setStyle }) => {
    const [user, setUser] = useContext(UserContext);
    const [prompts, setPromts] = useState(null);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        fetch(serverUrl + "/story/prompts", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${user.token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                story: text
            })
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(data => {
            console.log(data);
            setPromts(data.queries)
        })
    }, [])
    return (
        <div className='flex flex-col items-center gap-5'>
            {prompts 
            ? <div className='flex flex-col items-center'>
                <p className='text-white text-2xl w-5/6 text-justify mt-8'>{text}</p>
                {prompts.map((prompt, i) => {
                    return <Query key={i} prompt={prompt} style={style} setStyle={setStyle} index={index} setIndex={setIndex} maxIndex={prompts.length - 1} selected={(index == i) ? true : false}/>
                })}
            </div>
            : <div className=' h-screen w-screen flex flex-col justify-center items-center backdrop-blur-md absolute top-0'>
                    <img src="/src/assets/loading.svg" alt="" />
                    <h1 className='text-white text-2xl'>Un momento, estamos segmentando su texto... </h1>
                </div>
            }
        </div>
    )
}

export default EditQueries