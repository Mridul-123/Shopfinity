import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Search from './../Search/index';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';
import { MyContext } from '../../App';
import { Button } from '@mui/material';
import { FaRegUser } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Header = () => {

    const context = useContext(MyContext)

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header className='bg-white'>
            <div className="top-strip py-2 h-10 border-b-[1px]" >
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col1 w-[50%]">
                            <p className="text-[12px] font-[500]"> Get up to 50% off new season styles. limited time only</p>
                        </div>

                        <div className='col2 flex items-center justify-end'>
                            <ul className='flex items-center gap-3'>
                                <li className='list-none'>
                                    <Link to='/home-center' className='text-[13px] link font-[500] transition'> Help Center</Link>
                                </li>
                                <li className='list-none'>
                                    <Link to='/order-tracking' className='text-[13px] link font-[500] transition'> Order Tracking</Link>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>

            <div className='header py-4 border-b-[1px]'>
                <div className='container flex items-center justify-between'>
                    <div className='col1 w-[25%]'>
                        <Link to={"/"}> <img src='/logo.jpg' /></Link>
                    </div>
                    <div className='col2 w-[45%]'>
                        <Search />
                    </div>

                    <div className='col3 w-[30%] flex items-center pl-7'>

                        <ul className='flex items-center justify-end gap-3 w-full'>
                            {
                                context.isLogin === false ? (<li className='list-none'>
                                    <Link to="/login" className='link transition text-[15px] font-[500]' >Login</Link> | <Link to="/register" className='link transition text-[15px] font-[500]'> Register</Link>
                                </li>)
                                    :
                                    (
                                        <>
                                            <Button className='!text-[#000] myAccountWrap flex items-center gap-3 cursor-pointer' onClick={handleClick}>
                                                <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1] '>
                                                    <FaRegUser className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                                                </Button>

                                                <div className='info flex flex-col' >
                                                    <h4 className=' leading-3 text-[14px] capitalize text-[rgba(0,0,0,0.6)] font-[500] pb-0 text-left justify-start'>Mridul Rawat</h4>
                                                    <span className='text-[13px] text-[rgba(0,0,0,0.6)] capitalize font-[400] text-left justify-start'>mridul.test@gmail.com</span>
                                                </div>
                                            </Button>

                                            <Menu
                                                anchorEl={anchorEl}
                                                id="account-menu"
                                                open={open}
                                                onClose={handleClose}
                                                onClick={handleClose}
                                                slotProps={{
                                                    paper: {
                                                        elevation: 0,
                                                        sx: {
                                                            overflow: 'visible',
                                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                            mt: 1.5,
                                                            '& .MuiAvatar-root': {
                                                                width: 32,
                                                                height: 32,
                                                                ml: -0.5,
                                                                mr: 1,
                                                            },
                                                            '&::before': {
                                                                content: '""',
                                                                display: 'block',
                                                                position: 'absolute',
                                                                top: 0,
                                                                right: 14,
                                                                width: 10,
                                                                height: 10,
                                                                bgcolor: 'background.paper',
                                                                transform: 'translateY(-50%) rotate(45deg)',
                                                                zIndex: 0,
                                                            },
                                                        },
                                                    },
                                                }}
                                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                            >
                                                <Link to='/my-account' className='w-full block'>
                                                    <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                                                        <FaRegUser /> <span className='text-[14px]'>My account</span>
                                                    </MenuItem>
                                                </Link>
                                                <Link to='/my-account' className='w-full block'>
                                                    <MenuItem onClick={handleClose} className='flex gap-2 !py-2' >
                                                        <IoBagCheckOutline className='text-[18px]' /> <span className='text-[14px]'>Orders</span>
                                                    </MenuItem>
                                                </Link>
                                                <Link to='/my-account' className='w-full block'>
                                                    <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                                                        <IoMdHeartEmpty className='text-[18px]' /><span className='text-[14px]'> My List </span>
                                                    </MenuItem>
                                                </Link>
                                                <Link to='/my-account' className='w-full block'>
                                                    <MenuItem onClick={handleClose} className='flex gap-2 !py-2'>
                                                        <IoIosLogOut className='text-[18px]' /> <span className='text-[14px]'>Logout</span>
                                                    </MenuItem>
                                                </Link>

                                            </Menu>
                                        </>
                                    )}

                            <li>
                                <Tooltip title="Compare">
                                    <IconButton aria-label="cart" >
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <IoGitCompareOutline />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>

                            </li>

                            <li>
                                <Tooltip title="Wishlist">
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <FaRegHeart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>

                            </li>
                            <li>
                                <Tooltip title="Cart">
                                    <IconButton aria-label="cart" onClick={() => context.setOpenCartPanel(true)}>
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <MdOutlineShoppingCart />
                                        </StyledBadge>
                                    </IconButton>
                                </Tooltip>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Navigation />

        </header>
    )
}

export default Header
