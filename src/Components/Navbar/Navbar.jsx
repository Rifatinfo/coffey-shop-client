import header from '../../assets/more/Rectangle 1.png'
import logo from '../../assets/more/logo.png'
const Navbar = () => {
    return (
        <div>
            <div className='relative'>
                <img className='h-[50px] md:h-auto' src={header} alt="" />
                <div  className='absolute -mt-[40px] ml-25 md:-mt-[90px] md:ml-100'>
                    <img className='mx-auto w-[160px] md:w-auto' src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;