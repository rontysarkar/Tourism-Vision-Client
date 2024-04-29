import Banner from "../components/Banner";
import CountrySection from "../components/CountrySection/CountrySection";
import TouristsSection from "../components/TouristsSection/TouristsSection";

const Home = () => {
    
    return (
        <div>
            <Banner />
            <div className="mt-40  ">
                <TouristsSection  />
            </div>
            <div>
                <CountrySection/>
            </div>

        </div>
    );
};

export default Home;