import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const handleSignIn = e => {
        e.preventDefault();
        console.log('form sign up');
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);
        signInUser(email, password)
        .then(result =>{
            console.log(result.user);

            // update last login time 
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = {email, lastSignInTime}
            console.log(loginInfo);

            fetch(`http://localhost:5000/users`, {
                method : 'PATCH',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .catch(data => {
                console.log(data);
                
            })
            
        })
        .catch(error => {
            console.log(error);
        })

    }
    return (
        <div>
            <div className="hero bg-[#ECEAE3] min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input name="password" type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4 bg-[#E3B577] border-none text-black">Sign In</button>
                            <Link to="/register"><p className="px-6  text-center ">Do not have an account yet?
                                <a rel="noopener noreferrer" href="#" className="hover:underline"> <span className="font-bold">Sign up</span></a>.
                            </p></Link>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;