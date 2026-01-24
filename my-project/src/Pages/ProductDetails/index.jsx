import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import ProductsSlider from '../../components/ProductsSlider';
import ProductDetailsComponent from '../../components/ProductDetails';

const ProductDetails = () => {
    const [activeTab, setActiveTab] = React.useState(0);


    return (
        <>
            <div className='py-3'>
                <div className='container'>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/" className='link transition'>
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/"
                            className='link transition'
                        >
                            Fashion
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            className='link transition'
                        >
                            Men Alias-N Regular Fit Spread Collar Shirt
                        </Link>
                    </Breadcrumbs>
                </div>
            </div>

            <section className='bg-white py-5'>
                <div className='container flex gap-8 items-center'>
                    <div className='productZoomContainer w-[40%]'>
                        <ProductZoom />
                    </div>
                    <div className='productContent w-[60%] pr-10 pl-10'>
                       <ProductDetailsComponent />
                    </div>
                </div>

                <div className='container pt-10'>
                    <div className='flex items-center gap-8 pb-5'>
                        <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 0 ? 'text-[#ff5252]' : ''}`} onClick={() => { setActiveTab(0) }}>Description
                        </span>
                        <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 1 ? 'text-[#ff5252]' : ''}`} onClick={() => { setActiveTab(1) }}>Product Details
                        </span>
                        <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab === 2 ? 'text-[#ff5252]' : ''}`} onClick={() => { setActiveTab(2) }}>Reviews (5)
                        </span>
                    </div>

                    {
                        activeTab === 0 && (
                            <div className='shadow-md w-full py-5 px-8 rounded-md'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac</p>

                                <h4 className='pb-3 pt-3'>Lightweight Design</h4>

                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam, ipsam impedit eligendi illo cum. Sapiente hic quidem iure, pariatur culpa ea quae odit repudiandae eaque consequuntur assumenda esse inventore!</p>

                                <h4 className='pb-3 pt-3'>Lightweight Design</h4>

                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam, ipsam impedit eligendi illo cum. Sapiente hic quidem iure, pariatur culpa ea quae odit repudiandae eaque consequuntur assumenda esse inventore!</p>

                                <h4 className='pb-3 pt-3'>Lightweight Design</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ullam, ipsam impedit eligendi illo cum. Sapiente hic quidem iure, pariatur culpa ea quae odit repudiandae eaque consequuntur assumenda esse inventore!</p>
                            </div>
                        )
                    }

                    {
                        activeTab === 1 && (
                            <div className='shadow-md w-full py-5 px-8 rounded-md'>
                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-sm text-left rtl:text-right text-body">
                                        <thead className="text-sm text-heading">
                                            <tr>
                                                <th scope="col" class="px-6 py-3 font-semibold">
                                                    Product name
                                                </th>
                                                <th scope="col" class="px-6 py-3 font-semibold">
                                                    Color
                                                </th>
                                                <th scope="col" class="px-6 py-3 font-semibold">
                                                    Category
                                                </th>
                                                <th scope="col" class="px-6 py-3 font-semibold">
                                                    Price
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-neutral-primary">
                                                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                                    Apple MacBook Pro 17"
                                                </th>
                                                <td class="px-6 py-4">
                                                    Silver
                                                </td>
                                                <td class="px-6 py-4">
                                                    Laptop
                                                </td>
                                                <td class="px-6 py-4">
                                                    $2999
                                                </td>
                                            </tr>
                                            <tr class="bg-neutral-primary">
                                                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                                    Microsoft Surface Pro
                                                </th>
                                                <td class="px-6 py-4">
                                                    White
                                                </td>
                                                <td class="px-6 py-4">
                                                    Laptop PC
                                                </td>
                                                <td class="px-6 py-4">
                                                    $1999
                                                </td>
                                            </tr>
                                            <tr class="bg-neutral-primary">
                                                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                                    Magic Mouse 2
                                                </th>
                                                <td class="px-6 py-4">
                                                    Black
                                                </td>
                                                <td class="px-6 py-4">
                                                    Accessories
                                                </td>
                                                <td class="px-6 py-4">
                                                    $99
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                    {
                        activeTab === 2 && (
                            <div className='shadow-md w-[80%] py-5 px-8 rounded-md'>
                                <div className='w-full productReviewContainer'>
                                    <h2 className='text-[18px]'>Customer questions & answers </h2>

                                    <div className='reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden pt-5 pr-5'>
                                        <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                                            <div className='info w-[60%] flex items-center gap-3'>
                                                <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                                    <img src="https://imgs.search.brave.com/UkHJOwTX0nKoySCfxp6BoUWMMnX3jbMzZ5f8d7UvElo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzMwLzQ0LzQy/LzM2MF9GXzkzMDQ0/NDI5M19NQXVRVWEw/ZFZIdDlVZ0JwWW1S/Qzh2N0FpaDRWTUw0/Yy5qcGc" className='w-full' />
                                                </div>

                                                <div className='w-[80%]'>
                                                    <h4 className='text-[16px]'>Mridul Rawat</h4>
                                                    <h5 className='text-[13px] pb-0'>2026-01-01</h5>
                                                    <p className='pb-0 pt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat, sunt excepturi fugit aliquid accusantium eius quidem rerum similique, dolores in voluptatem temporibus.</p>
                                                </div>
                                            </div>
                                            <Rating name="size-small" defaultValue={5} readOnly />

                                        </div>
                                        <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                                            <div className='info w-[60%] flex items-center gap-3'>
                                                <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                                    <img src="https://imgs.search.brave.com/UkHJOwTX0nKoySCfxp6BoUWMMnX3jbMzZ5f8d7UvElo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzMwLzQ0LzQy/LzM2MF9GXzkzMDQ0/NDI5M19NQXVRVWEw/ZFZIdDlVZ0JwWW1S/Qzh2N0FpaDRWTUw0/Yy5qcGc" className='w-full' />
                                                </div>

                                                <div className='w-[80%]'>
                                                    <h4 className='text-[16px]'>Mridul Rawat</h4>
                                                    <h5 className='text-[13px] pb-0'>2026-01-01</h5>
                                                    <p className='pb-0 pt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat, sunt excepturi fugit aliquid accusantium eius quidem rerum similique, dolores in voluptatem temporibus.</p>
                                                </div>
                                            </div>
                                            <Rating name="size-small" defaultValue={5} readOnly />

                                        </div>
                                        <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                                            <div className='info w-[60%] flex items-center gap-3'>
                                                <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                                    <img src="https://imgs.search.brave.com/UkHJOwTX0nKoySCfxp6BoUWMMnX3jbMzZ5f8d7UvElo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzMwLzQ0LzQy/LzM2MF9GXzkzMDQ0/NDI5M19NQXVRVWEw/ZFZIdDlVZ0JwWW1S/Qzh2N0FpaDRWTUw0/Yy5qcGc" className='w-full' />
                                                </div>

                                                <div className='w-[80%]'>
                                                    <h4 className='text-[16px]'>Mridul Rawat</h4>
                                                    <h5 className='text-[13px] pb-0'>2026-01-01</h5>
                                                    <p className='pb-0 pt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat, sunt excepturi fugit aliquid accusantium eius quidem rerum similique, dolores in voluptatem temporibus.</p>
                                                </div>
                                            </div>
                                            <Rating name="size-small" defaultValue={5} readOnly />

                                        </div>

                                        <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                                            <div className='info w-[60%] flex items-center gap-3'>
                                                <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                                    <img src="https://imgs.search.brave.com/UkHJOwTX0nKoySCfxp6BoUWMMnX3jbMzZ5f8d7UvElo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA5LzMwLzQ0LzQy/LzM2MF9GXzkzMDQ0/NDI5M19NQXVRVWEw/ZFZIdDlVZ0JwWW1S/Qzh2N0FpaDRWTUw0/Yy5qcGc" className='w-full' />
                                                </div>

                                                <div className='w-[80%]'>
                                                    <h4 className='text-[16px]'>Mridul Rawat</h4>
                                                    <h5 className='text-[13px] pb-0'>2026-01-01</h5>
                                                    <p className='pb-0 pt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta placeat, sunt excepturi fugit aliquid accusantium eius quidem rerum similique, dolores in voluptatem temporibus.</p>
                                                </div>
                                            </div>
                                            <Rating name="size-small" defaultValue={5} readOnly />

                                        </div>
                                    </div>

                                    <br />
                                    <div className='reviewForm bg-[#fafafa] p-4 rounded-md'>
                                        <h2 className='text-[18px]'>Add a review</h2>
                                        <form className='w-full pt-5'>
                                            <TextField
                                                id="outlined-multiline-flexible"
                                                label="Write a review"
                                                className='w-full'
                                                multiline
                                                rows={5}
                                            />
                                            <br /><br />
                                            <Rating name="size-small" defaultValue={5} />

                                            <div className='flex items-center pt-5'>
                                                <Button className='btn-org'>Submit Review</Button>
                                            </div>

                                        </form>
                                    </div>

                                </div>
                            </div>
                        )
                    }

                </div>

                <div className='container pt-8'>
                    <h2 className='text-[20px] font-[600] pb-1'>Related Products</h2>
                    <ProductsSlider items={6} />
                </div>
            </section>
        </>
    )
}

export default ProductDetails
