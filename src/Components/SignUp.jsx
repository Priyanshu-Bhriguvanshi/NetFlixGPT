import React from 'react'
import authService from '../Appwrite/authUser'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {Input} from "./index"
const SignUp = () => {
    const navigate = useNavigate()
    const {register, handleSubmit, formState:{error}}= useForm();
    const signUpHandle = async(data)=>{
        try {
            const userData = await authService.signUpUser(data)
            if(userData){
                navigate("/browse")
            }
        } catch (error) {
            console.error("error occure when user try to signup", error.message)
            alert("Please try again to signup")
            
        }
    }
  return (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(signUpHandle)}>
            <Input
            type="text"
            placeholder="Enter name"
            {...register("name", {required:"Name are required"})}
            />

            <Input
            type="email"
            placeholder="Enter email"
            {...register("email", {required:"Email are reuired"})}
            />

            <Input
            type="password"
            placeholder="Enter password"
            {...register("password", {required:"Enter Password"})}
            />
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp