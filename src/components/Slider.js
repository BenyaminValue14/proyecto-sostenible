// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//import 'swiper/css/scrollbar';
import '../../styles/Slider.module.css'
import Image from 'next/image';

const Slider = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper"
        loop={true} autoplay={{delay: 5000, disableOnInteraction:false}}
      >
        <SwiperSlide>
            {/*<Image src='https://res.cloudinary.com/dxefwzl0v/image/upload/v1676043107/chifa/breadcrumb_jtw5du.jpg' alt=''
            layout='responsive'
            width={1920}
            height={470}
            />*/}
            <div className='slider-principal' style={{
              background: "url(https://res.cloudinary.com/dxefwzl0v/image/upload/v1695230301/education_project/edu1_b1gm4b.jpg) 0 0/100% 100%",
              width:"100%",
              maxWidth: "1360px",
              maxHeight: "400px",
              aspectRatio: "16/9",
              }}>
              <h2 className='slider-text'>Una solución digital dedicada a los docentes rurales</h2>
            </div>
        </SwiperSlide>
      
        <SwiperSlide>
            {/*<Image src='https://res.cloudinary.com/dxefwzl0v/image/upload/v1676517010/chifa/banner-chinese-3_vxrile.png' alt=''
            layout='responsive'
            width={1920}
            height={470}
            />*/}
            <div className='slider-principal' style={{
              background: "url(https://res.cloudinary.com/dxefwzl0v/image/upload/v1695230392/education_project/edu2_hlt9u9.jpg) 0 0/100% 100%",
              width:"100%",
              maxWidth: "1360px",
              maxHeight: "400px",
              aspectRatio: "16/9",
              }}>
              <h2 className='slider-text'>Una solución digital dedicada a los docentes rurales</h2>
              </div>
        </SwiperSlide>
        <SwiperSlide>
            {/*<Image src='https://res.cloudinary.com/dxefwzl0v/image/upload/v1676043107/chifa/breadcrumb_jtw5du.jpg' alt=''
            layout='responsive'
            width={1920}
            height={470}
            />*/}
            <div className='slider-principal' style={{
              background: "url(https://res.cloudinary.com/dxefwzl0v/image/upload/v1695230392/education_project/edu3_s1oxpl.jpg) 0 0/100% 100%",
              width:"100%",
              maxWidth: "1360px",
              maxHeight: "400px",
              aspectRatio: "16/9",
              }}>
               <h2 className='slider-text'>Una solución digital dedicada a los docentes rurales</h2>
              </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider
