import Banner from "../components/Banner";
import ClientSection from "../components/ClientSection";
import CountrySection from "../components/CountrySection/CountrySection";
import GallerySection from "../components/GallerySection";
import TouristsSection from "../components/TouristsSection/TouristsSection";
import {  useTypewriter } from 'react-simple-typewriter'

const Home = () => {


    const [typeEffect] = useTypewriter({
        words:['Say About Us','Are Very Happy With our service'],
        loop:{},
        typeSpeed:100,
        delaySpeed:40
      })

    return (
        <div>
            <Banner />
            <div className="mt-40  ">
                <TouristsSection />
            </div>
            <div>
                <CountrySection />
            </div>
            <div className="xl:px-56 py-20">
                <div className="text-center my-10" >
                    <h1 className=" font-bold text-4xl">Travel Gallery</h1>
                    <p className="my-2 2xl:px-80 opacity-90 text-sm">
                        Certainly! Heres a paragraph for a travel gallery:
                        Welcome to our Travel Gallery, where every frame tells a story of adventure and exploration. Step into a world of breathtaking landscapes, vibrant cultures, and unforgettable moments captured from around the globe. </p>
                </div>
                <GallerySection />
            </div>
            <div className="xl:px-56 py-20">
            <div className="my-10" >
                    <h1 className=" font-bold text-4xl ">Our Client <span className="text-primary">{typeEffect}</span></h1>
                    <p className="lg:w-1/2 my-2 opacity-70 ">At Tourism vision , we take immense pride in delivering exceptional travel experiences tailored to the unique preferences of each of our clients. Don t just take our word for it; </p>
                </div>
                <ClientSection/>
            </div>

        </div>
    );
};

export default Home;