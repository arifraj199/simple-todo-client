import React, { useEffect, useState } from "react";
import MyTodo from "./MyTodo";

const MyTask = () => {
    const [task,setTask] = useState([]);
    

    useEffect( ()=>{
        fetch('http://localhost:5000/mytask')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setTask(data);
        })
    },[])

    
//   console.log(task);
  return (
    <div>
        {
            task.map(todo => <MyTodo key={todo._id} todo={todo}></MyTodo>)
        }
      
    </div>
  );
};

export default MyTask;
