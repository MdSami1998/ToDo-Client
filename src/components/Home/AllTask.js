import React from 'react';
import { useNavigate } from 'react-router-dom'
import './AllTask.css'
import { toast } from 'react-toastify'

const AllTask = ({ task }) => {
    const { _id, title, taskDescription } = task;

    const handleTaskCheckBtn = (id) => {
        const completedTask = { title, taskDescription };
        fetch('https://true-doright-60997.herokuapp.com/completedtask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(completedTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Hurray!! Task Completed.')
                }
            })

        fetch(`https://true-doright-60997.herokuapp.com/task/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    const navigate = useNavigate();
    const handleEditTask = (id) => {
        navigate(`/edittask/${id}`)
    }
    return (
        <div className="card w-full bg-accent text-primary-content">
            <div className="card-body wrap">
                <h2 className="card-title">
                    <input onClick={() => handleTaskCheckBtn(_id)} type="checkbox" className="checkbox border border-black" />
                    {title}
                </h2>
                <p className='text-justify text-lg'>{taskDescription}</p>
                <div className="card-actions">
                    <button onClick={() => handleEditTask(task._id)} className="btn btn-sm w-20">edit</button>
                </div>
            </div>
        </div>
    );
};

export default AllTask;