export default function InputBox(props) {
    return (
        <div className="space-y-2 w-auto">
            <label for="" className="block">{props.inputName}</label>
            <input type={props.inputType} required className="block border-b border-color bg-transparent w-full"/>
        </div>
    )
} 