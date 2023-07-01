import React, { useContext, useEffect, useState } from 'react'
import { serverUrl } from '../constant';
import { UserContext } from '../App';

const Record = () => {
  const [record, setRecord] = useState([]);
  const [loading, setlLoading] = useState(true);
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    fetch(serverUrl + "/story/1?images", {
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
              <h1 className='text-white text-4xl font-bold'>{`This were the queries for ${record.title}`}</h1>
              <ul className='flex gap-10'>
                {record.images.map((image, index) => (
                  <li className='flex flex-col items-start gap-10' key={index}>
                    <h1 className='text-white text-center text-3xl'>{image.query}</h1>
                    <img src={`http://localhost:3000${image.url}`} alt="image for the query" className='w-[200px] h-[200px] object-contain' />
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