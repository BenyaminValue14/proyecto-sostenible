// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
//import 'swiper/css/navigation';
import 'swiper/css/pagination';
//import 'swiper/css/scrollbar';
import '../../styles/Slider.module.css'
import Image from 'next/image';

const Slider = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
            {/*<Image src='https://res.cloudinary.com/dxefwzl0v/image/upload/v1676043107/chifa/breadcrumb_jtw5du.jpg' alt=''
            layout='responsive'
            width={1920}
            height={470}
            />*/}
            <img 
            src='https://res.cloudinary.com/dxefwzl0v/image/upload/v1676043107/chifa/breadcrumb_jtw5du.jpg'
             alt=''                 
             />
            <div className='text-slider'>
                <p>Holaaa</p>
                <h1>como te va</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            {/*<Image src='https://res.cloudinary.com/dxefwzl0v/image/upload/v1676043107/chifa/breadcrumb_jtw5du.jpg' alt=''
            layout='responsive'
            width={1920}
            height={470}
            />*/}
            <img 
            src='https://res.cloudinary.com/dxefwzl0v/image/upload/v1676043107/chifa/breadcrumb_jtw5du.jpg'
             alt=''                 
             />
            <div className='text-slider'>
                <p>Holaaa</p>
                <h1>como te va</h1>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            {/*<Image src='https://res.cloudinary.com/dxefwzl0v/image/upload/v1676043107/chifa/breadcrumb_jtw5du.jpg' alt=''
            layout='responsive'
            width={1920}
            height={470}
            />*/}
            <img 
            src='https://res.cloudinary.com/dxefwzl0v/image/upload/v1676043107/chifa/breadcrumb_jtw5du.jpg'
             alt=''                 
             />
            <div className='text-slider'>
                <p>Holaaa</p>
                <h1>como te va</h1>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider