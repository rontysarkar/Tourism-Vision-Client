import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const CountrySection = () => {

    const [country, setCountry] = useState()
    console.log(country)
    useEffect(() => {
        fetch('http://localhost:5000/country')
            .then(res => res.json())
            .then(data => {
                setCountry(data)
            })
    }, [])
    return (
        <div className="xl:px-56 mt-40">
            <div>
                <div >
                    <h1 className=" font-bold text-4xl font-days py-10">Bast  Tourists Spot Country</h1>
                    <p className="lg:w-2/3 my-2 opacity-60 ">When it comes to the crown jewel of tourism in Asia, few contenders shine as brightly as Thailand. Nestled in the heart of Southeast Asia, Thailand beckons travelers with its vibrant culture, breathtaking landscapes, and warm hospitality. From the bustling streets of Bangkok,</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12  mx-auto my-10 ">
              {
                country?.map(country => <CountryCard key={country._id} country={country}/>)
             }
            </div>
        </div> 
    );
};

export default CountrySection;