import React from 'react'
import QtyBox from '../../components/QtyBox';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';



const ProductDetailsComponent = () => {

    const [productActionIndex, setProductActionIndex] = React.useState(0);

    return (
        <>
            <h1 className='text-[23px] font-[600] mb-2'>Men Alias-N Regular Fit Spread Collar Shirt</h1>
            <div className='flex items-center gap-3'>
                <span className='text-gray-400 text-[13px]'>
                    Brands : <span className='font-[500] text-black opacity-75'>Rare Rabbit</span>
                </span>
                <Rating name="size-small" defaultValue={4} size="small" readOnly />
                <span className='text-[13px] cursor-pointer'> Review(5) </span>
            </div>

            <div className='flex items-center pt-4 gap-3'>
                <span className='oldPrice line-through text-gray-500 text-[20px] font-[500]'>%58.00</span>
                <span className='price text-[#ff5252] text-[20px] font-[600]'>%58.00</span>
                <span className='text-[14px] '>Available In Stock : <span className='text-green-600 text-[14px] font-bold'>147 Items</span> </span>
            </div>
            <p className='pt-3 pr-10 pb-5'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto voluptates eligendi, quibusdam, fugit debitis quod asperiores accusamus perferendis laudantium error hic. Nesciunt deleniti, vel consectetur laboriosam nihil assumenda ad, pariatur ex eaque amet repellendus similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, minima.
            </p>

            <div className='flex items-center gap-3'>
                <span className='text-[16px]'>Size : </span>
                <div className='flex items-center gap-1'>
                    <Button className={`!min-w-[40px] !text-[rgba(0,0,0,0.7)] !border-1 !border-[rgba(0,0,0,0.2)] ${productActionIndex === 0 ? '!bg-red-500 !text-white' : ''}`} onClick={() => setProductActionIndex(0)}>S</Button>
                    <Button className={`!min-w-[40px] !text-[rgba(0,0,0,0.7)] !border-1 !border-[rgba(0,0,0,0.2)] ${productActionIndex === 1 ? '!bg-red-400 !text-white' : ''}`} onClick={() => setProductActionIndex(1)}>M</Button>
                    <Button className={`!min-w-[40px] !text-[rgba(0,0,0,0.7)] !border-1 !border-[rgba(0,0,0,0.2)] ${productActionIndex === 2 ? '!bg-red-400 !text-white' : ''}`} onClick={() => setProductActionIndex(2)}>L</Button>
                    <Button className={`!min-w-[40px] !text-[rgba(0,0,0,0.7)] !border-1 !border-[rgba(0,0,0,0.2)] ${productActionIndex === 3 ? '!bg-red-400 !text-white' : ''}`} onClick={() => setProductActionIndex(3)}>XL</Button>
                </div>

            </div>

            <p className='text-[14px] pt-4 pb-2 text-[#000]'>Free Shipping (Est. Delivery Time 2-3 Days)</p>

            <div className='flex items-center pt-4 gap-4 py-4'>
                <div className='qtyBoxWrapper w-[70px]'>
                    <QtyBox />
                </div>

                <Button className='btn-org flex gap-2'>
                    <MdOutlineShoppingCart className='text-[22px]' />
                    Add to Cart
                </Button>

            </div>

            <div className='flex items-center gap-4 pt-4'>
                <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[500]'><FaRegHeart className='text-[18px]' /> Add to Wishlist</span>
                <span className='flex items-center gap-2 text-[15px] link cursor-pointer font-[500]'><IoGitCompareOutline className='text-[18px]' /> Add to Compare</span>
            </div>
        </>
    )
}

export default ProductDetailsComponent
