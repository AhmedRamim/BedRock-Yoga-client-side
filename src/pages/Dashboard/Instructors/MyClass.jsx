
import React from 'react';
import useAllData from '../../../hooks/useAllData';
import { FaAddressBook, FaPen } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const MyClass = () => {
    const [data, refetch] = useAllData()
    // console.log(data);
    

    // TODO:Feedback
    const handleFeedback = (id) => {

    }
    return (
        <div className="overflow-x-auto mt-20 p-8">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Thumbnail</th>
                        <th>Course Name</th>
                        <th>Status</th>
                        <th>Total Enrolled Student</th>
                        <th>Price</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        data && data.map((item, index) => <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>

                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.classImage} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>

                            </td>
                            <td>
                                {item.className}

                            </td>
                            <td>
                                {item.status}

                            </td>
                            <td>
                                0

                            </td>
                            <td>${item.price}</td>
                            <td >
                                <Link  className='bg-green-600 hover:bg-green-700 cursor-pointer inline-block mt-4 rounded-full  p-4' to={`/dashboard/updateclass/${item._id}`}>
                                    <span>
                                        <FaPen color='white' />
                                    </span>
                                </Link>
                            </td>
                            {
                                item.status === 'deny' && <td onClick={() => handleFeedback(item._id)} className='bg-yellow-600 ml-2 cursor-pointer inline-block mt-4 rounded-full '>
                                    <FaAddressBook color='white' />
                                </td>
                            }
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyClass;