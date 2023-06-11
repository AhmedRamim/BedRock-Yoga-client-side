import { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const AddClass = () => {
    const { user } = useContext(AuthContext)
    const [className, setClassName] = useState('');
    const [classImage, setClassImage] = useState('');
    const [availableSeats, setAvailableSeats] = useState('');
    const [price, setPrice] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const instructorName = user?.displayName;
        const instructorEmail = user?.email;
        const addClass = { instructorName, instructorEmail, className, classImage, availableSeats, price, status: 'pending' }
        fetch(`${import.meta.env.VITE_url}/addclass`,{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(addClass)
            })
            .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Your Class Added',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                    }

                })
    };
    return (
        <form onSubmit={handleFormSubmit} className="max-w-md p-6 mt-20 mx-auto">
            <div className="mb-4">
                <label htmlFor="className" className="block mb-2 font-medium">
                    Class Name
                </label>
                <input
                    type="text"
                    id="className"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="classImage" className="block mb-2 font-medium">
                    Class Image
                </label>
                <input
                    type="text"
                    id="classImage"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    value={classImage}
                    onChange={(e) => setClassImage(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="instructorName" className="block mb-2 font-medium">
                    Instructor Name
                </label>
                <input
                    type="text"
                    id="instructorName"
                    className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded"
                    value={user?.displayName}
                    readOnly
                />
            </div>

            <div className="mb-4">
                <label htmlFor="instructorEmail" className="block mb-2 font-medium">
                    Instructor Email
                </label>
                <input

                    type="email"
                    id="instructorEmail"
                    className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded"
                    value={user?.email}
                    readOnly
                />
            </div>

            <div className="mb-4">
                <label htmlFor="availableSeats" className="block mb-2 font-medium">
                    Available Seats
                </label>
                <input
                    type="number"
                    id="availableSeats"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    value={availableSeats}
                    onChange={(e) => setAvailableSeats(parseInt(e.target.value))}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="price" className="block mb-2 font-medium">
                    Price
                </label>
                <input
                    type="number"
                    id="price"
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                />
            </div>

            <button
                type="submit"
                className="w-full px-4 py-2 text-white transition-all bg-rose-400 rounded hover:bg-rose-500"
            >
                Add
            </button>
        </form>
    );
};

export default AddClass;