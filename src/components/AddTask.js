import React, { useRef, useState } from "react";
import MyTask from "./MyTask";

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

        // console.log(title,description);

        setTask(taskInfo);
        event.target.reset();
    }
  return (
    <div className="mt-8">
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
      <MyTask task={task}></MyTask>
    </div>
  );
};

export default AddTask;
