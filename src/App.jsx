import React, { useEffect, useState } from "react"
import { Route, Routes, Navigate, Link } from 'react-router-dom'
import LoginForm from "./components/LoginForm"
import MainPage from "./components/MainPage"
import RegisterForm from "./components/RegisterForm"

function App() {

  const [user, setUser] = useState(null)
  useEffect(() => {
    console.log(user)
  }, [user])
  return (
    <React.Fragment>
      <div className="p-0 bg-[url('/background.jpg')] bg-no-repeat bg-cover h-screen" >
        <Routes>
          <Route path="/" element={user ? <MainPage/> : <LoginForm setUser={setUser}/>}/>
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/login' element={<LoginForm setUser={setUser}/> }/>
        </Routes>
      </div>
    </React.Fragment>
  )
}

export default App
