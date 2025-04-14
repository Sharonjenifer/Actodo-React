import { useState } from "react"
import Todoitem from "./Todoitem"

function Todolist(props){
    
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    return (
        <div className="bg-blue-200 p-2 border rounded-md flex-grow">
                <h1 className="text-2xl font-medium">Today's Activity</h1>

                {activityArr.length===0?<p>You didn't add any Activity</p>:""}
                {
                    activityArr.map(function(item,index){
                        return <Todoitem id={item.id} activity={item.activity} index={index} activityArr={activityArr} setactivityArr={setactivityArr}/>
                    })
                }
            </div>
    )
}

export default Todolist