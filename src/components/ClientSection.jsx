// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';
const ClientSection = () => {
    return (
        <>
            <Swiper
            
                slidesPerView={4}
                spaceBetween={3}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination,Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 2000,
                    
                  }}
            >
                <SwiperSlide>
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src="https://i.ibb.co/XLM8NbN/images.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold tracking-wide">Wanderlust Adventures</h2>
                                <p className="dark:text-gray-800">A young couple in their late 20s, avid travelers seeking unique experiences off the </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src="https://i.ibb.co/9wbB9G9/pexels-emmy-e-1252107-2381069.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold tracking-wide">Lily Patel</h2>
                                <p className="dark:text-gray-800">As a busy professional, I rarely have the time to plan elaborate vacations,</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src="https://i.ibb.co/LSDVVSt/pexels-karolina-grabowska-6333664.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold tracking-wide">Michael Johnson</h2>
                                <p className="dark:text-gray-800">From the moment I stepped off the plane, I knew my vacation with </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src="https://i.ibb.co/1QJNwZJ/businessman-isolated-illustration-ai-generative-free-photo.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold tracking-wide">Sophia Chen</h2>
                                <p className="dark:text-gray-800">Traveling solo can be daunting, but Tourism vision made me feel safe, </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src="https://i.ibb.co/1rjNyR9/8472fd71dafa7bf2b65bd9b9168e661c.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold tracking-wide">James Thompson</h2>
                                <p className="dark:text-gray-800">Ive always been a bit skeptical about booking travel packages online, </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                        <img src="https://i.ibb.co/LDTntGc/depositphotos-237451860-stock-photo-a-businessman-stands-in-the.webp" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-xl font-semibold tracking-wide">Emily Davis</h2>
                                <p className="dark:text-gray-800">As a seasoned traveler, Ive explored various destinations around the globe, </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default ClientSection;