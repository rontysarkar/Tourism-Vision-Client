import { Link } from "react-router-dom";

const TouristsCard = () => {
    return (
        <div data-aos="zoom-in-up" data-aos-duration='1000' className=" w-11/12 xl:w-full mx-auto rounded-lg shadow-md dark:bg-gray-50 ">
            <img src={'https://i.ibb.co/gRmzfZg/sea-3243357-1280.jpg'} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />

            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-wide">{"Cox Bazar Bitch"}</h2>
                    {/* <h3 className="text-xl font-bold flex items-center  gap-2"><BiLocationPlus/> <span className='text-[#2E650D]'>{"Bangladesh"}</span></h3> */}
                    <p className="dark:text-gray-800 opacity-80">{"Cox's Bazar Beach, one of the most popular tourist attractions in Bangladesh, is the longest uninterrupted natural beach in the world"}......</p>
                    {/* <div className='flex flex-col gap-2 lg:flex-row lg:gap-6 '>
                        <h1 className='flex items-center gap-1 font-medium'>{'bangladesh cox bazar'}</h1>
                        <h1 className='font-medium flex items-center gap-1 pl-1'>{'2000'}</h1>
                        <h4 className='font-semibold  lg:text-[#1db2ff] '>For {'dhaka'}</h4>
                    </div> */}
                    {/* <h4 className='font-bold text-lg pl-2 text-[#1db2ff]'>{1200}</h4> */}
                </div>
                <div className="flex justify-between">
                    <Link ><button className=" px-4 py-2 text-primary bg-transparent font-semibold  rounded-lg border border-primary hover:bg-primary hover:text-white ">View Details</button></Link>
                    <div>
                        <h1 className="">Form</h1>
                        <h1 className='font-bold text-xl  text-primary'>{'1200$'} <span className="text-sm text-black opacity-60">per person</span></h1>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default TouristsCard;