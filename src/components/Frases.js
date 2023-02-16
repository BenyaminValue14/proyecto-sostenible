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
              <Swiper pagination={false} modules={[Pagination]} className="mySwiper"
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
                      La juventud es corta. Cuida de ti alimentándote de forma sana, para que disfrutes hasta en la vejez, que es larga.
                    </p>
                    <h4>
                      Anonimo
                    </h4>
                    <h3>
                      Marketer
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
                      La juventud es corta. Cuida de ti alimentándote de forma sana, para que disfrutes hasta en la vejez, que es larga.
                    </p>
                    <h4>
                      Anonimo
                    </h4>
                    <h3>
                      Marketer
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
