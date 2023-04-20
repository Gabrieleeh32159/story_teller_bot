import React, { useState } from "react"
import LoginForm from "./components/LoginForm"

function App() {

  const [user, setUser] = useState(null)

  return (
    <React.Fragment>
      <div className="p-6 bg-[url('/public/background.jpg')] bg-no-repeat bg-cover h-screen flex justify-center items-center" >
        {user ? 
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-white text-6xl"> Welcome!</h1>
          <img src={user.imageUrl} alt={`Profile image of the user ${user.email}`} />
          <h2 className="text-white text-2xl">{user.givenName + " " + user.familyName}</h2>
        </div> : <LoginForm setUser={setUser}></LoginForm>}
      </div>
    </React.Fragment>
  )
}

export default App