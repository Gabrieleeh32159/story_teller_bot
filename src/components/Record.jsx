import React, { useContext, useEffect, useState } from 'react'
import { serverUrl } from '../constant';
import { UserContext } from '../App';

const Record = () => {
  const [record, setRecord] = useState([]);
  const [loading, setlLoading] = useState(true);
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    fetch(serverUrl + "/story/59?images", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setRecord(data);
      })
      .then(() => {
        setlLoading(false)
      })
  }, []);

  return (
    <>
      {
        loading ? <img src="/src/assets/loading.svg" alt="loading" className='w-full px-10 object-contain' />
          : record.length == 0 ? <h1 className='text-center text-white mt-20 text-6xl'>Start Creating stories!!<br /> Go to Create page</h1>
            : <div className='flex flex-col p-10 gap-10'>
              <div>
                <h1 className='text-white text-4xl font-bold'>{`This were the queries for ${record.title}`}</h1>
                <p className='text-white font-thin text-2xl'>{`Created at: ${record.created_at}`}</p>
              </div>
              <ul className='flex flex-wrap justify-between gap-10'>
                {record.images.map((image, index) => (
                  <li className='flex flex-col items-center gap-10 w-[600px]' key={index}>
                    <p className='text-white text-justify text-3xl'>{image.query}</p>
                    <img src={serverUrl + image.url} alt="image for the query" className='w-[200px] h-[200px] object-contain' />
                  </li>
                ))
                }
              </ul>
            </div>
      }
    </>
  )
}

export default Record;