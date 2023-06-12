import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { updateStatusApproved } from "../../../api/auth";
import { toast } from "react-toastify";


const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data ,refetch} = useQuery({
        queryKey: ['alldata'],
        queryFn: () => axiosSecure.get('/alldata')
            .then(response => {
                
                return response.data; 
            })
            .catch(err => {
                console.log(err.message);
                throw err; 
            })
    });

    // update status approved 
    const handleUpdateStatus = (id) => {
        refetch()
        toast.success('Class Approved')
        updateStatusApproved(id)
    }
    // console.log(data);

    return (
        <div className="overflow-x-auto mt-20 p-8">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class Image</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Available Seats</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th className="text-center">Actions</th>

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
                                {item.instructorName}

                            </td>
                            <td>
                                {item.instructorEmail}

                            </td>
                            <td>
                                {item.availableSeats}

                            </td>
                            <td>
                                {item.status}

                            </td>
                            <td>${item.price}</td>
                            <td >
                                <div className="flex gap-2">
                                    <button onClick={()=> handleUpdateStatus(item._id)}  className="btn btn-accent btn-xs text-white">Approved</button>
                                    <button className="btn btn-accent btn-xs text-white">Deny</button>
                                    <button className="btn btn-accent btn-xs text-white">Feedback</button>
                                </div>
                            </td>

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageClasses;
