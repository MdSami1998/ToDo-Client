import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calender = () => {
    return (
        <div className=' min-h-screen'>
            <h1 className='text-3xl font-bold text-center my-10'>Calender</h1>
            <div className='flex justify-center items-center'>
                <Calendar></Calendar>
            </div>
        </div>
    );
};

export default Calender;