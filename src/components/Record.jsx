import React, { useContext, useEffect, useState } from 'react'
import { serverUrl } from '../constant';
import { UserContext } from '../App';
import StoryRecord from './StoryRecord';

const Record = () => {
  const [record, setRecord] = useState([]);
  const [loading, setlLoading] = useState(true);
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    fetch(serverUrl + "/story", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        data.stories.sort((story1, story2) => {
          return new Date(story2[2]) - new Date(story1[2]);
        })
        console.log(data)
        setRecord(data.stories);
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
            : record.map((story, index) => (
              <StoryRecord record={story} key={index}/>
            ))
      }
    </>
  )
}

export default Record;