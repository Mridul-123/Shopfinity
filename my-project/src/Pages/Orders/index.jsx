import React, { useState } from 'react'
import AccountSideBar from '../../components/AccountSideBar'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { Button } from '@mui/material'
import Badge from '../../components/Badge';

const Orders = () => {

    const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);

    const isShowOrderedProduct = (index) => {
        if (isOpenOrderedProduct === 0) {
            setIsOpenOrderedProduct(null);
        }
        else {
            setIsOpenOrderedProduct(index);
        }
    }
    return (
        <section className='py-10 w-full'>
            <div className='container flex items-start gap-5 mx-auto'>
                <div className='col1 w-[20%]'>
                    <AccountSideBar />
                </div>

                <div className='col2 w-[80%]'>
                    <div className='shadow-md rounded-md bg-white'>
                        <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.1)]'>
                            <h2>My Orders</h2>
                            <p className='pt-0 pb-2'>There are <span className='font-bold text-[#ff5252]'> 2 </span>{" "}orders</p>

                            <div className='overflow-x-auto'>
                                <table className="w-full text-sm text-left rtl:text-right text-body pt-5">
                                    <thead className="text-sm text-heading">
                                        <tr>
                                            <th scope="col" class="px-6 py-3 font-semibold">
                                                &nbsp;
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Order Id
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Payment Id
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Phone Number
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Address
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Pincode
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Total Amount
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Total Amount
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Email
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Order Status
                                            </th>
                                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr class="bg-neutral-primary">
                                            <td className='px-6 py-4 font-[500]'>
                                                <Button className='!w-[35px] !h-[35px] !min-2-[40px] !rounded-full !bg-white' onClick={() => isShowOrderedProduct(0)}>
                                                    {
                                                        isOpenOrderedProduct === 0 ? <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' /> : <FaAngleDown leDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                                                    }
                                                </Button>
                                            </td>

                                            <td className="px-6 py-4 font-[500]">
                                                <span className='text-[#ff5252]'>678865771abe110ae012</span>
                                            </td>
                                            <td className="px-6 py-4 font-[500] text-[#ff5252]">
                                                pay_PTPoqEXvWQRpty8
                                            </td>
                                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                                MRIDUL RAWAT
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                9876543210
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                <span className='block w-[400px]'>
                                                    Satyam Industrial Estate, Aasmant Apts, Sr.No.1/4, Near Opp. SNDT College, Pune, Maharashtra 411004, India
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                110091
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                3800
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                mridul123@gmail.com
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                <span className='text-[#ff5252]'>678865771abe110ae012</span>
                                            </td>
                                            <td className="px-6 py-4 font-[500]">
                                                <Badge status='pending' />
                                            </td>
                                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                                2026-01-23
                                            </td>
                                        </tr>

                                        {
                                            isOpenOrderedProduct === 0 && (
                                                <tr>
                                                    <td className='pl-27' colSpan='6'>
                                                        <table className="w-full text-sm text-left rtl:text-right text-body pt-5">
                                                            <thead className="text-sm text-heading">
                                                                <tr>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Product Id
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Product Title
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Image
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Quantity
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Price
                                                                    </th>
                                                                    <th scope="col" className="px-6 py-3 whitespace-nowrap">
                                                                        Sub Total
                                                                    </th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>

                                                                <tr class="bg-neutral-primary">
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <span className='text-gray-600'>678865771abe110ae012</span>
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        Men Alias-N Regular Fit Spread Collar Shirt
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-[60%] h-[60px] rounded-md object-cover' />
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                                                        2
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        130.00
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        130.00
                                                                    </td>
                                                                </tr>
                                                                <tr class="bg-neutral-primary">
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <span className='text-gray-600'>678865771abe110ae012</span>
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        Men Alias-N Regular Fit Spread Collar Shirt
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        <img src="https://api.spicezgold.com/download/file_1734690981297_011618e4-4682-4123-be80-1fb7737d34ad1714702040213RARERABBITMenComfortOpaqueCasualShirt1.jpg" className='w-[60%] h-[60px] rounded-md object-cover' />
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500] whitespace-nowrap">
                                                                        2
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        130.00
                                                                    </td>
                                                                    <td className="px-6 py-4 font-[500]">
                                                                        130.00
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Orders
