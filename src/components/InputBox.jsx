export default function InputBox(props) {
    return (
        <div className="flex flex-col w-auto relative pt-8">
            <input type={props.inputType} required className="border-b pb-5 pt-3 border-color px-4 bg-transparent w-full peer focus:outline-none"/>
            <label for="" className="absolute top-9 left-4 transition-all duration-500 peer-focus:top-0 peer-valid:top-0">{props.inputName}</label>
            <img src={`/src/assets/${props.inputType}.svg`} className="absolute h-9 right-2 bottom-5 scale-75"></img>
        </div>
    )
} 