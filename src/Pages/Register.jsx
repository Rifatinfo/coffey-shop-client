import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(email, password, name);

        createUser(email, password)
            .then(result => {
                console.log(result.user);

                // save new user in data base 
                const createdAt = result?.user?.metadata?.creationTime
                const newUser = { email, name , createdAt}
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('User created to db', data);
                        if(data.insertedId){
                           alert("Successfully created in Database");
                        }
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div className="hero bg-[#ECEAE3] min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Password" />
                            <label className="fieldset-label">Name</label>
                            <input name="name" type="text" className="input" placeholder="name" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4 bg-[#E3B577] border-none text-black">Register</button>
                            <Link to="/register"><p className="px-6  text-center ">Do not have an account yet?
                                <a rel="noopener noreferrer" href="#" className="hover:underline"> <span className="font-bold">Sign In</span></a>.
                            </p></Link>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;

