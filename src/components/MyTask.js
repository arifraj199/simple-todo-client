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

    const handleDelete = id =>{
        fetch(`http://localhost:5000/mytask/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                const remaining = task.filter((t) => t._id !== id);
                setTask(remaining);
            }
        })
    }

    
//   console.log(task);
  return (
    <div>
        {
            task?.map(todo => <MyTodo 
                key={todo._id} 
                todo={todo} 
                handleDelete={handleDelete}
                ></MyTodo>)
        }
      
    </div>
  );
};

export default MyTask;
