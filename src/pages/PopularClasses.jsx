import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useContext, useState } from 'react';

const PopularClasses = () => {
    const navigate = useNavigate()
    const [disabled,setDisabled] = useState(false)
    const { user } = useContext(AuthContext)
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
    const handleSelect = (item) => {
        const { _id: selectedId, availableSeats, classImage, className, instructorEmail, price, instructorName } = item;
        const selectedClass2 = {
            selectedId, availableSeats, classImage, className, instructorEmail:user?.email, instructorName, price
        }
        if (user) {
            // setDisabled(true)
            fetch(`${import.meta.env.VITE_url}/selectedclass`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass2)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        
                        Swal.fire({
                            title: 'Success!',
                            text: 'Your Class Selected',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    }
                    console.log(data);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else {
            Swal.fire({
                title: 'You are not loggedIn?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log In'
            }).then((result) => {
                if (result.isConfirmed) {
                   navigate('/login')
                }
            })
        }
    }

    return (
        <div className='pt-32 container'>
                  <h1 data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500" className="text-3xl md:text-5xl font-bold text-center mb-32 mt-20 text-gray-600">Popular Classes</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 '>
                {
                    data?.slice(0,6).map(singleClass => {
                        return <div key={singleClass._id} className="card md:h-[500px] md:w-96 bg-base-100 shadow-2xl">
                            <figure className="px-10 pt-10 rounded-lg">
                                <img src={singleClass?.classImage} alt="Shoes" className="rounded-xl h-[300px]  w-full" />
                            </figure>
                            <div className="card-body  ">
                                <h2 className="card-title">{singleClass?.className}</h2>
                                <p><span className='font-bold'>Instructor Name: </span>{singleClass?.instructorName}</p>
                                <p><span className='font-bold'>Available Seats: </span>{singleClass?.availableSeats}</p>
                                <p><span className='font-bold'>Price: </span>${singleClass?.price}</p>
                                <div  className="card-actions">
                                    <button disabled={disabled} onClick={() => handleSelect(singleClass)} className="btn btn-accent">Select</button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};


export default PopularClasses;