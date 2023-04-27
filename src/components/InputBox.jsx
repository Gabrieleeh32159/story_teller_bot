import { useForm } from "react-hook-form";

export default function InputBox({inputType, inputName, register, toRegister}) {
    return (
        <div className="flex flex-col w-full relative pt-8 text-white">
            <input {...register(toRegister)} type={inputType} required className="border-b pb-5 pt-3 border-color px-4 bg-transparent w-full peer focus:outline-none"/>
            <label htmlFor="" className="absolute top-9 left-4 transition-all duration-500 peer-focus:top-0 peer-valid:top-0">{inputName}</label>
            <img src={`/src/assets/${inputType}.svg`} className="absolute h-9 right-2 bottom-5 scale-75"></img>
        </div>
    )
} 