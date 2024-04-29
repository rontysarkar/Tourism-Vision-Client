/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import TouristsCard from "../components/TouristsSection/TouristsCard";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";

const AllTouristesSpot = () => {
    const [allTouristsSpot,setAllTouristsSpot] = useState()
    const allTouristsData = useLoaderData()
    
    useEffect(()=>{
        setAllTouristsSpot(allTouristsData)
    },[])
    
    
    
  
    
    

    const handleAscending = () => {
       fetch('http://localhost:5000/tourists/sort')
       .then(res=>res.json())
       .then(data=>{
        setAllTouristsSpot(data)
        console.log(data)
       })
    }




    return (
        <div className="xl:px-32">
            <div className="text-center my-8" >
                <h1 className=" font-bold text-4xl">All Popular Tourists Spot</h1>
                <p className="my-2 2xl:px-80 opacity-90 text-sm">Explore iconic landmarks and hidden gems with our Popular Tour Package! Immerse yourself in vibrant cultures, savor local cuisines, and create unforgettable memories as you journey through captivating destinations curated to offer the perfect blend of adventure and relaxation</p>
            </div>
            <div className="dropdown dropdown-hover mx-auto  ">
                <div tabIndex={0} role="button" className="btn m-1 font-bold bg-primary text-white">Sort by Average Cost <IoIosArrowDown /> </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-primary font-bold">
                    <li onClick={handleAscending}><a>Sort by Ascending</a></li>
                </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12  mx-auto my-6">
                {
                    allTouristsSpot?.map(spot => <TouristsCard spot={spot} key={spot._id}></TouristsCard>)
                }

            </div>
        </div>
    );
};

export default AllTouristesSpot;