import React from 'react';
import { toast } from 'react-toastify'

const AddTask = () => {

    const handleToDoAdd = (e) => {
        e.preventDefault();
        const title = e.target.taskTitle.value;
        const taskDescription = e.target.taskDescription.value;
        const task = { title, taskDescription }

        fetch('https://true-doright-60997.herokuapp.com/addtask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Hurray!! Task Added Successfully')
                }
            })
        e.target.reset();
    }

    return (
        <div className=' mt-12'>
            <h1 className='mb-5 text-2xl font-bold'>New Task</h1>
            <div className="card flex-shrink-0 w-full max-w-xl mx-auto shadow-2xl bg-base-100">
                <form onSubmit={handleToDoAdd} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Add Title</span>
                        </label>
                        <input type="text" name='taskTitle' placeholder="Title" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Task</span>
                        </label>
                        <textarea className="border border-gray-300 rounded-xl px-5 py-2" name="taskDescription" cols="30" rows="8" placeholder='New Task' required></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-accent">Add Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;