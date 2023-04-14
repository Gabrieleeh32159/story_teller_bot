import React from "react"
import InputBox from "./InputBox"

export default LoginForm => (

    <section>
        <div className=" block border border-gray-600 rounded-2xl px-4 py-4 w-1/3 m-auto">
            <div className="">
                <form action="" className="justify-center text-white">
                    <h2 className="text-3xl text-center">Login</h2>
                    <InputBox inputType="email" inputName="Email"></InputBox>
                    <InputBox inputType="password" inputName="Password"></InputBox>
                    <div className="flex justify-between">
                        <div className="forget">
                            <label htmlFor="">
                                <input type="checkbox" /> Remember me
                            </label>
                        </div>
                        <div className="register">
                            <label htmlFor="">
                                <a href="#">Forget Password</a>
                            </label>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="text-black text-xl text-center w-2/3 bg-white rounded-full"> Log in</button>
                    </div>
                    <div className="text-center">
                        <p>Don't have an account? <a className="underline hover:text-blue-800" href="">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section>

)