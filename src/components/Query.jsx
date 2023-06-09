import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import InputBox from './InputBox'
import { urlImages } from '../constant/index.js'

const Query = ({ prompt }) => {
    const { register, handleSubmit } = useForm()
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState()
    const onSubmit = (data) => {
        setLoading(true)
        setImage(null)
        fetch(urlImages, {
            method: "POST",
            body: JSON.stringify({
                prompt: prompt
            })
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(data => {
            console.log(data)
            setImage(data.urlImage)
            setLoading(false)
        })
    }
    return (
        <div className='w-full h-[800px] flex p-10'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 flex flex-col justify-center items-center gap-20 px-10'>
                <InputBox inputType="text" inputName={`Prompt number ${prompt[0]}`} icon={false} register={register} toRegister="query" inputDefault={prompt} />
                <input type="submit" className="
                        text-center text-2xl text-white xl rounded-full h-16 
                        transition-all duration-1000 bg-gradient-to-r to-purple-900 via-red-500 from-purple-900 bg-size-200 bg-pos-100 font-bold
                        hover:bg-pos-0 w-1/3" value="Send" />
            </form>
            <div className='w-1/2 flex justify-center items-center p-5 border rounded-3xl'>
                {loading ? <img src='/src/assets/grid.svg'/> :
                    image ? <img src={image} className='h-full w-full object-contain' /> : <p className='text-white text-xl'>Edit the query and press Send to continue! :D </p>}
            </div>
        </div>
    )
}

export default Query