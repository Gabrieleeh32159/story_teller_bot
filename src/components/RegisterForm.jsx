import React, { useState } from 'react'
import InputBox from './InputBox'
import { useForm } from "react-hook-form"

const RegisterForm = () => {
  const {equal, setEqual} = useState(false)
  const {register, handleSubmit} = useForm()
  return (
    <React.Fragment>
      <div className='flex justify-center'>
        <div className='text-center text-white font-semibold rounded-xl p-10 w-2/3'>
          <h1 className='text-3xl'>Register</h1>
          <form 
            className="flex gap-5 flex-col"
            action="" >
            <InputBox inputType="email" icon={true} inputName="Email" register={register} toRegister="email"></InputBox>
            <InputBox inputType="username" icon={true} inputName="Username" register={register} toRegister="username"></InputBox>
            <InputBox inputType="text" icon={true} inputName="Given Name" register={register} toRegister="givenName"></InputBox>
            <InputBox inputType="text" icon={true} inputName="Last Name" register={register} toRegister="familyName"></InputBox>
            <InputBox inputType="password" icon={true} inputName="Password" register={register} toRegister="password"></InputBox>
            <InputBox inputType="password" icon={true} inputName="Confirm Password" register={register} toRegister="confirmPassword"></InputBox>
            <input type="submit" className="
                        text-center text-2xl text-white xl rounded-full h-16 
                        transition-all duration-1000 bg-gradient-to-r to-purple-900 via-red-500 from-purple-900 bg-size-200 bg-pos-100 font-bold
                        hover:bg-pos-0 w-1/3" />
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default RegisterForm