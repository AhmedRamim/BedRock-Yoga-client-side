import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { toast } from 'react-toastify';

const MySelectedClass = () => {
    const {user} = useContext(AuthContext)
    const [data,setData] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_url}/getselectedclass/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
    },[])
    const handleSelect = () => {
        toast('Taka nai')
    }
    return (
        <div className='mt-20 grid grid-cols-1 md:grid-cols-3 gap-6'>
             {
               data.length>0 ?  data?.map(singleClass => {
                        return <div key={singleClass._id} className="card md:h-[500px] md:w-96 bg-base-100 shadow-2xl">
                            <figure className="px-10 pt-10 rounded-lg">
                                <img src={singleClass?.classImage} alt="Shoes" className="rounded-xl h-[300px]  w-full" />
                            </figure>
                            <div className="card-body  ">
                                <h2 className="card-title">{singleClass?.className}</h2>
                                <p><span className='font-bold'>Instructor Name: </span>{singleClass?.instructorName || 'undefined'}</p>
                                <p><span className='font-bold'>Available Seats: </span>{singleClass?.availableSeats}</p>
                                <p><span className='font-bold'>Price: </span>${singleClass?.price}</p>
                                <div  className="card-actions">
                                    <button onClick={() => handleSelect(singleClass)} className="btn btn-accent">Pay</button>
                                </div>
                            </div>
                        </div>
                    }) : <h1 className='text-5xl m-20'> You not Select any Room yet</h1>
                } 
        </div>
    );
};

export default MySelectedClass;