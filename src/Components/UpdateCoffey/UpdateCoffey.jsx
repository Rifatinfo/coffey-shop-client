import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffey = () => {
    const coffey = useLoaderData();
    const { _id, email, chef, supplier, category, taste, details, photo } = coffey;
    const handleUpdatedCoffey = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const category = e.target.category.value;
        const taste = e.target.taste.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;
        const UpdatedCoffey = { email, chef, supplier, category, taste, details, photo }
        console.log(UpdatedCoffey);

        // Send data to the server
        fetch(`http://localhost:5000/coffey/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UpdatedCoffey)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Response from server:", data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Coffey Updated Successfully",
                        icon: "success",
                        draggable: true
                    });
                }
            })
    }

    return (
        <div>
            <div className="max-w-6xl mx-auto mt-10">
                <div>
                    <div>
                        <Link to="/"><p className="text-[#1B1A1AB3] font-semibold">Black To Home</p></Link>
                    </div>
                    <div className="text-center mt-10 mb-10">
                        <h1 className="text-lg md:text-3xl font-normal">Update Coffee</h1>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleUpdatedCoffey}>
                        <div className="md:flex gap-2 mb-1">
                            <div className="w-full  md:w-1/2">
                                <label className="fieldset-label font-semibold">Email</label>
                                <input name="email" type="email" defaultValue={email} className="input w-full" placeholder="Email" />
                            </div>
                            <div className="w-full  md:w-1/2">
                                <label className="fieldset-label font-semibold">Chef</label>
                                <input name="chef" type="text" defaultValue={chef} className="input w-full" placeholder="Chef" />
                            </div>
                        </div>
                        <div className="md:flex gap-2 mb-1">
                            <div className="w-full  md:w-1/2">
                                <label className="fieldset-label font-semibold">Supplier</label>
                                <input name="supplier" type="text" defaultValue={supplier} className="input w-full" placeholder="Supplier" />
                            </div>
                            <div className="w-full  md:w-1/2">
                                <label className="fieldset-label font-semibold">Taste</label>
                                <input name="taste" type="text" defaultValue={taste} className="input w-full" placeholder="Taste" />
                            </div>
                        </div>
                        <div className="md:flex gap-2 mb-1">
                            <div className="w-full  md:w-1/2">
                                <label className="fieldset-label font-semibold">Category</label>
                                <input name="category" type="text" defaultValue={category} className="input w-full" placeholder="Category" />
                            </div>
                            <div className="w-full  md:w-1/2">
                                <label className="fieldset-label font-semibold">Details</label>
                                <input name="details" type="text" defaultValue={details} className="input w-full" placeholder="Details" />
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="fieldset-label font-semibold">Photo</label>
                            <input name="photo" type="text" defaultValue={photo} className="input w-full" placeholder="Photo" />
                        </div>
                        <fieldset className="fieldset">
                            <button className="btn  mt-4 bg-[#D2B48C] text-white">Update Coffey</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffey;