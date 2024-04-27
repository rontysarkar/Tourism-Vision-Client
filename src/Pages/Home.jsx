import Banner from "../components/Banner";
import TouristsSection from "../components/TouristsSection/TouristsSection";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="mt-40  ">
                <TouristsSection />
            </div>

        </div>
    );
};

export default Home;