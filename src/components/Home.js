import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src="https://i.ibb.co/2kP6cVG/491.jpg" className='w-96' alt='to-do img' />
          <div>
            <h1 class="text-5xl font-bold">Simple To-do List</h1>
            <p class="py-6">Note down of your daily work and keep important list safe.</p>
            <button onClick={()=>navigate('/addtask')} class="btn btn-primary">Add Task</button>
          </div>
        </div>
      </div>
    );
};

export default Home;