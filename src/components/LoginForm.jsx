import React, { useEffect, useState, useRef, useContext} from "react"
import InputBox from "./InputBox"
import GoogleLogin from "react-google-login"
import { gapi } from "gapi-script"
import { useForm } from "react-hook-form"
import { UserContext } from "../App"
import { serverUrl } from "../constant"


export default function LoginForm() {

    const [user, setUser] = useContext(UserContext);

    const [failure, setFailure] = useState(false);

    const clientID = "256577745412-itrj5u2ar37v99vg51ki8d2d4g7n1i8h.apps.googleusercontent.com"

    const {register, handleSubmit} = useForm();

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

    const checkboxRef = useRef(null)
    
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
                                        fetch(serverUrl + "/user/login", {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json",
                                            },
                                            body: JSON.stringify(data),
                                        })
                                        .then((response) => response.json())
                                        .then((data) => {
                                            if (data.ok) {
                                                checkboxRef.current.checked != null && checkboxRef.current.checked && localStorage.setItem('user', JSON.stringify(data));
                                                console.log(data);
                                                setUser(data);
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
                                <div>
                                    <input type="checkbox" id="checkbox" ref={checkboxRef} className="appearance-none h-4 w-4 rounded mr-3 bg-slate-200 transition-all duration-300 checked:bg-slate-700 checked:border-2" /> 
                                    <label htmlFor="checkbox">Remember me</label>
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
                                <p>
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