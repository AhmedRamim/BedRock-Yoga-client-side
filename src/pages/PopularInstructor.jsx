import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PopularInstructor = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: () => axiosSecure.get('/instructors')
            .then(res => {
                return res.data
            })
            .catch(err => console.log(err))
    })

    return (
        <div className='pt-32 mb-20 container'>
            <h1 data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500" className="text-3xl md:text-5xl font-bold text-center mb-32 mt-20 text-gray-600">Popular Instructors</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 '>
                {
                    instructors?.map(singleClass => {
                        return <div key={singleClass._id} className="card md:h-[500px] md:w-96 bg-base-100 shadow-2xl">
                            <figure className="px-10 pt-10 rounded-lg">
                                <img src={singleClass?.classImage} alt={singleClass?.name} className="rounded-xl h-[300px]  w-full" />
                            </figure>
                            <div className="card-body">
                                <p>Instructor Name: {singleClass?.name}</p>

                                <p>{singleClass?.email}</p>

                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default PopularInstructor;