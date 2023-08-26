import { useContext,useState } from "react";
import { MyContext } from "./Contextor.js";
import AddTodo  from "./AddTodo.js";

function TodoList(props) {
    const {todo,setComplete,removeTask,updateTask,txt} = useContext(MyContext);

    const TdList = todo.map((td,index) => {
        return (<div key={td.id} style={{background:"skyblue",borderRadius:'3px',height:'140px',width:'140px',textAlign:'center',verticalAlign:'middle',margin:'5px'}}>
            <div ><button className="del-btn" onClick={()=>{removeTask(index)}}>&times;</button>
                <span>{td.title}</span>
                <div>
                    <label htmlFor={'xfff'+td.title}>
                    <input id={'xfff'+td.title} type="checkbox" checked={td.complete} onChange={()=>{setComplete(td,index)}}/>
                    Status: {`${td.status}`}
                    </label>
                </div>
            </div>
            <p><textarea  style={{background:"inherit",maxWidth:'90%',maxHeight:'%',border:'none',fontFamily:'inherit'}} value={td.content} /> </p>
            </div>
        )
    });

    return (
        <div style={{width:'100%',fontFamily:'arial'}}>
            <h3>Todo App</h3>
            <AddTodo></AddTodo>
            <div>
                { todo.length < 1 && <h4>No task yet!</h4> }
                <div style={{width:'90%',display:'flex',flexFlow:"row wrap"}}>
                    {TdList}
                </div>
            </div>
        </div>
    )
}

export default TodoList;