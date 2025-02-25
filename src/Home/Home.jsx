import { Link, useLoaderData } from "react-router-dom";
import Hero from "../Components/Hero/Hero";
import IconTag from "../Components/IconTag/IconTag";
import CoffeyCart from "../Components/CoffeyCart/CoffeyCart";
import { useState } from "react";
import CoffeeMedia from "../Components/CoffeeMedia/CoffeeMedia";

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)
    return (
        <div>
            <Hero />
            <IconTag />

            <div>
                <div className="text-center space-y-2 mt-10 mb-8">
                    <p className="text-center font-normal text-[#331A15] text-xl md:text-3xl">Our Popular Products</p>
                    <Link to="/addCoffey"><button className="btn bg-[#E3B577] border-none">Add Coffee</button></Link>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3">
                        {
                            coffees.map(coffey => <CoffeyCart coffees={coffees} setCoffees={setCoffees} key={coffey._id} coffey={coffey} />)
                        }
                    </div>
                </div>
            </div>
            <CoffeeMedia/>
        </div>
    );
};

export default Home;