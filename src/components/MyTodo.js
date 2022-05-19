import React, { useState } from "react";
import { toast } from "react-toastify";

const MyTodo = ({ todo, handleDelete }) => {
  const [lineThrough, setLineThrough] = useState(false);
  const handleComplete = () => {
    setLineThrough(true);
    toast("task has completed");
  };
  return (
    <div>
      {/* <h2 className={lineThrough ? "line-through ":"no-underline"}>{todo?.title}</h2>
                <p className={lineThrough ? "line-through ":"no-underline"}>{todo?.description}</p>
                <div className="flex gap-x-2 justify-center">
                    <button onClick={handleComplete} className="btn btn-primary">Complete</button>
                    <button onClick={()=>handleDelete(todo?._id)} className="btn btn-primary">Delete</button>
                </div> */}

      <div class="card w-96 bg-neutral text-neutral-content mx-auto mb-4">
        <div class="card-body items-center text-center">
          <h2 className={lineThrough ? "line-through " : "no-underline"}>
            {todo?.title}
          </h2>
          <p className={lineThrough ? "line-through " : "no-underline"}>
            {todo?.description}
          </p>
          <div className="flex gap-x-3">
            <button onClick={handleComplete} className="btn btn-primary">
              Complete
            </button>
            <button
              onClick={() => handleDelete(todo?._id)}
              className="btn btn-primary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTodo;
