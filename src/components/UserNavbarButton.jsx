import React from 'react'
import { Link } from 'react-router-dom'

const UserNavbarButton = ({user}) =>  (
    <Link to="/profile" className='flex h-full hover:cursor-pointer hover:bg-slate-600 transition-all'>
        <img src={user.imageUrl} alt="user profile" className='object-contain h-full py-2 px-2 rounded-full'/>
        <span className='flex flex-col items-center justify-center text-lg px-5'>{user.givenName.split(" ")[0] + " " + user.familyName.split(" ")[0]}</span>
    </Link>
)

export default UserNavbarButton