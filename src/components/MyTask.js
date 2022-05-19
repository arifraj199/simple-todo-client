import React, { useEffect, useState } from "react";
import MyTodo from "./MyTodo";

const MyTask = () => {
    const [task,setTask] = useState([]);
    

    useEffect( ()=>{
        fetch('https://morning-springs-01952.herokuapp.com/mytask')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setTask(data);
        })
    },[])

    const handleDelete = id =>{
        fetch(`https://morning-springs-01952.herokuapp.com/mytask/${id}`,{
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
    <div className="grid sm:grid-cols-1 lg:grid-cols-3">
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
