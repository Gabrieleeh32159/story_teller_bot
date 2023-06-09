import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './../pages/Home'
import AboutUs from './../pages/AboutUs'
import MyProfile from './../pages/MyProfile'
import Create from '../pages/Create'
import Welcome from '../pages/Welcome'
import CreateAudio from './CreateAudio'
import CreateText from './CreateText'
import EditQueries from './EditQueries'

const MainPage = ({ user, setUser }) => {
    return (
        <div className='relative'>
            <Navbar user={user} setUser={setUser} />
            <div>
                <Routes>
                    <Route path='/' element={<Welcome />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/create/*' element={<Create />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/profile' element={<MyProfile />} />
                    {/* <Route path='/create/audio' element={<CreateAudio />} />
                    <Route path='/create/text' element={<CreateText />} />
                    <Route path='/create/edit' element={<EditQueries />} /> */}
                </Routes>
            </div>
        </div>
    )
}

export default MainPage