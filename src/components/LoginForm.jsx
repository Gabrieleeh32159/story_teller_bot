import React from "react"
import InputBox from "./InputBox"

export default LoginForm => (

    <section className="h-2/3 w-1/3 backdrop-blur-md">
        <div className="border border-gray-600 rounded-2xl px-4 py-4 h-full w-full flex items-center justify-center">
            <div className="text-white">
                <form action="" className="flex flex-col space-y-8 text-2xl">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <InputBox inputType="email" inputName="Email"></InputBox>
                    <InputBox inputType="password" inputName="Password"></InputBox>
                    <div className="flex justify-between px-10 ">
                        <div className="">
                            <label htmlFor="">
                                <input type="checkbox" className="appearance-none h-4 w-4 rounded mr-3 bg-slate-200 checked:bg-slate-700 checked:border-2" /> Remember me
                            </label>
                        </div>
                        <div className="ml-8">
                            <span className="hover:underline">
                                <a href="#">Forgot Password</a>
                            </span>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="text-black text-center w-full text-xl bg-gradient-to-r from-purple-900 to-red-500 rounded-full h-16"> Log in</button>
                    </div>
                    <div className="text-center">
                        <p>Don't have an account? <a className="font-bold hover:underline ml-5" href="">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section>

)