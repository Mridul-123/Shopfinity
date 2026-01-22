import React from 'react'
import { IoMdTime } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { Link } from 'react-router-dom';


const BlogItem = () => {
    return (
        <div className='blogItem group'>
            <div className='imgWrapper w-full overflow-hidden cursor-pointer rounded-md relative'>
                <img src="https://serviceapi.spicezgold.com/download/1741758993155_6-4.jpg" alt="blog image" className='w-full transition-all group-hover:scale-110 group-hover:rotate-1' />

                <span className='flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-[#ff5252] rounded-md p-1 text-[11px] font-[500] gap-1'><IoMdTime className='text-[18px]' /> 12 APRIL 2025
                </span>

            </div>
            
            <div className='info py-4'>
                <h2 className='text-[15px] font-[600] text-black'>
                    <Link to="/" className='link'>Sustainable living through cutting-edge prefabricated homes </Link>
                </h2>
                <p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nostrum quaerat atque assumenda...</p>

                <Link to="/" className=' link text-[14px] font-[500] flex items-center gap-1 py-4'>Read More <IoIosArrowForward /> </Link>

            </div>
        </div>
    )
}

export default BlogItem
