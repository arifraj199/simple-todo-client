import React from "react";

const AddTask = () => {
    const handleForm = event =>{
        event.preventDefault();
        const title = event.target.name.value;
        const description = event.target.description.value;

        console.log(title,description);

        event.target.reset();
    }
  return (
    <div className="mt-16">
      <form onSubmit={handleForm} className="flex flex-col w-1/4 items-center gap-4 mx-auto bg-cyan-600  p-5 rounded-lg ">
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
