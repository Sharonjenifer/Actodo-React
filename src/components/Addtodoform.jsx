import { useState } from "react"

function Addtodoform(props){

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const [newActivity,setNewactivity] = useState("")

    function handleChange(event){
        setNewactivity(event.target.value)
    }

    function addActivity(){
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:newActivity}])
        setNewactivity("")
    }

    return(
        <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium">Manage Activities</h1>
                <div>
                    <input value={newActivity} onChange={handleChange} className="p-2 border border-black bg-transparent" type="text" placeholder="New Activity?"></input>
                    <button onClick={addActivity} className="p-2 bg-black border border-black text-white">Add</button>
                </div>
            </div>
    )
}

export default Addtodoform