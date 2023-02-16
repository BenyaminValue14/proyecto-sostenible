// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
//import 'swiper/css/navigation';
import 'swiper/css/pagination';
//import 'swiper/css/scrollbar';
import Image from 'next/image';

const Products = () => {
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
                slidesPerView: 4,
                spaceBetween: 30
            }
        }}
      >
        <SwiperSlide>
            <div className='slider-image'>
                <Image src='https://res.cloudinary.com/dxefwzl0v/image/upload/v1676083649/chifa/products/263cfd67205e1228ff063b8c1fbbd934_kbaznj.jpg' alt=''
                fill={true}
                />
            </div>
            <div className='product-content text-left'>
                <div className='cart-hovera'>
                <h4 className='product-title'> <a>Salteado de acelgas y tofu</a></h4>
                </div>
                <div className="product-price-wrapper">
                    <span>S/. 20.90 -</span>
                    <span className="product-price-old"> S/. 30.00 </span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider-image'>
                <Image src='https://res.cloudinary.com/dxefwzl0v/image/upload/v1676083657/chifa/products/Dumpling-1536x1024_ipxkfb.jpg' alt=''
                fill={true}
                />
                <span>-20%</span>
            </div>
            <div className='product-content text-left'>
                <div className='cart-hovera'>
                <h4 className='product-title'> <a>Gyosas de Vegetales con proteína de Soya</a></h4>
                </div>
                <div className="product-price-wrapper">
                    <span>S/. 24.90 -</span>
                    <span className="product-price-old"> S/. 30.00 </span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider-image'>
                <Image src='https://res.cloudinary.com/dxefwzl0v/image/upload/v1676083630/chifa/products/Sweet-Sour-Tofu_go9wsq.jpg' alt=''
                fill={true}
                />
            </div>
            <div className='product-content text-left'>
                <div className='cart-hovera'>
                <h4 className='product-title'> <a>Tofu agridulce con verduras</a></h4>
                </div>
                <div className="product-price-wrapper">
                    <span>S/. 20.90 -</span>
                    <span className="product-price-old"> S/. 30.00 </span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider-image'>
                <Image src='https://res.cloudinary.com/dxefwzl0v/image/upload/v1676083630/chifa/products/Chaufa-vegano_fuyqvv.jpg' alt=''
                fill={true}
                />
                <span>-20%</span>
            </div>
            <div className='product-content text-left'>
                <div className='cart-hovera'>
                <h4 className='product-title'> <a>Chaufa vegano</a></h4>
                </div>
                <div className="product-price-wrapper">
                <span>S/. 20.90 -</span>
                    <span className="product-price-old"> S/. 30.00 </span>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider-image'>
                <Image src='https://res.cloudinary.com/dxefwzl0v/image/upload/v1676083679/chifa/products/sopa-wonton-con-tempeh-de-garbanzos_b2bba30d_800x800_zpsktw.jpg' alt=''
                fill={true}
                />
            </div>
            <div className='product-content text-left'>
                <div className='cart-hovera'>
                <h4 className='product-title'> <a>Sopa wantan rellenas de tempeh de garbanzos</a></h4>
                </div>
                <div className="product-price-wrapper">
                <span>S/. 26.90 -</span>
                <span className="product-price-old"> S/. 30.00 </span>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Products
