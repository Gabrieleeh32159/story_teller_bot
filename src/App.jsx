import React, { useEffect, useState } from "react"
import { Route, Routes, Navigate, Link } from 'react-router-dom'
import LoginForm from "./components/LoginForm"
import MainPage from "./components/MainPage"
import RegisterForm from "./components/RegisterForm"

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser);
    }
  }, [])
  return (
    <React.Fragment>
      <div className="p-0 bg-[url('/background.jpg')] bg-no-repeat bg-cover h-screen" >
        <Routes>
          <Route path="/*" element={user ? <MainPage user={user} setUser={setUser}/> : <Navigate to='/login'/>}/>
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/login' element={user ? <Navigate to='/'/> : <LoginForm setUser={setUser}/> }/>
        </Routes>
      </div>
    </React.Fragment>
  )
}

export default App
