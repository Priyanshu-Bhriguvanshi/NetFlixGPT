import React, { use } from 'react'
import authService from '../Appwrite/authUser'
import { useDispatch } from 'react-redux'
import { logout } from '../Store/UserSlice'
import { useNavigate } from 'react-router-dom'
import {Button} from "./index"
const SignOutBtn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleSignOut = async ()=>{
    try {
      const userSignOut = await authService.signOut()
      if(!userSignOut)
      {
        dispatch(logout());
        navigate("/login");

      }
    } catch (error) {
      console.error("Error occure when user tried to SignOut", error.message)
      alert("Please tried again , SignOut Failed")
    }

  }
  return (
    <div>
      <Button 
      onClick={()=> handleSignOut()}
      name="Sign Out"
      />
    </div>
  )
}

export default SignOutBtn