import React from 'react';
import errorImg from '../../public/errorImg.gif';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='bg-white'>
            <div className='w-[80%] relative mx-auto pl-32'>
                <h1 className='text-7xl absolute left-[550px] font-serif top-[100px] font-bold'>4O4</h1>
                <img className=' h-[80vh] pl-24' src={errorImg} alt="" />
                <div className='text-center -mt-28 space-y-3 mr-12'>
                    <h1 className='text-4xl font-serif'>Looks Like you're lost</h1>
                    <h1>the page you're looking for not available!</h1>
                    <p><Link to='/'><p className='bg-rose-400 hover:bg-rose-500 inline-block rounded-md p-4 text-white font-bold'>GO TO HOME</p></Link></p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;