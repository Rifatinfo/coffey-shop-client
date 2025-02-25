import media1 from "../../assets/cups/Rectangle 10.png"
import media2 from "../../assets/cups/Rectangle 11.png"
import media3 from "../../assets/cups/Rectangle 12.png"
import media4 from "../../assets/cups/Rectangle 13.png"
import media5 from "../../assets/cups/Rectangle 14.png"
import media6 from "../../assets/cups/Rectangle 15.png"
import media7 from "../../assets/cups/Rectangle 16.png"
import media8 from "../../assets/cups/Rectangle 9.png"
const CoffeeMedia = () => {
    return (
        <div>
            <div className="mt-6">
                <p className="text-center font-normal text-[#331A15] text-xl md:text-3xl">Follow on Instagram</p>
            </div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-4 md:gap-1 mt-4 max-w-6xl mx-auto p-2 md:p-0">
                <img src={media1} alt="" />
                <img src={media2} alt="" />
                <img src={media3} alt="" />
                <img src={media4} alt="" />
                <img src={media5} alt="" />
                <img src={media6} alt="" />
                <img src={media7} alt="" />
                <img src={media8} alt="" />
            </div>
        </div>
    );
};

export default CoffeeMedia;