import { Link } from "react-router-dom";
import { BookingCard } from "./BookingCard";
import { useEffect, useState } from "react";



const TouristsSection = () => {
    const [touristsSpots,setTouristsSpots] = useState([])
    

    useEffect(()=>{
        fetch('http://localhost:5000/tourists')
        .then(res=>res.json())
        .then(data=>{
            
            setTouristsSpots(data)
        })
    },[])
    return (
        <div className="xl:px-56">
            <div className=" px-6 flex items-center">
                <div >
                    <h1 className=" font-bold text-4xl">Popular Tour Package</h1>
                    <p className="w-2/3 my-2 opacity-60">Explore iconic landmarks and hidden gems with our Popular Tour Package! Immerse yourself in vibrant cultures, savor local cuisines, and create unforgettable memories as you journey through captivating destinations curated to offer the perfect blend of adventure and relaxation</p>
                </div>
                <div >
                <Link to={'/login'}><button className=" w-40 px-6  bg-primary text-white py-4 rounded-sm">View All Tour</button></Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12  mx-auto my-10 ">

                <BookingCard />
                <BookingCard />
                <BookingCard />
                <BookingCard />
                {
                    touristsSpots.map(spot=><BookingCard key={spot._id} spot={spot} />)
                }

            </div>
        </div>
    );
};

export default TouristsSection;