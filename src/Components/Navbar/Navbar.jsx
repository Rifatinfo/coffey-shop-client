import { Link } from 'react-router-dom';
import header from '../../assets/more/Rectangle 1.png'
import logo from '../../assets/more/logo.png'
const Navbar = () => {
    return (
        <div>
            <div className='relative'>
                <img className='h-[50px] md:h-auto' src={header} alt="" />
                <div  className='absolute -mt-[40px] ml-40 md:-mt-[90px] md:ml-100'>
                    <img className='mx-auto w-[160px] md:w-auto' src={logo} alt="" />
                </div>
                <div className='absolute md:top-6 md:ml-0  ml-2 top-1 md:right-30 gap-1 flex'>
                <Link to="/sign-in"><button className="btn bg-[#E3B577] rounded-4xl border-none">Sign In</button></Link>
                <Link to="/users"><button className="btn bg-[#E3B577] rounded-4xl border-none">Users</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;