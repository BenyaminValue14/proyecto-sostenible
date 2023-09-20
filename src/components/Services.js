// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
//import 'swiper/css/navigation';
import 'swiper/css/pagination';
//import 'swiper/css/scrollbar';
import Image from 'next/image';

const Services = () => {
  return (
    <>
      <Swiper pagination={false} slidesPerView={4}  modules={[Pagination]} className="mySwiper"
       
        breakpoints={{
            320: {
                width: 268,
                slidesPerView: 1
            },
            768: {
                width: 768,
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                width: 1024,
                slidesPerView: 3,
                spaceBetween: 20
            },
            1200: {
                width:1200,
                slidesPerView: 3,
                spaceBetween: 30
            }
        }}
      >
        <SwiperSlide>
            <div className='slider-image'>
                <Image src='https://res.cloudinary.com/dxefwzl0v/image/upload/v1695241550/education_project/image-1_z7pxtb.jpg' alt=''
                fill={true}
                />
            </div>
            <div className='product-content text-left'>
                <div className='cart-hovera'>
                <h4 className='product-title'> <a>Plataforma de innovación enfocada en capacitación docente</a></h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider-image'>
                <Image src='https://res.cloudinary.com/dxefwzl0v/image/upload/v1695241550/education_project/image-3_jwcuuv.jpg' alt=''
                fill={true}
                />
                <span>-20%</span>
            </div>
            <div className='product-content text-left'>
                <div className='cart-hovera'>
                <h4 className='product-title'> <a>Material digital educativo</a></h4>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider-image'>
                <Image src='https://res.cloudinary.com/dxefwzl0v/image/upload/v1695241550/education_project/image-2_pfli2k.jpg' alt=''
                fill={true}
                />
            </div>
            <div className='product-content text-left'>
                <div className='cart-hovera'>
                <h4 className='product-title'> <a>Análisis del rendimiento de los alumnos en sedes rurales</a></h4>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Services
