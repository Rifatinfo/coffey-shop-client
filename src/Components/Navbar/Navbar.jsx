import { Link } from 'react-router-dom';
import header from '../../assets/more/Rectangle 1.png'
import logo from '../../assets/more/logo.png'
const Navbar = () => {
    return (
        <div>
            <div className='relative md:fixed md:z-10'>
                <img className='h-[50px] md:h-auto' src={header} alt="" />
                <div  className='absolute -mt-[40px] ml-25 md:-mt-[90px] md:ml-100'>
                    <img className='mx-auto w-[160px] md:w-auto' src={logo} alt="" />
                </div>
                <div className='absolute md:top-6 md:ml-0  ml-2 top-1 md:right-30'>
                <Link to="/sign-in"><button className="btn bg-[#E3B577] rounded-4xl border-none">Sign In</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;