import { FaEye } from "react-icons/fa";
import { IoEyedropSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeyCart = ({ coffey , setCoffees , coffees}) => {
    const { _id, chef,  category,  photo } = coffey;
    const handleDelete = _id => {
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


                fetch(`http://localhost:5000/coffey/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffey has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(coff => coff._id !== _id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }
    return (
        <div className="bg-[#F5F4F1]">
            <div className="md:flex md:justify-between md:items-center text-center space-y-2 p-6">
                <div>
                    <img className="w-[185px] h-[239px] object-cover mx-auto" src={photo} alt="" />
                </div>
                <div className="space-y-2">
                    <p><strong className="text-gray-400">Name :</strong> {category}</p>
                    <p><strong className="text-gray-400">Chef :</strong>{chef}</p>
                    <p><strong className="text-gray-400">Price :</strong> 123 $</p>
                </div>
                <div className="flex items-center justify-center md:grid gap-2">
                    <button className="btn btn-square bg-[#D2B48C]">
                        <FaEye className="text-white" />
                    </button>
                    <Link to={`updateCoffey/${_id}`}>
                        <button className="btn btn-square bg-[#3C393B]">
                            <IoEyedropSharp className="text-white" />
                        </button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-square bg-[#EA4744]">
                        <MdDelete className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoffeyCart;
