import { useContext,useReducer } from "react";
import { MyContext } from "./Contextor";
import { useState } from "react";

function AddTodo(props) {
    const {addTask,keyword,searchTask} = useContext(MyContext);
    // const [taskTxt,setTaskTxt] = useState("");

    // const addText = (event) => {
    //     setTaskTxt(event.target.value);
    // }

    return (
        <form>
            {/* <textarea ></textarea><br/> */}
            <button type="button" onClick={()=>{addTask()}}>Add new Task?</button>
            <input type="text" value={keyword} onChange={searchTask} placeholder="Type to search a task"></input>
        </form>
    )
}

export default AddTodo;