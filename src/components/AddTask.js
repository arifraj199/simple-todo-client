import React, { useState } from "react";
import { toast } from "react-toastify";

const AddTask = () => {
    const [task,setTask] = useState([]);
    console.log(task);

    const handleForm = event =>{
        event.preventDefault();
        const title = event.target.name.value;
        const description = event.target.description.value;
        const taskInfo = {
            title:title,
            description:description
        }

        fetch(`https://morning-springs-01952.herokuapp.com/addtask`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(taskInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            setTask(data);
            toast("Task added on My Task Page")
        })

        // console.log(title,description);

        
        event.target.reset();
    }
  return (
    <div className="mt-8 block lg:flex ">
      <form onSubmit={handleForm} className="flex flex-col sm:w-1/2 lg:w-1/4  items-center gap-4 mx-auto bg-cyan-600 p-5 rounded-lg ">
        <input
          type="text"
          name="name"
          placeholder="Title"
          class="input input-bordered w-full max-w-xs bg-slate-100 text-black"
        />
        <textarea
          type="text"
          name="description"
          placeholder="Description"
          class="input input-bordered w-full h-56 max-w-xs bg-slate-100 text-black"
        />
        <input
          type="submit"
          value="Add Task"
          className="btn btn-primary w-full"
        />
      </form>
    </div>
  );
};

export default AddTask;
