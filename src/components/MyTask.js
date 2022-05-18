import React from 'react';

const MyTask = ({task}) => {
    console.log(task);
    return (
        <div class="collapse">
        <input type="checkbox" /> 
        <div class="collapse-title text-xl font-medium">
            <h2>{task?.title}</h2>
        </div>
        <div class="collapse-content"> 
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis quibusdam pariatur assumenda numquam. Perferendis quas nesciunt cum, iure deleniti molestiae perspiciatis labore a, cupiditate obcaecati aspernatur delectus accusamus quos optio?</p>
        </div>
        </div>
    );
};

export default MyTask;