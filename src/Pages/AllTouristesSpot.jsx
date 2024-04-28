import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import TouristsCard from "../components/TouristsSection/TouristsCard";

const AllTouristesSpot = () => {
    const {touristsSpots} = useContext(AuthContext)

    return (
        <div className="xl:px-32">
            <h1>Tourists {touristsSpots.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12  mx-auto my-10">
                {
                    touristsSpots.map(spot=><TouristsCard spot={spot} key={spot._id}></TouristsCard>)
                }

            </div>
        </div>
    );
};

export default AllTouristesSpot;