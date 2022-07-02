import React, { useEffect, useState } from 'react';

const CompletedTask = () => {
    const [completedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        fetch('https://true-doright-60997.herokuapp.com/completedtask')
            .then(res => res.json())
            .then(data => setCompletedTasks(data))
    }, [completedTasks])
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-10'>Completed Task</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 px-3 md:px-20'>
                {
                    completedTasks?.map(task =>
                        <div key={task._id} className="card w-full bg-accent text-primary-content">
                            <div className="card-body wrap">
                                <h2 className="card-title">{task.title}</h2>
                                <p className='text-justify text-lg'>{task.taskDescription}</p>
                            </div>
                        </div>)
                }
            </div >
        </div >
    );
};

export default CompletedTask;