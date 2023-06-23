export default function InputBox({ inputType, inputName, icon, register, toRegister, textarea = false, inputDefault = '' }) {
    return (
        <div className="flex flex-col w-full relative pt-8 text-white">
            {textarea ?
                <textarea {...register(toRegister)} type={inputType} required pattern="\S+.*" placeholder=" " className="font-light border-b pb-5 pt-3 border-color px-4 bg-transparent w-full peer focus:outline-none max-h-[600px]" defaultValue={inputDefault}></textarea>
                : <input {...register(toRegister)} type={inputType} required pattern="\S+.*" placeholder=" " className="font-light border-b pb-5 pt-3 border-color px-4 bg-transparent w-full peer focus:outline-none" defaultValue={inputDefault} />}
            <label htmlFor="" className={`absolute left-4 ${textarea ? "-top-2" : "top-2"} text-red-600 peer-placeholder-shown:text-white peer-valid:text-white peer-placeholder-shown:top-9 ${textarea ? "peer-focus:-top-2" : "peer-focus:top-2"} transition-all duration-500 font-bold`}>{inputName}</label>
            {icon && <img src={`/src/assets/${inputType}.svg`} className="absolute h-9 right-2 bottom-5 scale-75"></img>}
        </div>
    )
}