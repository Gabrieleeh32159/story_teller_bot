import React, { useContext, useEffect, useState } from 'react'
import { serverUrl } from '../constant';
import Query from './Query';
import { UserContext } from '../App';
import fileDownload from 'js-file-download';

const EditQueries = ({ text, style, setStyle, storyId }) => {
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
            data.queries.filter(q => q != "");
            console.log(data);
            setPromts(data.queries)
        })
    }, [])

    const handleDownload = () => {
        fetch(serverUrl + "/story/" + storyId + "/zip", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }).then(
            response => response.blob()
        ).then(myBlob => {
            fileDownload(myBlob, "StoryTellerBot.zip")
        })
    }

    return (
        <div className='flex flex-col items-center gap-5'>
            {prompts 
            ? <div className='flex flex-col items-center'>
                <p className='text-white text-2xl w-5/6 text-justify mt-8'>{text}</p>
                {prompts.map((prompt, i) => {
                    return <Query key={i} prompt={prompt} storyId={storyId} style={style} setStyle={setStyle} index={index} setIndex={setIndex} maxIndex={prompts.length - 1} selected={(index == i) ? true : false}/>
                })}
                <button onClick={handleDownload} className="
                        text-center text-2xl text-white xl rounded-full h-16 
                        transition-all duration-1000 bg-gradient-to-r to-purple-900 via-red-500 from-purple-900 bg-size-200 bg-pos-100 font-bold
                        hover:bg-pos-0 w-1/3" >Download</button>
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