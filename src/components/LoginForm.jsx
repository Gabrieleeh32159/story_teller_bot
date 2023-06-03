import React, { useEffect, useState} from "react"
import InputBox from "./InputBox"
import GoogleLogin from "react-google-login"
import { gapi } from "gapi-script"
import { useForm } from "react-hook-form"
import RegisterForm from "./RegisterForm"
import { Navigate, useNavigate } from "react-router-dom"


export default function LoginForm({ setUser }) {

    const {failure, useFailure} = useState(false)

    const clientID = "256577745412-itrj5u2ar37v99vg51ki8d2d4g7n1i8h.apps.googleusercontent.com"

    const {register, handleSubmit} = useForm()

    const login_URL = 'https://6qzxjzoas6.execute-api.us-east-1.amazonaws.com/dev/user/login'

    useEffect(() => {
        const start = () => {
            gapi.auth2.init({
                clientId: clientID,
            })
        }
        gapi.load("client:auth2", start)
    }, [])

    const onSuccess = (response) => {
        console.log(response.profileObj)
        setUser(response.profileObj)
    }

    const onFailure = () => {
        console.log("pipipi")
    }

    const defaultUser = {
        imageUrl: "https://us.123rf.com/450wm/tifani1/tifani11712/tifani1171200256/92275163-ilustraci%C3%B3n-del-icono-de-usuario.jpg",
        username: "Default User"
    }

    return (
        <div className="h-full w-full absolute flex justify-center items-center">
            <section className="h-auto w-1/3 backdrop-blur-md font-light">
                <div className="border border-gray-600 rounded-2xl px-4 py-4 w-full flex items-center justify-center">
                    <div className="text-white">
                        <form 
                            onSubmit={
                                handleSubmit(
                                    (data) => {
                                        data["type"] = "normal"
                                        fetch(login_URL, {
                                            method: "POST",
                                            body: JSON.stringify(data),
                                        })
                                        .then((response) => {
                                            if (response.ok) {
                                                console.log(defaultUser)
                                                setUser(defaultUser);
                                            } else {
                                                setFailure(true)
                                            }
                                        })
                                    }
                                )
                            } 
                            className="flex flex-col space-y-8 text-2xl">
                            <h1 className="text-6xl text-center font-light">StoryTeller Bot</h1>
                            <InputBox inputType="email" icon={true} inputName="Email" register={register} toRegister="email"></InputBox>
                            <InputBox inputType="password" icon={true} inputName="Password" register={register} toRegister="password"></InputBox>
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
                                <input type="submit" value="Log in" className="
                        text-center w-full text-xl rounded-full h-16 
                        transition-all duration-1000 bg-gradient-to-r to-purple-900 via-red-500 from-purple-900 bg-size-200 bg-pos-100 font-bold
                        hover:bg-pos-0 active:scale-125"/>
                            </div>
                            <div className="text-center -translate-y-4 text-lg">
                                <p>Don't have an account?</p>
                                <p className="">
                                    <a href="/register" className="font-bold hover:underline">Register</a>  or
                                </p>
                                <GoogleLogin
                                    clientId={clientID}
                                    onSuccess={onSuccess}
                                    onFailure={onFailure}
                                    cookiePolicy={"single_host_policy"}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}