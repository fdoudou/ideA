import { useState,useEffect } from "react";
import { MyContext } from "./Contextor.js";
import TodoList from "./TodoList.js";

function Todo(props) {
    const tlist = [
        {
            id:1,
            title:'Todo 1',
            content: "This is Todo 1",
            complete:false,
            status: 'not complete'
        },
        {
            id:2,
            title:'Todo 2',
            content: "This is Todo 2",
            complete:false,
            status: 'not complete'
        }
    ];

    const saveTask = (tasklist) => {
        localStorage.setItem('Todo',tasklist);
    }

    let cstate = localStorage.getItem('Todo') == null ? tlist : JSON.parse(localStorage.getItem('Todo'));

    const [todo,todoState] = useState(cstate);
    const [keyword,setKeyword] = useState("");
    const [txt,setTxt] = useState("");

    useEffect(() => {
        saveTask(JSON.stringify(todo));
    },[todo]
    );

    const addTask = (tasktext) => {
        const newt = todo.length + 1;
        let ntodo = {
            id:newt,
            title:'Todo '+newt,
            content: "This is Todo "+newt,
            complete:false,
            status: 'not complete'
        };
        //todo.push(ntodo);
        let currentTask = [...todo,ntodo];
        todoState(currentTask);
        localStorage.setItem('oldlist',JSON.stringify([...currentTask]));
    }

    const updateTask = (i,event) => {
        const tsk = [...todo];
        tsk[i].content = event.target.value;
        let newtask = {...tsk[i]};
        todoState([...tsk,{...newtask}]);
        setTxt(event.target.value);
    }

    const removeTask = (c) => {
        todo.splice(c,1);
        todoState([...todo]);
        localStorage.setItem('oldlist',JSON.stringify([...todo]));
    }

    const searchTask = (event) => {
        setKeyword(event.target.value);
        let tdlist = [...todo];
        
        let ntdlist = tdlist.filter((td) => { 
            for (const c of JSON.stringify(td.content)) {
                if (c.includes(event.target.value)) {
                    return {...td};
                }
            }
        });
        
        if (event.target.value === "") {
            todoState([...JSON.parse(localStorage.getItem('oldlist'))]);
            //alert(localStorage.getItem('oldlist'));
        } else {
            todoState([...ntdlist]);
        }
    }

    const setComplete = (td,c) => {
        const nlist = [...todo];
        const tstatus = td.status === 'completed' ? 'not complete':'completed';
        nlist[c] = {...td,complete:!td.complete,status:tstatus};
        todoState([...nlist]);
        localStorage.setItem('oldlist',JSON.stringify([...nlist]));
    }

    return (
        <MyContext.Provider value={{todo,todoState,setComplete,addTask,removeTask,keyword,setKeyword,searchTask,updateTask,txt}}>
            <TodoList></TodoList>
        </MyContext.Provider>
    );
}

export default Todo;