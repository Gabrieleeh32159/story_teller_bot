import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../App';
import { serverUrl } from '../constant'

const StoryRecord = ({ record }) => {
  const [shown, setShown] = useState(false);
  const [images, setImages] = useState(["olitas", "olitas2"]);
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    if (shown) {
      fetch(serverUrl + '/story/' + record[0] + '?images', {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json"
        }
      }).then(
        response => response.json()
      ).then(data => {
        setImages(data.images);
      })
    }
  }, [shown])


  return (
    <div className='flex flex-col p-10 gap-10'>
      <div>
        <h1 className='text-white text-4xl font-bold'>{record[1]}</h1>
        <p className='text-white font-thin text-2xl'>{`Created at: ${record[2]}`}</p>
      </div>
      <ul className={'flex justify-between gap-10 overflow-x-auto p-10 h-[700px] ' + (shown ? "" : "hidden")}>
        {
          shown ? (
            images.length != 0 ? images.map(
              (image, index) => (
                <li className='flex flex-col justify-between items-center gap-10 h-full min-w-[500px]' key={index}>
                  <p className='text-white text-justify text-3xl'>{image.query}</p>
                  <img src={serverUrl + image.url} alt="image for the query" className='w-[300px] h-[300px] object-contain' />
                </li>
              )
            ) :
              <div className='flex justify-center items-center'>
                <p className='text-4xl text-white'>There is no images created for this story :(</p>
              </div>
          ) : ""
        }
      </ul>
      <button onClick={() => {setShown(!shown)}} className="
          text-center text-2xl text-white xl rounded-full h-16 active:scale-110 
          transition-all active:duration-100 hover:duration-1000 bg-gradient-to-r to-purple-900 via-red-500 from-purple-900 bg-size-200 bg-pos-100 font-bold
          hover:bg-pos-0 w-[200px]" >{shown ? "Hide" : "Show"}</button>
    </div>
  )
}

export default StoryRecord