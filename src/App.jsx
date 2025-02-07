import { Outlet, useNavigate } from "react-router-dom"
import {Browse, Header} from "./Components"
import { useSelector } from "react-redux"
import { useEffect } from "react"
function App() {
  const navigate = useNavigate()
  const authentic = useSelector(state=> state.auth.authentic)
  useEffect(()=>{
    if(!authentic){
      navigate("/login");
    }
  },[navigate,authentic])
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
