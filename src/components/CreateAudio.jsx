import React from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useForm } from "react-hook-form";
import InputBox from './InputBox';
const CreateAudio = ({ setText }) => {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch(serverUrl + "/story", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title
      })
    }).then(
      response => response.json()
    ).then(dt => {
      console.log(dt)
      setStoryId(dt.story_id)
      setText(data.story);
    })
  }

  if (!browserSupportsSpeechRecognition) {
    return <h1 className="text-6xl text-white text-center">Browser doesn't support speech recognition.</h1>
  }

  return (
    <>
      <h1 className='text-6xl text-white text-center mt-10'>Audio</h1>
      <div className='justify justify-col items-center gap-10 p-20'>
        <div className='w-full flex justify-center'>
          <div className='flex justify-between w-3/4 [&>button]:text-white [&>button]:w-1/5 [&>button]:text-center [&>button]:text-xl [&>button]:rounded-full [&>button]:h-16 
          [&>button]:transition-all [&>button]:duration-1000 [&>button]:bg-gradient-to-r [&>button]:to-purple-900 [&>button]:via-red-500 [&>button]:from-purple-900 [&>button]:bg-size-200 [&>button]:bg-pos-100
          [&>button]:hover:bg-pos-0'>
            <button onClick={SpeechRecognition.startListening}>Start Talking!</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-10 pt-10'>
          <InputBox inputType="text" inputName="Title" textarea={false} register={register} toRegister="title"></InputBox>
          <InputBox inputType="text" inputName="Story" textarea={true} register={register} toRegister="story" inputDefault={transcript}></InputBox>
          <input type="submit" className="
          text-center text-2xl text-white xl rounded-full h-16 
          transition-all duration-1000 bg-gradient-to-r to-purple-900 via-red-500 from-purple-900 bg-size-200 bg-pos-100 font-bold
          hover:bg-pos-0 w-1/3" />
        </form>
        <div className='w-full flex justify-center '>
          <p>{listening ? <img src="/src/assets/audio.svg" alt="" className='p-10 object-center' /> : ''}</p>
        </div>
      </div>
    </>
  )
}

export default CreateAudio