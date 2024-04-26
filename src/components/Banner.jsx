import img1 from '../assets/images/image-10.jpg'
import img2 from '../assets/images/image-12.jpg'
import img3 from '../assets/images/image-13.jpg'
import img4 from '../assets/images/image-11.jpg'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import './styles.css';

// import required modules
import { Navigation, Autoplay, Pagination, A11y, EffectCards } from 'swiper/modules';
const Banner = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectCards, Autoplay]}
        spaceBetween={50}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="cards"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper">

        <SwiperSlide  >
          <h1 className='absolute text-6xl font-bold top-80 right-[9%]  text-white hidden 2xl:flex '>Maldives<span className='font-normal'>Last Minute</span></h1>
          <h1 className='absolute text-xl font-bold top-[400px] right-[34%]   text-primary hidden 2xl:flex '>20% off in May</h1>
          <h1 className='absolute  top-[445px] right-[36%]   btn hidden 2xl:flex rounded-none '>Subscribe</h1>
          <img className='w-full h-[750px] object-cover ' src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h1 className='absolute text-6xl  top-80 right-[40%]  text-white hidden 2xl:flex font-monoton '>Bast Hotels</h1>
          <h1 className='absolute text-xl  top-[400px] right-[48%]  text-white hidden 2xl:flex  '>Find your paradise</h1>
          <img className='w-full h-[750px] object-cover' src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h1 className='absolute text-6xl font-semibold top-80 right-[34%]  text-gray-100 hidden 2xl:flex  '>Explore Thai Jungle</h1>
          <img className='w-full h-[750px] object-cover' src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide><img className='w-full h-[750px] object-cover' src={img4} alt="" /></SwiperSlide>


      </Swiper>
    </>
  );
};

export default Banner;