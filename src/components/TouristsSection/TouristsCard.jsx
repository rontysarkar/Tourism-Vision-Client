import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import { IoLocationOutline } from "react-icons/io5";
import { MdPersonPin } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import { BsCloudSun } from "react-icons/bs";

const TouristsCard = ({spot}) => {
    // console.log(spot)
    return (
        <div data-aos="zoom-in-up" data-aos-duration='1000' className=" w-11/12 xl:w-full mx-auto rounded-lg shadow-md  ">
            <img src={spot.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />

            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-wide">{spot.tourists_spot_name}</h2>
                    <h3 className="text-xl font-bold flex items-center  gap-2"><span className='text-primary opacity-80'>{spot.country_Name}</span></h3>
                    <p className=" opacity-80">{spot.short_description.slice(0,140)}......</p>
                    <h1 data-aos='fade-up-right' data-aos-duration='1000' data-aos-delay="800" className='py-2  flex items-center gap-1 font-medium text-xs lg:text-sm '><IoLocationOutline className="text-primary" /> Location : <span >{spot.location}</span></h1>

                    <div className='flex flex-col gap-2 lg:flex-row lg:gap-6 '>
                        <h1 className='  flex items-center gap-1 font-medium'><BsCloudSun className="text-primary" />{spot.seasonality}</h1>
                        <h1 className='font-medium flex items-center gap-1 pl-1'><MdPersonPin className="text-primary" />{spot.totalVisitorsPerYear}</h1>
                        <h4 className='font-semibold flex items-center gap-1   '><IoMdTimer className="text-primary" /><span>{spot.travel_time}</span></h4>
                    </div>
                    {/* <h4 className='font-bold text-lg pl-2 text-[#1db2ff]'>{1200}</h4> */}
                </div>
                <div className="flex justify-between">
                    <Link to={`/spot/${spot._id}`} ><button className=" px-4 py-2 text-primary bg-transparent font-semibold  rounded-lg border border-primary hover:bg-primary hover:text-white ">View Details</button></Link>
                    <div>
                        <h1 className="">Form</h1>
                        <h1 className='font-bold text-xl  text-primary'>{spot.average_cost} <span className="text-sm text-black opacity-60">per person</span></h1>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

TouristsCard.propTypes = {
    spot:PropTypes.object
}

export default TouristsCard;