import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { becomeInstructor,becomeAdmin } from '../../../api/auth';
import { ToastContainer, toast } from 'react-toastify';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const {data,refetch} = useQuery({
        queryKey:['users'],
        queryFn:async () => await axiosSecure.get('/users')
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err);
        })
    })
    // console.log(data);
    const handleMakeInstructor = (email) => {
        
        becomeInstructor(email)
        refetch()
        toast.success('You are now Instructor')
        // setDisable(true)
    }
    const handleMakeAdmin = (email) => {
        becomeAdmin(email)
        toast.success('You are now Admin')
        
        refetch()
        // setDisable(true)
    }
    return (
        <div className="overflow-x-auto mt-20 p-8">
        <table className="table w-full">
            {/* head */}
            <thead>
                <tr>
                    <th>#</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Role</th>
                    <th className="">Actions</th>

                </tr>
            </thead>
            <tbody>
                <ToastContainer/>
                {/* row 1 */}
                {
                    data && data.map((item, index) => <tr key={item._id}>
                        <td>{index + 1}</td>
                      
                        <td>
                            {item.name}

                        </td>
                       
                        <td>{item.email}</td>
                        <td>{item.role || 'student'}</td>
                        <td >
                            <div className="flex gap-2">
                                <button onClick={() => handleMakeInstructor(item?.email)} className="btn btn-accent btn-sm text-white">Make Instructor</button>
                                <button onClick={() => handleMakeAdmin(item?.email)} className="btn btn-accent btn-sm text-white">Make Admin</button>
                            </div>
                        </td>

                    </tr>)
                }
            </tbody>
        </table>
    </div>
    );
};

export default ManageUsers;