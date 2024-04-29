import { useLoaderData } from "react-router-dom";
import CountrySpotCard from "../components/CountrySection/CountrySpotCard";

const CountrySpot = () => {
    const countrySpotData = useLoaderData()
    console.log(countrySpotData)
    return (
        <div className="xl:px-32">
            <div className="text-center my-12" >
                <h1 className=" font-bold text-4xl">All Popular Tourists Spot</h1>
                <p className="my-4 2xl:px-96 opacity-90 text-sm">Explore iconic landmarks and hidden gems with our Popular Tour Package! Immerse yourself in vibrant cultures, savor local cuisines, and create unforgettable memories as you journey through captivating destinations curated </p>
            </div>
           
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12  mx-auto my-6">
                {
                    countrySpotData.map(spot => <CountrySpotCard key={spot._id} spot={spot} />)
                }

            </div>
        </div>
    );
};

export default CountrySpot;