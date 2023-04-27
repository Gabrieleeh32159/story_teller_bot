import React, { useState } from "react"
import LoginForm from "./components/LoginForm"
import MainPage from "./components/MainPage"

function App() {

  const [user, setUser] = useState(null)

  return (
    <React.Fragment>
      <div className="p-0 bg-[url('/background.jpg')] bg-no-repeat bg-cover h-screen" >
        {user ? <MainPage user={user}></MainPage> : <LoginForm setUser={setUser}></LoginForm>}
      </div>
    </React.Fragment>
  )
}

export default App
