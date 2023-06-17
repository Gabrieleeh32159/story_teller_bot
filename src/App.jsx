import React, { useEffect, useState, createContext } from "react"
import { Route, Routes, Navigate } from 'react-router-dom'
import LoginForm from "./components/LoginForm"
import MainPage from "./components/MainPage"
import RegisterForm from "./components/RegisterForm"

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser);
    }
  }, [])
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="p-0 bg-[url('/background.jpg')] bg-no-repeat bg-cover min-h-screen pb-10" >
        <Routes>
          <Route path="/*" element={user ? <MainPage /> : <Navigate to='/login' />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/login' element={user ? <Navigate to='/' /> : <LoginForm/>} />
        </Routes>
      </div>
    </UserContext.Provider>
  )
}

export default App
