import { useContext,useReducer } from "react";
import { MyContext } from "./Contextor";

function AddTodo(props) {
    const {addTask,keyword,searchTask} = useContext(MyContext);

    return (
        <form>
            <button type="button" onClick={addTask}>Add new Task?</button>
            <input type="text" value={keyword} onChange={searchTask} placeholder="Type to search a task"></input>
        </form>
    )
}

export default AddTodo;