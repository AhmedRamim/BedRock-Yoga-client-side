import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Classes = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data, refetch } = useQuery({
        queryKey: ['status'],
        queryFn: async () => await axiosSecure.get('/status')
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err);
            })
    })
    console.log(data);
    return (
        <div className='pt-32 container'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 '>
                {
                    data?.map(singleClass => {
                      return  <div key={singleClass._id} className="card md:h-[500px] md:w-96 bg-base-100 shadow-2xl">
                            <figure className="px-10 pt-10 rounded-lg">
                                <img src={singleClass?.classImage} alt="Shoes" className="rounded-xl h-[300px]  w-full" />
                            </figure>
                            <div className="card-body  ">
                                <h2 className="card-title">{singleClass?.className}</h2>
                                <p><span className='font-bold'>Instructor Name: </span>{singleClass?.instructorName}</p>
                                <p><span className='font-bold'>Available Seats: </span>{singleClass?.availableSeats}</p>
                                <p><span className='font-bold'>Price: </span>${singleClass?.price}</p>
                                <div className="card-actions">
                                    <button className="btn btn-accent">Select</button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Classes;