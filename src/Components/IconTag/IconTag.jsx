import icon1 from '../../assets/icons/1.png'
import icon2 from '../../assets/icons/2.png'
import icon3 from '../../assets/icons/3.png'
import icon4 from '../../assets/icons/4.png'
const IconTag = () => {
    return (
       <div className='bg-[#ECEAE3]'>
         <div className='grid grid-cols-1 md:grid-cols-4 gap-3 max-w-6xl mx-auto text-center md:text-start  py-6'>
            <div className='space-y-1'>
                <img className='mx-auto md:mx-0' src={icon1} alt="" />
                <p className="font-semibold font-xl">Awesome Aroma</p>
                <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='space-y-1'>
                <img className='mx-auto md:mx-0' src={icon2} alt="" />
                <p className="font-semibold font-xl">High Quality</p>
                <p>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className='space-y-1'>
                <img className='mx-auto md:mx-0' src={icon3} alt="" />
                <p className="font-semibold font-xl">Pure Grades</p>
                <p>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className='space-y-1'>
                <img className='mx-auto md:mx-0' src={icon4} alt="" />
                <p className="font-semibold font-xl">Proper Roasting</p>
                <p>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
       </div>
    );
};

export default IconTag;