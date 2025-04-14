import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props){

    const navigate = useNavigate()

    const users = props.users
    const setUsers = props.setUsers

    const [euser,setEuser] = useState()
    const [epaswd,setEpaswd] = useState()
    

    function handleUser(event){
        setEuser(event.target.value)
    }

    function handlePaswed(event){
        setEpaswd(event.target.value)
    }

    function addUser(){
        setUsers([...users,{username:euser,password:epaswd}])
        navigate("/")
    }

    return(
        <div className="bg-black p-10">
            <div className="bg-white p-5 border-rounded-md">
                <h1 className="text-3xl font-semibold">Hey Hi...</h1>
                <p className="py-1">You can signup here :)</p>
                <div className="flex flex-col gap-2 my-2">
                <input onChange={handleUser} type="text" placeholder="username" className="w-52 p-1 bg-transparent border-black border rounded-md"/>
                <input onChange={handlePaswed} type="text" placeholder="password" className="w-52 p-1 bg-transparent border-black border rounded-md"/>
             <input type="text" placeholder="confirm password" className="w-52 p-1 bg-transparent border-black border rounded-md"/>
             <button onClick={addUser} className="bg-orange-400 p-2 w-24 rounded-md font-semibold">Sign Up</button>
             <p>Already have an account? <Link to={'/'} className="underline">Login</Link></p>
             </div>
             
            </div>
        </div>
    )
}

export default Signup