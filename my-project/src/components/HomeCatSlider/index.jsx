import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeCatSlider = () => {
  return (
    <div className='homeCatSlider pt-4 py-8' >
      <div className='container'>
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className='item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col '>
                <img src="cat1.png" className='w-[110px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col  '>
                <img src="https://api.spicezgold.com/download/file_1734525218436_ele.png" className='w-[110px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Electronics</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col  '>
                <img src="https://api.spicezgold.com/download/file_1734525231018_bag.png" className='w-[110px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Bags</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col  '>
                <img src="https://api.spicezgold.com/download/file_1734525239704_foot.png" className='w-[110px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Footwear</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col  '>
                <img src="https://api.spicezgold.com/download/file_1734525248057_gro.png" className='w-[110px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Groceries</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col  '>
                <img src="https://api.spicezgold.com/download/file_1734525255799_beauty.png" className='w-[110px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Beauty</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col  '>
                <img src="https://api.spicezgold.com/download/file_1734525275367_well.png" className='w-[110px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Wellness</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className='item py-7 px-3 bg-white rounded-lg text-center flex items-center justify-center flex-col  '>
                <img src="https://api.spicezgold.com/download/file_1734525286186_jw.png" className='w-[110px] transition-all' />
                <h3 className='text-[15px] font-[500] mt-3'>Jewellery</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>

      </div>
    </div>
  )
}

export default HomeCatSlider
