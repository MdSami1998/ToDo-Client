import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query'
import AllTask from './AllTask';

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks])


    return (
        <div>
            <h1>This is Home</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-20 px-20'>
                {
                    tasks?.map(task => <AllTask key={task._id} task={task}></AllTask>)
                }
            </div >
        </div >
    );
};

export default Home;