import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

const HomeSlider = () => {
    return (
        <div className='homeSlider py-4' >
            <div className='container'>
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="sliderHome">

                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="slider1.jpg" alt="Banner slide" className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="slider2.jpg" alt="Banner slide" className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>

                            <img src="slider3.jpg" alt="Banner slide" className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="slider4.jpg" alt="Banner slide" className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="slider5.jpg" alt="Banner slide" className='w-full' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HomeSlider
