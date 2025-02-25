import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffey = () => {

    const handleAddCoffey = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const category = e.target.category.value;
        const taste = e.target.taste.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;
        const newCoffey = { email, chef, supplier, category, taste, details, photo }
        console.log(newCoffey);

        // Send data to the server
        fetch('http://localhost:5000/coffey', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(newCoffey)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Response from server:", data);
                if(data.insertedId){
                    Swal.fire({
                        title: "User Added Successfully",
                        icon: "success",
                        draggable: true
                      });
                }
            })
    }
    return (
        <div className="max-w-7xl mx-auto bg-[#F4F3F0] py-10">
            <div>
                <Link to="/"><p className="text-[#1B1A1AB3] font-semibold ml-4">Black To Home</p></Link>
            </div>
            <div className="text-center mt-10 mb-10">
                <h1 className="text-lg md:text-3xl font-normal">Add New Coffee</h1>
                <p className="text-[#1B1A1AB3]">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>

            {/* form */}
            <div className="max-w-6xl mx-auto">
                <div>
                    <form onSubmit={handleAddCoffey}>
                        <div className="md:flex gap-2 mb-1">
                            <div className="w-full  md:w-1/2">
                                <label className="fieldset-label font-semibold">Email</label>
                                <input name="email" type="email" className="input w-full" placeholder="Email" />
                            </div>
                            <div className="w-full  md:w-1/2">
                                <label className="fieldset-label font-semibold">Chef</label>
                                <input name="chef" type="text" className="input w-full" placeholder="Chef" />
                            </div>
                        </div>
                        <div className="md:flex gap-2 mb-1">
                            <div className="w-full  md:w-1/2">
                                <label className="fieldset-label font-semibold">Supplier</label>
                                <input name="supplier" type="text" className="input w-full" placeholder="Supplier" />
                            </div>
                            <div className="w-full  md:w-1/2">
                                <label className="fieldset-label font-semibold">Taste</label>
                                <input name="taste" type="text" className="input w-full" placeholder="Taste" />
                            </div>
                        </div>
                        <div className="md:flex gap-2 mb-1">
                            <div className="w-full  md:w-1/2">
                                <label className="fieldset-label font-semibold">Category</label>
                                <input name="category" type="text" className="input w-full" placeholder="Category" />
                            </div>
                            <div className="w-full  md:w-1/2">
                                <label className="fieldset-label font-semibold">Details</label>
                                <input name="details" type="text" className="input w-full" placeholder="Details" />
                            </div>
                        </div>
                        <div className="w-full">
                            <label className="fieldset-label font-semibold">Photo</label>
                            <input name="photo" type="text" className="input w-full" placeholder="Photo" />
                        </div>
                        <fieldset className="fieldset">
                            <button className="btn  mt-4 bg-[#D2B48C] text-white">Add Coffey</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCoffey;