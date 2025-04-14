import { Link } from "react-router-dom"
import Landing from "./Landing"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(props){

    const [euser,setEuser] = useState()
    const [epaswd,setEpaswd] = useState()
    const [ruser,setRuser] = useState(true)
  
    const users = props.users

    const navigate = useNavigate()

    function handleUser(event){
        setEuser(event.target.value)
    }

    function handlePaswed(event){
        setEpaswd(event.target.value)
    }

    function handleCheck(){

        var userFound = false

        console.log(users)
        users.forEach(function(item)
    {
        if(item.username === euser && item.password === epaswd){
            console.log("Sucessfull")
            userFound = true
            navigate("/landing",{state:{users:euser}})
        }
    })

    if(userFound ===false){
        console.log("Login Failed")
        setRuser(false)
    }


    }




    return(
        <div className="bg-black p-10">
        <div className="bg-white p-5 border-rounded-md">
            <h1 className="text-3xl font-semibold">Hey Hi...</h1>
            {ruser?<p>I help you to manage your activities after you login :)</p>: <p className="text-red-500">Please signup before you login!!</p>}
            <div className="flex flex-col gap-2 my-2">
            <input onChange={handleUser} type="text" placeholder="username" className="w-52 p-1 bg-transparent border-black border rounded-md"/>
            <input onChange={handlePaswed} type="text" placeholder="password" className="w-52 p-1 bg-transparent border-black border rounded-md"/>
         <button onClick={handleCheck} className="bg-blue-500 p-2 w-24 rounded-md font-semibold">Login</button>
         <p>Already have an account? <Link to={'/signup'} className="underline">Signup</Link></p>
         </div>
         
        </div>
    </div>
    )
}

export default Login