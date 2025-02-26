import { Link } from "react-router-dom";

const Login = () => {
    const handleSignIn = e =>{
        e.preventDefault();
        console.log('form sign up');
        
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