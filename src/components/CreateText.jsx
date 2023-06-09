import { useEffect } from "react";
import InputBox from "./InputBox";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

const CreateText = ({text, setText}) => {

    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        console.log(data)
        setText(data.story);
    }

    return (
        <div className='w-full h-[850px] mt-10 flex justify-center'>
            <div className='w-4/5 h-full px-10 flex flex-col justify-center text-2xl'>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 items-center justify-center w-full h-full">
                    <InputBox inputType="text" textarea={true} inputName="Ingrese el texto" register={register} toRegister="story" />
                    <input type="submit" className="
                        text-center text-2xl text-white xl rounded-full h-16 
                        transition-all duration-1000 bg-gradient-to-r to-purple-900 via-red-500 from-purple-900 bg-size-200 bg-pos-100 font-bold
                        hover:bg-pos-0 w-1/3" />
                </form>
            </div>
        </div>
    )
}

export default CreateText