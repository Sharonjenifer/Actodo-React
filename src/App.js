import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));


function App(){

  const [users,setUsers] = useState(
    [
        {
            username: "Sharon",
            password: "123"
        },
        {
            username: "Jeni",
            password: "123"
        }
    ]
)

  return(
<div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login users={users} setUsers={setUsers}/>}></Route>
      <Route path='/signup' element={<Signup users={users} setUsers={setUsers}/>}></Route>
      <Route path='/landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

root.render(
  <App/>
)

export default App