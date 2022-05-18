import React from "react";

const MyTask = ({ task }) => {
  console.log(task);
  return (
    <div>
      <h2 className="text-center ">{task?.title}</h2>
      <p className="w-full text-center">{task?.description}</p>
      <div className="flex gap-x-2 justify-center">
        <button className="btn btn-primary">Complete</button>
        <button className="btn btn-primary">Delete</button>
      </div>
    </div>
  );
};

export default MyTask;
