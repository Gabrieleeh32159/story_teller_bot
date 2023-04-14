import React from "react"
import LoginForm from "./components/LoginForm"

function App() {
  return (
    <React.Fragment>
      <div className="p-6 bg-[url('/public/background.jpg')] bg-no-repeat bg-cover h-screen flex justify-center items-center" >
        <LoginForm></LoginForm>
      </div>
    </React.Fragment>
  )
}

export default App