import React from 'react'
import BannerBox from './../BannerBox/index';
import "../BannerBoxV2/style.css";
import { Link } from 'react-router-dom';

const BannerBoxV2 = (props) => {
    return (
        <div className='bannerBoxV2 w-full rounded-md overflow-hidden group relative'>
            <img src={props.image} className='w-full transition-all duration-150 group-hover:scale-105' />
            <div className={`info absolute p-5 top-0 ${props.info === 'left' ? 'left-0' : 'right-0'} w-[70%] h-[100%] z-50 flex items-center justify-center flex-col gap-2 ${props.info === 'left ' ? '' : 'pl-12'}`}>
                <h2 className='text-[16px] font-[600]'>Buy Men Bags With Low Price</h2>
                <span className='text-[20px] font-[700] w-full'>$10.00</span>
                <div className='w-full'>
                    <Link to='/' className='text-[15px] font-[600] link'>SHOW NOW</Link>
                </div>
            </div>
        </div>
    )
}

export default BannerBoxV2
