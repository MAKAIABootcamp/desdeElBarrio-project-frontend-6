import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export const Slider = () => {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src='https://c.animaapp.com/Zgqnbjdg/img/image-4-3@2x.png' alt='Image1'  />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://c.animaapp.com/Q9CmjvVd/img/image-4-3@2x.png' alt='Image1' />
                </SwiperSlide>

                <SwiperSlide>
                    <img src='https://c.animaapp.com/Zgqnbjdg/img/image-4-2@2x.png' alt='Image1'  />
                </SwiperSlide>

                <SwiperSlide>
                    <img src='https://c.animaapp.com/Q9CmjvVd/img/image-4-2@2x.png' alt='Image1'  />
                </SwiperSlide>

                <SwiperSlide>
                    <img src='https://c.animaapp.com/Q9CmjvVd/img/image-4-1@2x.png' alt='Image1'  />
                </SwiperSlide>

                <SwiperSlide>
                    <img src='https://c.animaapp.com/Zgqnbjdg/img/image-4-2@2x.png' alt='Image1' style={{ width: "300px" }} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider