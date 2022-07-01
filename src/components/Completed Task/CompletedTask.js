import React, { useEffect, useState } from 'react';

const CompletedTask = () => {
    const [completedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setCompletedTasks(data))
    }, [completedTasks])
    return (
        <div>
            <h1>Completed Task</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 px-20'>
                {
                    completedTasks?.map(task =>
                        <div className="card w-full m-5 bg-primary text-primary-content">
                            <div className="card-body wrap">
                                <h2 className="card-title">{task.title}</h2>
                                <div className='text-justify'>{task.taskDescription}</div>
                            </div>
                        </div>)
                }
            </div >
        </div >
    );
};

export default CompletedTask;