import InputBox from "./InputBox";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

const CreateText = () => {

    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([])
    const [queries, setQueries] = useState([])

    const urlPrompts = "https://6qzxjzoas6.execute-api.us-east-1.amazonaws.com/dev/story/prompts" // Args: story
    const urlImages = "https://6qzxjzoas6.execute-api.us-east-1.amazonaws.com/dev/image/create"

    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        fetch(urlPrompts, {
            method: "POST",
            body: JSON.stringify(data)
        }).then(response => response.json())
        .then(data => {
            if (data.ok) {
                setQueries(data.queries)
            }
        })
        //.then(request_image(data.prompt, setImage, setLoading))
    }

    const imgs = []

    useEffect(() => {
        console.log("effect!")
        setImages([])
        if (queries != null) {queries.slice(0, 5).map( async (q) => {
            console.log(q);
            let b = {
                query: q + " Charles Dana Gibson style.",
                for_real: true,
                n_images: 1
            }
            var response = await fetch(urlImages, {
                method: "POST",
                body: JSON.stringify(b)
            })

            response = await response.json();

            setImages((prevImages) => {
                return [...prevImages, {query: q, url:response.images[0]}];
            })
                
        })}
    } ,[queries])

    return (
        <div className='w-full h-[750px] mt-10 flex'>
            <div className='w-1/2 h-full px-10 flex flex-col justify-center text-2xl'>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 items-center justify-center w-full h-full">
                    <InputBox inputType="text" textarea={true} inputName="Ingrese el texto" register={register} toRegister="story"></InputBox>
                    <input type="submit" onClick={() => setLoading(true)} className="
                        text-center text-2xl text-white xl rounded-full h-16 
                        transition-all duration-1000 bg-gradient-to-r to-purple-900 via-red-500 from-purple-900 bg-size-200 bg-pos-100 font-bold
                        hover:bg-pos-0 w-1/3" />
                </form>
            </div>
            <div className='w-1/2 h-full p-8 flex justify-center items-center text-white text-xl'>
            {/* <Swiper
                className="w-full h-full"
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            {images?.map((url, i) => (
                <SwiperSlide key={i} className="h-full w-full object-contain"> <img src={url} alt="fotitochevere" /></SwiperSlide>
            ))}
            </Swiper> */}
            <div
                className="w-full h-full flex flex-wrap"
            >
            {images?.map(({query, url}, i) => (
                <div key={i} className="flex flex-col gap-5">
                <h1 className="text-black">{query}</h1>
                <img src={url} alt="history" className="object-contain h-full w-auto"/>
                </div>
            ))}
            </div>
            </div>
        </div>
    )
}

export default CreateText