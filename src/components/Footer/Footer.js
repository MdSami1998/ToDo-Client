import React from 'react';
import './Footer.css'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    const today = new Date();
    const year = today.getFullYear();

    const handleLogoClick = () => {
        navigate('/home');
    };
    return (
        <footer className="footer justify-around items-center p-10 bg-neutral text-neutral-content mt-5">
            <div>
                <div>
                    <h1 onClick={handleLogoClick} className='flex justify-center items-center text-2xl pt-5 md:pt-0 md:text-4xl font-bold cursor-pointer'><span className='text-accent'>Task</span>&nbsp;App</h1>
                    <small className='mt-3 text-accent text-center'> &copy; taskappauthority {year} Allright Reserved</small>
                </div>

            </div>

            <div className="grid grid-flow-col gap-0 md:gap-10 w-full mx-auto">
                <a className='mx-auto' href='#' target='_blank' rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>

                <a className='mx-auto' href='https://www.facebook.com/samial.zaber.7/' target='_blank' rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
            </div>
        </footer>
    );
};

export default Footer;