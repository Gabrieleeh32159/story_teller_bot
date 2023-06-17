import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'

export default function UserNavbarButton() {
    const [user, setUser] = useContext(UserContext);

    return (
        <>
        <Link to="/profile" className='flex h-full hover:cursor-pointer hover:bg-slate-600 transition-all'>
            <img src={user.imageUrl ? user.imageUrl : user.profile_picture} alt="user profile" className='object-contain h-full py-2 px-2 rounded-full'/>
            <span className='flex flex-col items-center justify-center text-lg px-5'>{user.name ? user.name : user.givenName.split(" ")[0] + " " + user.familyName.split(" ")[0]}</span>
        </Link>
        <button className='h-full w-full' onClick={() => {
            localStorage.removeItem("user")
            setUser(null)
        }}>
        <img src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=power-button" alt="" className='h-full w-full p-2 object-contain'/></button>
        </>
    )
}