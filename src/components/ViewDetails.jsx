import { BsCloudSun } from "react-icons/bs";
import { IoMdTimer } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { MdPersonPin } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const touristsSpot = useLoaderData()
    console.log(touristsSpot)
    return (
        <div className="min-h-[90vh]  mt-12 rounded-3xl  ">
            <div className="hero-content flex-col lg:flex-row gap-20  justify-between mx-auto  ">
                <div data-aos='zoom-in' data-aos-duration='1000' className="  bg-base-200 lg:h-[712px] w-[90%] lg:w-3/6 flex items-center justify-center rounded-xl ">
                    <img src={touristsSpot.image} className=" object-cover rounded-2xl h-[712px] " />
                </div>
                <div className="w-[90%] lg:w-1/2 space-y-4  ">
                    <h1 data-aos='fade-left' data-aos-duration='1000' data-aos-delay="200" className="text-4xl font-bold text-primary  ">{touristsSpot.tourists_spot_name}</h1>
                    <h3 data-aos='fade-left' data-aos-duration='1000' data-aos-delay="400" className="text-xl font-bold flex items-center  gap-2">Country Name :<span className='text-primary'>{touristsSpot.country_Name}</span></h3>
                    <hr />
                    <h2 data-aos='fade-left' data-aos-duration='1000' data-aos-delay="600" className="text-lg opacity-80 font-semibold">{touristsSpot.short_description}</h2>
                    <hr />
                    <div className='flex flex-col gap-2  lg:gap-6 '>
                        <h1 data-aos='fade-up-right' data-aos-duration='1000' data-aos-delay="800" className='flex items-center gap-1 font-medium'><IoLocationOutline /> Location : <span className="text-primary">{touristsSpot.location}</span></h1>
                        <h1 data-aos='fade-up-right' data-aos-duration='1000' data-aos-delay="1000" className='font-medium flex items-center gap-1 '> <MdPersonPin /> Total Visitor :  <span className="text-primary">{touristsSpot.totalVisitorsPerYear}</span></h1>
                        <h4 data-aos='fade-up-right' data-aos-duration='1000' data-aos-delay="1200" className='font-semibold flex items-center gap-1  '><IoMdTimer />Travel Time : <span className="text-primary">{touristsSpot.travel_time}</span></h4>
                        <h4 data-aos='fade-up-right' data-aos-duration='1000' data-aos-delay="1200" className='font-semibold flex items-center gap-1  '> <BsCloudSun /> Seasonality : <span className="text-primary">{touristsSpot.seasonality}</span></h4>
                    </div>
                    <h4 data-aos='fade-right' data-aos-duration='1000' data-aos-delay="1400" className='font-bold text-lg  '>Average Cost : <span className="text-primary">{touristsSpot.average_cost}</span></h4>
                    
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;