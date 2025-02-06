import { useForm } from 'react-hook-form'
import {Input} from "./index"
import authService from '../Appwrite/authUser';
import { useNavigate } from 'react-router-dom';

const Login =  () => {
  const navigate =useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleLogin = async (data) => {
    console.log(data)
    try {
      const userLogin = await authService.signInUser(data)
      if(!userLogin)
      {
        navigate('/login')
      }
      navigate("/browse")
    } catch (error) {
      console.error("Error occure when user try to login", error.message)
      alert("login failed , Please try again")
      
    }

  }
  return (
    <div className='bg-black opacity-80 w-100 h-120 border-1 border-white p-8 '>
      <h1 className='text-3xl text-white font-bold'>Sign In</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Input
          className="bg-gray-800"
          type="text"
          placeholder="enter email here"
          {...register("email", { required: "Email are required" })}
        />
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        
        <Input 
        className="bg-gray-800 " 
        type="password" 
        placeholder="enter password" 
        {...register("password", { required: "Password are required" })} 
        />
        <button className='bg-red-600' type='submit'>Login</button>
      </form>

      <p>OR</p>
      <p>New to Netflix? Sign up now.</p>
    </div>
  )
}

export default Login