import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import InputBox from './InputBox'
import { urlImages } from '../constant/index.js'

const Query = ({ prompt, style, index, setIndex, maxIndex, selected = true }) => {
    const { register, handleSubmit } = useForm()
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState()
    const onSubmit = (data) => {
        setImage(null)
        setLoading(true)
        console.log(data.query + ". This image with an " + style + " style.")
        fetch(urlImages, {
            method: "POST",
            body: JSON.stringify({
                query: data.query + ". This image will be generated with an " + style + " style.",
                for_real: true,
                n_images: 1
            })
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(data => {
            console.log(data)
            setImage(data.images[0])
            setLoading(false)
        })
    }

    return (
        <div className={selected ? "h-full w-full flex flex-col items-center" : "hidden"}>
            <div className='w-full h-[800px] flex p-10'>
                <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 flex flex-col justify-center items-center gap-20 px-10'>
                    <InputBox inputType="text" inputName={`Prompt number ${index + 1}`} icon={false} register={register} toRegister="query" inputDefault={prompt} />
                    <input type="submit" className="
                        text-center text-2xl text-white xl rounded-full h-16 
                        transition-all duration-1000 bg-gradient-to-r to-purple-900 via-red-500 from-purple-900 bg-size-200 bg-pos-100 font-bold
                        hover:bg-pos-0 w-1/3" value="Send" />
                </form>
                <div className='w-1/2 flex justify-center items-center p-5 border rounded-3xl'>
                    {loading ? <img src='/src/assets/grid.svg' /> :
                        image ? <img src={image} className='h-full w-full object-contain' /> : <p className='text-white text-xl'>Edit the query and press Send to continue! :D </p>}
                </div>
            </div>
            <div className='flex gap-5 h-[50px] w-[180px] relative justify-between'>
                <span className='absolute left-1/3 h-full w-1/3 text-white text-6xl flex items-center justify-center'>{index + 1}</span>
                <img src="/src/assets/prev_next.svg" alt="prev" onClick={() => {
                    setIndex((currIndex) => {
                        return (currIndex == 0) ? currIndex : currIndex - 1;
                    })
                }} className='h-full w-1/3 object-contain' />
                <img src="/src/assets/prev_next.svg" alt="next" onClick={() => {
                    setIndex((currIndex) => {
                        return (currIndex == maxIndex) ? currIndex : currIndex + 1;
                    })
                }} className='h-full w-1/3 -scale-x-100 object-contain' />

            </div>
        </div>
    )
}

export default Query