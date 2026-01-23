import { zhCN } from '@mui/material/locale';
import React, {useRef } from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ProductZoom = () => {

    const[slideIndex, setSlideIndex] = React.useState(0);
    const zoomSliderBig = useRef();
    const zoomSliderSml = useRef();

    const goto = (index) => {
        setSlideIndex(index);
        zoomSliderSml.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    };

    return (
        <>
            <div className='flex gap-3'>
                <div className='slider w-[15%]'>
                    <Swiper
                        ref = {zoomSliderSml}
                        slidesPerView={4}
                        direction={'vertical'}
                        spaceBetween={0}
                        navigation={false}
                        modules={[Navigation]}
                        className="zoomProductSliderThumbs  h-[500px] overflow-hidden"
                    >
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 0 ? 'opacity-' : 'opacity-40'}`} onClick={() => goto(0)}>
                                <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 1 ? 'opacity-' : 'opacity-40'}`} onClick={() => goto(1)}>
                                <img src="https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg" className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 2 ? 'opacity-' : 'opacity-40'}`} onClick={() => goto(2)}>
                                <img src="https://api.spicezgold.com/download/file_1734690981299_c56f7a00-e9c5-43dc-8288-190cfc0fef3e1714702040062RARERABBITMenComfortOpaqueCasualShirt3.jpg" className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group ${slideIndex === 3 ? 'opacity-' : 'opacity-40'}`} onClick={() => goto(3)}>
                                <img src="https://api.spicezgold.com/download/file_1734690981299_c56f7a00-e9c5-43dc-8288-190cfc0fef3e1714702040062RARERABBITMenComfortOpaqueCasualShirt3.jpg" className='w-full transition-all group-hover:scale-105' />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className='zoomContainer w-[85%] h-[500px] overflow-hidden rounded-md'>
                    <Swiper
                        ref = {zoomSliderBig}
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation={false}
                    >
                        <SwiperSlide>
                            <InnerImageZoom src={"https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg"} zoomScale={1} zoomType='hover' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom src={"https://api.spicezgold.com/download/file_1734690981297_23990e6b-d01e-40fd-bb6b-98198db544c01714702040162RARERABBITMenComfortOpaqueCasualShirt2.jpg"} zoomScale={1} zoomType='hover' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom src={"https://api.spicezgold.com/download/file_1734690981299_c56f7a00-e9c5-43dc-8288-190cfc0fef3e1714702040062RARERABBITMenComfortOpaqueCasualShirt3.jpg "} zoomScale={1} zoomType='hover' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <InnerImageZoom src={"https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg"} zoomScale={1} zoomType='hover' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default ProductZoom
