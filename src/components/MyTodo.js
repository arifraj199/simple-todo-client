import React, { useState } from 'react';

const MyTodo = ({todo}) => {
    const [lineThrough,setLineThrough] = useState(false);
    const handleComplete = () =>{
        setLineThrough(true);
    }
    return (
        <div>
            <h2 className={lineThrough ? "line-through text-red-500":"no-underline"}>{todo?.title}</h2>
                <p className="text-center">{todo?.description}</p>
                <div className="flex gap-x-2 justify-center">
                    <button onClick={handleComplete} className="btn btn-primary">Complete</button>
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
    );
};

export default MyTodo;