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
                console.log(data)
                setQueries(data.queries)
            }
        })
        //.then(request_image(data.prompt, setImage, setLoading))
    }

    const imgs = []

    useEffect(() => {
        console.log("effect!")
        queries?.map( (q) => {
            console.log(q);
            let b = {
                query: q,
                for_real: false,
                n_images: 1
            }
            fetch(urlImages, {
                method: "POST",
                body: JSON.stringify(b)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        console.log(data);
                        imgs.push("avion");
                        console.log(imgs)
                    }
                })
            //console.log(imgs)
        })
        //setImages(imgs)
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
            <Swiper
                className="w-full h-full"
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            {images?.map((url, i) => (
                <SwiperSlide key={i} className="h-full w-full object-contain"> <img src={url} alt="fotitochevere" /></SwiperSlide>
            ))}
            </Swiper>
                {/*
                    loading ?
                        <div className="w-full h-full m-5 animate-pulse bg-red-300 opacity-40 rounded-3xl flex items-center justify-center">
                            <span>Loading...</span>
                        </div> :
                    image ?
                        <img src={image.data[0].url} alt="" className="h-full w-full object-contain" />
                        : <p>Here will be your image</p> 
    */}
            </div>
        </div>
    )
}

export default CreateText