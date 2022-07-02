import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

const EditTask = () => {
    const { id } = useParams();
    // const navigate = useNavigate();
    const [task, setTask] = useState([]);

    useEffect(() => {
        fetch(`https://true-doright-60997.herokuapp.com/singletask/${id}`)
            .then(res => res.json())
            .then(data => setTask(data));
    })

    // const { isLoading, data: task } = useQuery('task', () =>
    //     fetch(`https://true-doright-60997.herokuapp.com/singletask/${id}`).then(res =>
    //         res.json()
    //     )
    // )

    // if (isLoading) {
    //     return 'Loading...'
    // }
    const handleToDoEdit = (e) => {
        e.preventDefault();
        const title = e.target.taskTitle.value;
        const taskDescription = e.target.taskDescription.value;
        const task = { title, taskDescription }

        fetch(`https://true-doright-60997.herokuapp.com/singletask/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Task Edited Successfully')
                    // navigate('/');
                }
            })
        e.target.reset();
    }

    return (
        <div className=' mt-12'>
            <h1 className='mb-5 text-2xl font-bold'>New Task</h1>
            <div className="card flex-shrink-0 w-full max-w-xl mx-auto shadow-2xl bg-base-100">
                <form onSubmit={handleToDoEdit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Add Title</span>
                        </label>
                        <input type="text" name='taskTitle' placeholder="Title" defaultValue={task.title} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task Description</span>
                        </label>
                        <textarea className="border border-gray-300 rounded-xl px-5 py-2" name="taskDescription" cols="30" rows="8" placeholder='Add Task Description' defaultValue={task.taskDescription} required></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-accent">Edit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditTask;