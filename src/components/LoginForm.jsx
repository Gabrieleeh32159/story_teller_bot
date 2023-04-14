import React from "react"
import InputBox from "./InputBox"

export default LoginForm => (

    <section className="h-2/3 w-1/3 backdrop-blur-md font-light">
        <div className="border border-gray-600 rounded-2xl px-4 py-4 h-full w-full flex items-center justify-center">
            <div className="text-white">
                <form action="" className="flex flex-col space-y-8 text-2xl">
                    <h1 className="text-6xl text-center font-light">StoryTeller Bot</h1>
                    <InputBox inputType="email" inputName="Email"></InputBox>
                    <InputBox inputType="password" inputName="Password"></InputBox>
                    <div className="flex justify-between px-10 ">
                        <div className="">
                            <label htmlFor="">
                                <input type="checkbox" className="appearance-none h-4 w-4 rounded mr-3 bg-slate-200 transition-all duration-300 checked:bg-slate-700 checked:border-2" /> Remember me
                            </label>
                        </div>
                        <div className="ml-8">
                            <span className="hover:underline">
                                <a href="#">Forgot Password</a>
                            </span>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="
                        text-center w-full text-xl rounded-full h-16 
                        transition-all duration-1000 bg-gradient-to-r to-purple-900 via-red-500 from-purple-900 bg-size-200 bg-pos-100 font-bold
                        hover:bg-pos-0"> Log in</button>
                    </div>
                    <div className="text-center -translate-y-4">
                        <p>Don't have an account? <a className="font-bold hover:underline ml-5" href="">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section>

)