import React from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from 'react-router';
import { Button } from '@mui/material';

const AccountSideBar = () => {
    return (
        <div className='card sticky shadow-md rounded-md bg-white top-[10px]'>
            <div className='w-full p-5 flex items-center justify-center flex-col border-b border-[rgba(0,0,0,0.2)]'>
                <div className='w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group'>
                    <img src="https://imgs.search.brave.com/4kVdoNgQ_pHRJsJi9Ilarwie6upyE99JQP2nHja2n2U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNDMw/Nzg4NC9wZXhlbHMt/cGhvdG8tNDMwNzg4/NC5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA" className='w-full h-full object-cover' />
                    <div className='overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center opacity-0 transition-all group-hover:opacity-100'>
                        <FaCloudUploadAlt className='text-[#fff] text-[25px]' />
                        <input type='file' className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />
                    </div>
                </div>
                <h3 className='pt-2 '>Mridul Rawat</h3>

                <h6 className='text-[13px] font-[500]'>mridul321@gmail.com</h6>
            </div>


            <ul className='list-none pb-5 pt-3 bg-[#f1f1f1] myAccountTabs'>
                <li className='w-full'>
                    <NavLink to='/my-account' exact={true} activeClassName='isActive' className='relative'>
                        <Button className='flex !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] items-center gap-2 w-full !rounded-none !font-bold'> <FaRegUser className='text-[15px]' />
                            My Profile</Button>
                    </NavLink>
                </li>
                <li className='w-full'>
                    <NavLink to='/my-list' exact={true} activeClassName='isActive' className='relative'>
                        <Button className='flex !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] items-center gap-2 w-full !rounded-none !font-bold'> <IoMdHeartEmpty className='text-[17px]' />
                            My List</Button>
                    </NavLink>
                </li>
                <li className='w-full'>
                    <NavLink to='/my-orders' exact={true} activeClassName='isActive' className='relative'>
                        <Button className='flex !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] items-center gap-2 w-full !rounded-none !font-bold'> <IoBagCheckOutline className='text-[17px]' />
                            My Orders</Button>
                    </NavLink>
                </li>
                <li className='w-full'>
                    <NavLink to='/logout' exact={true} activeClassName='isActive' className='relative'>
                        <Button className='flex !text-left !py-2 !px-5 !justify-start !capitalize !text-[rgba(0,0,0,0.8)] items-center gap-2 w-full !rounded-none !font-bold'> <IoIosLogOut className='text-[17px]' />
                            Logout</Button>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default AccountSideBar
