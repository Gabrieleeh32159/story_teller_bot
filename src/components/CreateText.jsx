import InputBox from "./InputBox"
import { useForm } from "react-hook-form";
import { request_image } from "./../constant";
import { useState } from "react";

const CreateText = () => {

    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        request_image(data.prompt, setImage, setLoading)
    }
    return (
        <div className='w-full h-[750px] mt-10 flex'>
            <div className='w-1/2 h-full px-10 flex flex-col justify-center text-2xl'>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 items-center w-full">
                    <InputBox inputType="text" inputName="Ingrese el texto" register={register} toRegister="prompt"></InputBox>
                    <input type="submit" onClick={() => setLoading(true)} className="
                        text-center text-2xl text-white xl rounded-full h-16 
                        transition-all duration-1000 bg-gradient-to-r to-purple-900 via-red-500 from-purple-900 bg-size-200 bg-pos-100 font-bold
                        hover:bg-pos-0 w-1/3" />
                </form>
            </div>
            <div className='w-1/2 h-full p-8 flex justify-center items-center text-white text-xl'>
                {
                    loading ?
                        <div className="w-full h-full m-5 animate-pulse bg-red-300 opacity-40 rounded-3xl flex items-center justify-center">
                            <span>Loading...</span>
                        </div> :
                    image ?
                        <img src={image.data[0].url} alt="" className="h-full w-full object-contain" />
                        : <p>Here will be your image</p> 
                }
            </div>
        </div>
    )
}

export default CreateText