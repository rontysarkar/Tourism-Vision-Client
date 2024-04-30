import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";
import {  useTypewriter } from 'react-simple-typewriter'


const CountrySection = () => {

    const [Countries, setCountries] = useState()
   
    useEffect(() => {
        fetch('https://tourism-vision-server.vercel.app/Countries')
            .then(res => res.json())
            .then(data => {
                setCountries(data)
            })
    }, [])

    const [typeEffect] = useTypewriter({
        words:['Bangladesh','Thailand','Vietnam','Cambodia','Malaysia'],
        loop:{},
        typeSpeed:100,
        delaySpeed:20
      })

    return (
        <div className="xl:px-56 mt-40">
            <div>
                <div className="pl-4 lg:pl-0" >
                    <h1 className=" font-bold text-4xl  py-6">Bast  Tourists Spot Country <span className="text-primary">{typeEffect}</span></h1>
                    <p className="lg:w-2/3 my-2 opacity-60  ">When it comes to the crown jewel of tourism in Asia, few contenders shine as brightly as Thailand. Nestled in the heart of Southeast Asia, Thailand beckons travelers with its vibrant culture, breathtaking landscapes, and warm hospitality. From the bustling streets of Bangkok,</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12  mx-auto my-10 ">
              {
                Countries?.map(country => <Link key={country._id} to={`/country/${country. country_Name}`}><CountryCard  country={country}/></Link>)
             }
            </div>
        </div> 
    );
};

export default CountrySection;