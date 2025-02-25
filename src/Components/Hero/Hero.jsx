
const Hero = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/qLhtdDYh/3.png)",
                }}>
                <div></div>
                <div className="absolute md:ml-120 hero-content text-neutral-content md:text-start text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-xl md:text-3xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5 text-sm">
                            Iti is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                        </p>
                        <button className="btn bg-[#E3B577] border-none">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;