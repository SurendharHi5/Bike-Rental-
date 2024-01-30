import axios from "axios";
import { message } from "antd";

export const userLogin = (reqObj)=>async dispatch=>{
    
    dispatch({type: "LOADING", payload: true})

    try {
        const response = await axios.post("http://localhost:3000/api/users/login", reqObj)
        localStorage.setItem("user", JSON.stringify(response.data))
        dispatch({type: "LOADING", payload: false})
        message.success("Login Successfull")
        setTimeout(()=>{
            window.location.href="/"
        },500)
    } catch (error) {
        console.log(error)
        message.error("Sorry, your Email or Password was incorrect.")
        dispatch({type: "LOADING", payload: false})
    }
}

export const userRegister = (reqObj)=>async dispatch=>{
    
    dispatch({type: "LOADING", payload: true})

    try {
        const response = await axios.post("http://localhost:3000/api/users/register", reqObj)
        dispatch({type: "LOADING", payload: false})
        message.success("Registration Successfull")
        setTimeout(()=>{
            window.location.href="/login"
        },500)
    } catch (error) {
        console.log(error)
        message.error("Something went wrong")
        dispatch({type: "LOADING", payload: false})
    }
}