import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
const CountryCard = ({country}) => {
    return (
        <div data-aos="zoom-in-up" data-aos-duration='1000' className=" w-11/12 xl:w-full mx-auto rounded-lg shadow-md  ">
            <img src={country?.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />

            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-wide py-1">{country.country_Name}</h2>
                    <p className=" opacity-80">{country?.short_description?.slice(0,120)}......</p>
                    
                </div>
                <div className="flex items-center">
                    <Link to={`/spot/`} ><button className=" px-4 py-2 text-primary bg-transparent font-semibold  rounded-lg border border-primary hover:bg-primary hover:text-white ">View Details</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default CountryCard;

CountryCard.propTypes={
    country:PropTypes.object
}