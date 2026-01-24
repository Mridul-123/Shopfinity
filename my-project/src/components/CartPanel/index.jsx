import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Button } from '@mui/material';

const CartPanel = () => {
    return (
        <>
            <div className='scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4'>
                <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
                        <Link to='/product/1000' className='block group'> 
                        <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-full group-hover:scale-105' />
                        </Link>
                    </div>

                    <div className='info w-[75%] pr-5 relative'>
                        <h4 className='text-[14px] font-[500]'> 
                            <Link to='/product/1000' className='link transition-all'>
                            Men Alias-N Regular Fit Spread Collar Shirt
                            </Link>
                        </h4>
                        <p className='flex items-center gap-5 pt-2 pb-2'>
                            <span>
                                Qty : <span>2</span>
                            </span>
                            <span className='text-[#ff5252] font-bold'>Price : $50</span>
                        </p>

                        <MdOutlineDeleteOutline className='absolute top-[10px] right-[0px] cursor-pointer text-[20px] link transition-all' />

                    </div>
                </div>

                <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4 pt-4'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
                        <Link to='/product/1000' className='block group'> 
                        <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-full group-hover:scale-105' />
                        </Link>
                    </div>

                    <div className='info w-[75%] pr-5 relative'>
                        <h4 className='text-[14px] font-[500]'> 
                            <Link to='/product/1000' className='link transition-all'>
                            Men Alias-N Regular Fit Spread Collar Shirt
                            </Link>
                        </h4>
                        <p className='flex items-center gap-5 pt-2 pb-2'>
                            <span>
                                Qty : <span>2</span>
                            </span>
                            <span className='text-[#ff5252] font-bold'>Price : $50</span>
                        </p>

                        <MdOutlineDeleteOutline className='absolute top-[10px] right-[0px] cursor-pointer text-[20px] link transition-all' />

                    </div>
                </div>
               <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4 pt-4'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
                        <Link to='/product/1000' className='block group'> 
                        <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-full group-hover:scale-105' />
                        </Link>
                    </div>

                    <div className='info w-[75%] pr-5 relative'>
                        <h4 className='text-[14px] font-[500]'> 
                            <Link to='/product/1000' className='link transition-all'>
                            Men Alias-N Regular Fit Spread Collar Shirt
                            </Link>
                        </h4>
                        <p className='flex items-center gap-5 pt-2 pb-2'>
                            <span>
                                Qty : <span>2</span>
                            </span>
                            <span className='text-[#ff5252] font-bold'>Price : $50</span>
                        </p>

                        <MdOutlineDeleteOutline className='absolute top-[10px] right-[0px] cursor-pointer text-[20px] link transition-all' />

                    </div>
                </div>
                <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4 pt-4'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
                        <Link to='/product/1000' className='block group'> 
                        <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-full group-hover:scale-105' />
                        </Link>
                    </div>

                    <div className='info w-[75%] pr-5 relative'>
                        <h4 className='text-[14px] font-[500]'> 
                            <Link to='/product/1000' className='link transition-all'>
                            Men Alias-N Regular Fit Spread Collar Shirt
                            </Link>
                        </h4>
                        <p className='flex items-center gap-5 pt-2 pb-2'>
                            <span>
                                Qty : <span>2</span>
                            </span>
                            <span className='text-[#ff5252] font-bold'>Price : $50</span>
                        </p>

                        <MdOutlineDeleteOutline className='absolute top-[10px] right-[0px] cursor-pointer text-[20px] link transition-all' />

                    </div>
                </div>
                <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4 pt-4'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
                        <Link to='/product/1000' className='block group'> 
                        <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-full group-hover:scale-105' />
                        </Link>
                    </div>

                    <div className='info w-[75%] pr-5 relative'>
                        <h4 className='text-[14px] font-[500]'> 
                            <Link to='/product/1000' className='link transition-all'>
                            Men Alias-N Regular Fit Spread Collar Shirt
                            </Link>
                        </h4>
                        <p className='flex items-center gap-5 pt-2 pb-2'>
                            <span>
                                Qty : <span>2</span>
                            </span>
                            <span className='text-[#ff5252] font-bold'>Price : $50</span>
                        </p>

                        <MdOutlineDeleteOutline className='absolute top-[10px] right-[0px] cursor-pointer text-[20px] link transition-all' />

                    </div>
                </div>
                <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4 pt-4'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
                        <Link to='/product/1000' className='block group'> 
                        <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-full group-hover:scale-105' />
                        </Link>
                    </div>

                    <div className='info w-[75%] pr-5 relative'>
                        <h4 className='text-[14px] font-[500]'> 
                            <Link to='/product/1000' className='link transition-all'>
                            Men Alias-N Regular Fit Spread Collar Shirt
                            </Link>
                        </h4>
                        <p className='flex items-center gap-5 pt-2 pb-2'>
                            <span>
                                Qty : <span>2</span>
                            </span>
                            <span className='text-[#ff5252] font-bold'>Price : $50</span>
                        </p>

                        <MdOutlineDeleteOutline className='absolute top-[10px] right-[0px] cursor-pointer text-[20px] link transition-all' />

                    </div>
                </div>
            </div>

            <br />

            <div className='bottomSec absolute bottom-[10px] left-[10px] w-full pr-5' >
                <div className='bottomInfo py-2 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col'>
                    <div className='flex items-center justify-between w-full pl-3 pr-3'>
                        <span className='font-[14px] font-[600]'>1 item</span>
                        <span className='font-bold text-[#ff5252]'>$300.00</span>
                    </div>
                    <div className='flex items-center justify-between w-full pl-3 pr-3'>
                        <span className='font-[14px] font-[600]'>Shipping</span>
                        <span className='font-bold text-[#ff5252]'>$8.00</span>
                    </div>
                </div>

                <div className='bottomInfo py-2 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col'>
                    <div className='flex items-center justify-between w-full pl-3 pr-3'>
                        <span className='font-[14px] font-[600]'>Total(tax excl.)</span>
                        <span className='font-bold text-[#ff5252]'>$308.00</span>
                    </div>
                    <div className='flex items-center justify-between w-full pl-3 pr-3'>
                        <span className='font-[14px] font-[600]'>Total(tax incl.)</span>
                        <span className='font-bold text-[#ff5252]'>$308.00</span>
                    </div>
                    <div className='flex items-center justify-between w-full pl-3 pr-3'>
                        <span className='font-[14px] font-[600]'>Taxes : </span>
                        <span className='font-bold text-[#ff5252]'>$0.00</span>
                    </div>

                    <br />

                    <div className='flex items-center justify-between w-full gap-5 pr-4 pl-4'>
                        <Link to='/cart' className='w-[50%] d-block '> <Button className='btn-org btn-lg w-full '>View Cart</Button> </Link>
                        <Link to='/checkout' className='w-[50%] d-block '> <Button className='btn-org btn-lg w-full '>Checkout</Button> </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPanel
