import Addtodoform from "./Addtodoform"
import Todoform from "./Todolist"
import { useState } from "react"

function TodoContainer() {

    const [activityArr, setactivityArr] = useState([
        {
            id: 1,
            activity: "Go for a walk" 
        },
        {
            id: 2,
            activity: "Had Breakfast" 
        },
        {
            id:3,
            activity: "Take a bath"
        }
    ])

    return (<>
        <div className="flex gap-5 flex-wrap">
            <Addtodoform activityArr={activityArr} setactivityArr={setactivityArr}/>
            <Todoform activityArr={activityArr} setactivityArr={setactivityArr}/>
            
        </div>

    </>)
}



export default TodoContainer