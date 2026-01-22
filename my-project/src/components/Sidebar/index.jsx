import React from 'react'
import CategoryCollapse from '../CategoryCollapse'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { Collapse } from 'react-collapse';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './style.css';
import { Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useState } from 'react';


const Sidebar = () => {

    const [isOpenCategoryFilter, SetIsOpenCategoryFilter] = useState(true);
    const [isOpenAvailFilter, SetIsOpenAvailFilter] = useState(true);
    const [isOpenSizeFilter, SetIsOpenSizeFilter] = useState(true);

    return (
        <aside className='sidebar py-1'>
            <div className='box'>
                <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>Shop By Category
                    <Button className='!text-[#000] !w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto' onClick={() => SetIsOpenCategoryFilter(!isOpenCategoryFilter)}>
                        {
                            isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />
                        }
                    </Button>
                </h3>
                <Collapse isOpened={isOpenCategoryFilter}>
                    <div className='scroll px-4 relative -left-[13px]'>
                        <FormControlLabel control={<Checkbox size='small' />} label="Fashion" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Electronics" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Bags" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Footwear" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Groceries" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Beauty" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Wellness" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Jewellery" className='w-full' />
                    </div>
                </Collapse>
            </div>
            <div className='box'>
                <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>Availability
                    <Button className='!text-[#000] !w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto' onClick={() => SetIsOpenAvailFilter(!isOpenAvailFilter)}>
                        {
                            isOpenAvailFilter === true ? <FaAngleUp /> : <FaAngleDown />
                        }
                    </Button>
                </h3>
                <Collapse isOpened={isOpenAvailFilter}>
                    <div className='scroll px-4 relative -left-[13px]'>
                        <FormControlLabel control={<Checkbox size='small' />} label="Available (17)" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="In Stock (10)" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Not Available (5)" className='w-full' />
                    </div>
                </Collapse>
            </div>
            <div className='box'>
                <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center pr-5'>Size
                    <Button className='!text-[#000] !w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto' onClick={() => SetIsOpenSizeFilter(!isOpenSizeFilter)}>
                        {
                            isOpenSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />
                        }
                    </Button>
                </h3>
                <Collapse isOpened={isOpenSizeFilter}>
                    <div className='scroll px-4 relative -left-[13px]'>
                        <FormControlLabel control={<Checkbox size='small' />} label="Small (17)" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Medium (10)" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="Large (5)" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="XL (5)" className='w-full' />
                        <FormControlLabel control={<Checkbox size='small' />} label="XXL (5)" className='w-full' />
                    </div>
                </Collapse>
            </div>

            <div className='box'>
                <div className='pb-4'>
                    <h3 className='w-full text-[16px] font-[600] flex items-center pr-5 mb-4' > Filter By Price
                    </h3>
                </div>
                <RangeSlider />
                <div className='flex justify-between items-center pt-4 pb-2 priceRange'>
                    <span className='text-[13px] flex-start'> From: <strong className='text-dark'>Rs: {100} </strong>
                    </span>
                    <span className='text-[13px] flex-end'> To: <strong className='text-dark'>Rs: {5000} </strong>
                    </span>
                </div>
            </div>

            <div className='box'>
                <div className='pb-3'>
                <h3 className='w-full mb-5 text-[16px] font-[600] flex items-center pr-5 mb-4' > Filter By Rating
                </h3>
                </div>
                <div className='w-full'>
                    <Rating name="size-small" defaultValue={5} size="small" readOnly />
                </div>

                <div className='w-full'>
                    <Rating name="size-small" defaultValue={4} size="small" readOnly />
                </div>
                <div className='w-full'>
                    <Rating name="size-small" defaultValue={3} size="small" readOnly />
                </div>
                <div className='w-full'>
                    <Rating name="size-small" defaultValue={2} size="small" readOnly />
                </div>
                <div className='w-full'>
                    <Rating name="size-small" defaultValue={1} size="small" readOnly />
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
