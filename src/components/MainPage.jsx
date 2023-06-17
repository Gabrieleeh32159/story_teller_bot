import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './../pages/Home'
import AboutUs from './../pages/AboutUs'
import MyProfile from './../pages/MyProfile'
import Create from '../pages/Create'
import Welcome from '../pages/Welcome'

const MainPage = () => {
    return (
        <div className='relative'>
            <Navbar />
            <div>
                <Routes>
                    <Route path='/' element={<Welcome />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/create/*' element={<Create />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/profile' element={<MyProfile />} />
                </Routes>
            </div>
        </div>
    )
}

export default MainPage