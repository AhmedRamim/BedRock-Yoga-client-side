import { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import useAllData from '../../../hooks/useAllData';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateClass = () => {
    const [data, , isLoading] = useAllData()
    const { user } = useContext(AuthContext)
    // const [className, setClassName] = useState('');
    // const [classImage, setClassImage] = useState('');
    // const [availableSeats, setAvailableSeats] = useState('');
    // const [price, setPrice] = useState('');
    const { id } = useParams()
    const classData = data?.find(singleData => singleData._id === id)
    

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const className = form.className.value
        const classImage = form.classImage.value
        const availableSeats = form.availableSeats.value
        const price = form.price.value
        const addClass = { className, classImage, availableSeats, price}
        fetch(`${import.meta.env.VITE_url}/updateclass/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addClass)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Class Updated',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }

            })

    }
    return (
        <form onSubmit={handleFormSubmit} className="max-w-md p-6 mt-20 mx-auto">
            <div className="mb-4">
                <label htmlFor="className" className="block mb-2 font-medium">
                    Class Name
                </label>
                <input
                    type="text"
                    id="className"
                    defaultValue={classData?.className}
                    className="w-full px-4 py-2 border border-gray-300 rounded"
                    name='className'
                   
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
                    defaultValue={classData?.classImage}
                    name='classImage'
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
                    defaultValue={classData?.availableSeats}
                   name='availableSeats'
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
                    defaultValue={classData?.price}
                    name='price'
                />
            </div>

            <button
                type="submit"
                className="w-full px-4 py-2 text-white transition-all bg-rose-400 rounded hover:bg-rose-500"
            >
                Update
            </button>
        </form>
    );
};

export default UpdateClass;