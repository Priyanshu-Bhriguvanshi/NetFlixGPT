import React from 'react'
import authService from '../Appwrite/authUser'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {Input ,Button} from "./index"

const SignUp = () => {
    const navigate = useNavigate()
    const {register, handleSubmit, formState:{errors}}= useForm();
    const signUpHandle = async(data)=>{
        try {
            const userData = await authService.signUpUser(data)
            if(userData){ 
                navigate("/login")
            }
        } catch (error) {
            console.error("error occure when user try to signup", error.message)
            alert("Please try again to signup")
            
        }
    }
  return (
    <div className='bg-black opacity-85 p-10 text-white border border-gray-500 rounded-lg w-96 space-y-4'>
        <h1 className='text-3xl font-bold'>Sign Up</h1>
        <form className='space-y-4' onSubmit={handleSubmit(signUpHandle)}>
            <Input
            type="text"
            placeholder="Enter name"
            className="bg-gray-800 text-white border border-gray-600 rounderd-lg"
            {...register("name", {required:"Name are required"})}
            />
            {errors.name && <p>{errors.name.message}</p>}
            <Input
            type="email"
            placeholder="Enter email"
            className="bg-gray-800 text-white border border-lg border-gray-600"
            {...register("email", {required:"Email are reuired"})}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <Input
            type="password"
            placeholder="Enter password"
            className="bg-gray-800 text-white border border-lg"
            {...register("password", {required:"Enter Password"})}
            />
            {errors.password && <p>{errors.email.message}</p>}
            <Button className='bg-red-600 w-full cursor-pointer' name="Sign Up"type='submit'/>
        </form>
        <p className='text-center'>OR</p>
        <div className='text-center'>
        <p>Already a user? {" "}
                <span className='cursor-pointer text-red-600' onClick={()=>navigate("/login")}>Sign In</span>
            </p>
        </div>
    </div>
  )
}

export default SignUp