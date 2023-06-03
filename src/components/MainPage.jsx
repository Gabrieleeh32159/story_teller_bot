import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './../pages/Home'
import AboutUs from './../pages/AboutUs'
import MyProfile from './../pages/MyProfile'
import Create from '../pages/Create'
import Welcome from '../pages/Welcome'
import CreateAudio from './CreateAudio'
import CreateText from './CreateText'

const MainPage = ({ user }) => {
    return (
        <div className=''>
            <Navbar user={user} />
            <div>
                <Routes>
                    <Route path='/' element={user ? <Welcome /> : <Navigate to='/login'/>} />
                    <Route path='/home' element={user ? <Home /> : <Navigate to='/login'/>} />
                    <Route path='/create' element={user ? <Create /> : <Navigate to='/login'/>} />
                    <Route path='/about' element={user ? <AboutUs /> : <Navigate to='/login'/>} />
                    <Route path='/profile' element={user ? <MyProfile /> : <Navigate to='/login'/>} />
                    <Route path='/create/audio' element={user ? <CreateAudio /> : <Navigate to='/login'/>} />
                    <Route path='/create/text' element={user ? <CreateText /> : <Navigate to='/login'/>} />
                </Routes>
            </div>
        </div>
    )
}

export default MainPage