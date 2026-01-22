import React from 'react'
import HomeSlider from './../HomeSlider/index';
import Home from '../../Pages/Home';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Button } from '@mui/material';

const HomeBannerV2 = () => {
    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Pagination , Autoplay]}
                className="homeSliderV2"
            >
                <SwiperSlide>
                    <div className='item w-full rounded-md overflow-hidden relative'>
                        <img src="https://serviceapi.spicezgold.com/download/1756273096312_1737036773579_sample-1.jpg" />
                        <div className='info absolute top-0 -right-[100%] w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all opacity-0 duration-700'>
                            <h4 className='text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0'>Big Saving Days Sale</h4>
                            <h2 className='text-[35px] font-[700] w-full relative -right-[100%] opacity-0'>Women Solid Round Green T-Shirt</h2>
                            <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left mb-3 mt-3 relative -right-[100%] opacity-0'>Starting At Only <span className='text-[30px] font-[700]'>$59.00</span> </h3>

                            <div className='w-full relative -right-[100%] opacity-0 btn_'>
                                <Button className='btn-org'>SHOP NOW</Button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='item w-full rounded-md overflow-hidden'>
                        <img src="https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg" />
                        <div className='info absolute top-0 -right-[100%] w-[50%] h-[100%] z-50 p-8 flex items-center flex-col justify-center transition-all opacity-0 duration-700'>
                            <h4 className='text-[18px] font-[500] w-full text-left mb-3 relative -right-[100%] opacity-0'>Big Saving Days Sale</h4>
                            <h2 className='text-[35px] font-[700] w-full relative -right-[100%] opacity-0'>Buy Modern Chair In Black Color</h2>
                            <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left mb-3 mt-3 relative -right-[100%] opacity-0'>Starting At Only <span className='text-[30px] font-[700]'>$99.00</span> </h3>

                            <div className='w-full relative -right-[100%] opacity-0 btn_'>
                                <Button className='btn-org'>SHOP NOW</Button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default HomeBannerV2
