import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
//import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
//import 'swiper/css/scrollbar';

const Frases = () => {
  return (
    <>
      <div className='testimonials-area bg-img pt-80 pb-100 gray-bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-12'>
              <Swiper pagination={false} modules={[Navigation]} navigation={true} className="mySwiper"
                loop={true}
              >
                <SwiperSlide>
                  <div className='single-testimonial text-center'>
                    <div className='testimonial-img'>
                      <Image src="https://res.cloudinary.com/dxefwzl0v/image/upload/v1676043182/chifa/testi_uon9t7.png"
                        width={80}
                        height={75}
                        alt=''
                      />
                    </div>
                    <p>
                      Aportamos valor a la educación con base en nuestra investigación exhaustiva.
                    </p>
                    <h4>
                      AGROEDUCA
                    </h4>
                    <h3>
                      Equipo
                    </h3>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='single-testimonial text-center'>
                    <div className='testimonial-img'>
                      <Image src="https://res.cloudinary.com/dxefwzl0v/image/upload/v1676043182/chifa/testi_uon9t7.png"
                        width={80}
                        height={75}
                        alt=''
                      />
                    </div>
                    <p>
                      Generando innovación para mejorar la calidad docente.
                    </p>
                    <h4>
                      AGROEDUCA
                    </h4>
                    <h3>
                      Equipo
                    </h3>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Frases
