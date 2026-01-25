import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { BsFillBagCheckFill } from "react-icons/bs";


const Checkout = () => {
    return (
        <section className='py-10'>
            <div className='container flex items-start gap-5'>
                <div className='leftCol w-[70%]'>
                    <div className='card bg-white shadow-md p-5 rounded-md w-full'>
                        <h1>
                            Billing Details
                        </h1>
                        <form className='w-full pt-5'>
                            <div className='flex items-center gap-5 pb-5'>
                                <div className='col w-[50%]'>
                                    <TextField className='w-full' label="Full Name" variant="outlined" size='small' type='text' />
                                </div>
                                <div className='col w-[50%]'>
                                    <TextField className='w-full' label="Email" variant="outlined" size='small' type='email' />
                                </div>
                            </div>

                            <h6 className='text-[14p] font-[500] pb-3'>Street address *</h6>

                            <div className='flex items-center gap-5 pb-5'>
                                <div className='col w-[100%]'>
                                    <TextField className='w-full' label="House No. and Street Name " variant="outlined" size='small' type='text' />
                                </div>
                            </div>

                            <div className='flex items-center gap-5 pb-5'>
                                <div className='col w-[100%]'>
                                    <TextField className='w-full' label="Apartment, suite, unit, etc. (optional)" variant="outlined" size='small' type='text' />
                                </div>
                            </div>

                            <div className='flex items-center gap-5 pb-5'>
                                <div className='col w-[50%]'>
                                    <TextField className='w-full' label="Town / City *" variant="outlined" size='small' type='text' />
                                </div>
                                <div className='col w-[50%]'>
                                    <TextField className='w-full' label="State / Country *" variant="outlined" size='small' type='text' />
                                </div>
                            </div>

                            <h6 className='text-[14p] font-[500] pb-3'>Postal / Zip *</h6>

                            <div className='col w-[100%] pb-5'>
                                <TextField className='w-full' label="Zip Code" variant="outlined" size='small' type='text' />
                            </div>

                            <div className='flex items-center gap-5 pb-5'>
                                <div className='col w-[50%]'>
                                    <TextField className='w-full' label="Phone Number" variant="outlined" size='small' type='text' />
                                </div>
                                <div className='col w-[50%]'>
                                    <TextField className='w-full' label="Email Address" variant="outlined" size='small' type='email' />
                                </div>
                            </div>


                        </form>
                    </div>
                </div>

                <div className='rightCol w-[30%]'>
                    <div className='card bg-white shadow-md rounded-md p-5'>
                        <h2 className='pb-4'>Your Order</h2>
                        <div className='flex items-center justify-between py-2 border-t border-b border-[rgba(0,0,0,0.1)]'>
                            <span className='text-[14px] font-[600]'>Product</span>
                            <span className='text-[14px] font-[600]'>Subtotal</span>
                        </div>

                        <div className='scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-3'>
                            <div className='flex items-center justify-between py-2'>
                                <div className='part1 flex items-center gap-3'>
                                    <div className='img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                        <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-full transition-all group-hover:scale-105' />
                                    </div>
                                    <div className='info'>
                                        <h4 className='text-[14px]'>Men Alias-N Regular Fit Spread Collar Shirt</h4>
                                        <span className='text-[13px]'>Qty : 1</span>
                                    </div>
                                </div>
                                <span className='text-[14px] font-[500]'>$58.00</span>
                            </div>
                            <div className='flex items-center justify-between py-2'>
                                <div className='part1 flex items-center gap-3'>
                                    <div className='img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                        <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-full transition-all group-hover:scale-105' />
                                    </div>
                                    <div className='info'>
                                        <h4 className='text-[14px]'>Men Alias-N Regular Fit Spread Collar Shirt</h4>
                                        <span className='text-[13px]'>Qty : 1</span>
                                    </div>
                                </div>
                                <span className='text-[14px] font-[500]'>$58.00</span>
                            </div>
                            <div className='flex items-center justify-between py-2'>
                                <div className='part1 flex items-center gap-3'>
                                    <div className='img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                        <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-full transition-all group-hover:scale-105' />
                                    </div>
                                    <div className='info'>
                                        <h4 className='text-[14px]'>Men Alias-N Regular Fit Spread Collar Shirt</h4>
                                        <span className='text-[13px]'>Qty : 1</span>
                                    </div>
                                </div>
                                <span className='text-[14px] font-[500]'>$58.00</span>
                            </div>
                            <div className='flex items-center justify-between py-2'>
                                <div className='part1 flex items-center gap-3'>
                                    <div className='img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                        <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-full transition-all group-hover:scale-105' />
                                    </div>
                                    <div className='info'>
                                        <h4 className='text-[14px]'>Men Alias-N Regular Fit Spread Collar Shirt</h4>
                                        <span className='text-[13px]'>Qty : 1</span>
                                    </div>
                                </div>
                                <span className='text-[14px] font-[500]'>$58.00</span>
                            </div>
                            <div className='flex items-center justify-between py-2'>
                                <div className='part1 flex items-center gap-3'>
                                    <div className='img w-[50px] h-[50px] object-cover overflow-hidden rounded-md group cursor-pointer'>
                                        <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-full transition-all group-hover:scale-105' />
                                    </div>
                                    <div className='info'>
                                        <h4 className='text-[14px]'>Men Alias-N Regular Fit Spread Collar Shirt</h4>
                                        <span className='text-[13px]'>Qty : 1</span>
                                    </div>
                                </div>
                                <span className='text-[14px] font-[500]'>$58.00</span>
                            </div>
                        </div>

                        <div className='pt-5'>
                            <Button className='btn-org btn-lg w-full flex gap-2 items-center'> <BsFillBagCheckFill className='text-[20px]'/> Checkout</Button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout
