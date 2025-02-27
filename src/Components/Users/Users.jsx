import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUser] = useState(loadedUsers);
    console.log(users);

    const handleUserDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // delete from the database
                fetch(`http://localhost:5000/users/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('delete is done', data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });

                            const remainingUser = users.filter(user => user._id !== _id);
                            setUser(remainingUser);
                        }
                    })


            }
        });

    }

    return (
        <div className="min-h-screen max-w-7xl mx-auto">
            <h1 className="font-semibold">Users : {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="border-2">No</th>
                            <th className="border-2">Name</th>
                            <th className="border-2">Email</th>
                            <th className="border-2">CreatedAt</th>
                            <th className="border-2 text-center" colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => (
                                <tr key={idx}>
                                    <th className="border-2">{idx + 1}</th>
                                    <td className="border-2">{user?.name}</td>
                                    <td className="border-2">{user?.email}</td>
                                    <td className="border-2">{user?.createdAt}</td>
                                    <td className="border-2 text-center text-xl"><MdDelete onClick={() => handleUserDelete(user._id)} /></td>
                                    <td className="border-2 text-center text-xl"><MdEdit /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;

