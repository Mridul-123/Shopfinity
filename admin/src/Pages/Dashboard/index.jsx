import React from 'react'
import { useState } from 'react';
import DashboardBoxes from '../../Components/DashboardBoxes'
import { Button } from '@mui/material'
import { FaPlus } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Badge from './../../Components/Badge';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Progress from '../../Components/ProgressBar';
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import Tooltip from '@mui/material/Tooltip';
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { BiExport } from "react-icons/bi";


const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

const Dashboard = () => {

  const [categoryFilterVal, setCategoryFilterVal] = useState('');

  const handleChangeCatFilter = (event) => {
    setCategoryFilterVal(event.target.value);
  };

  const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);

  const isShowOrderedProduct = (index) => {
    if (isOpenOrderedProduct === 0) {
      setIsOpenOrderedProduct(null);
    }
    else {
      setIsOpenOrderedProduct(index);
    }
  }

  return <>
    <div className='w-full py-2 px-5 bg-[#f1faff] border border-[rgba(0,0,0,0.2)] flex items-center gap-8 mb-5 justify-between rounded-md'>

      <div className='info'>
        <h1 className='text-[30px] font-bold leading-10 mb-3'> Good Morning, <br /> Mridul </h1>
        <p>Here's What happening on your store today. See the statistics at once. </p>
        <br />
        <Button className='btn-blue !capitalize !rounded-md'><FaPlus className='mr-2 ' /> Add Product </Button>
      </div>

      <img src="https://imgs.search.brave.com/VoNSgz8znzmf4s02ZdEwtesOzwsrw8KunkrS55yO2bY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/emlsbGlvbmRlc2ln/bnMuY29tL2Jsb2cv/d3AtY29udGVudC91/cGxvYWRzL1BlcmZl/Y3QtRWNvbW1lcmNl/LVNhbGVzLUJhbm5l/ci5qcGc" className='w-[450px]' />
    </div>
    <DashboardBoxes />

    <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
      <div className='flex items-center justify-between px-5 py-5'>
        <h2 className='text-[20px] font-[600]'>Products <span className='font-[400] text-[14px]'>(Tailwind Css Table)</span>
        </h2>
      </div>

      <div className='flex items-center w-full pl-5 justify-between pr-2'>
        <div className='col w-[20%]'>
          <h4 className='text-[13px] font-[600] mb-2'>Category By</h4>

          <Select
            className='w-full'
            size='small'
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={categoryFilterVal}
            onChange={handleChangeCatFilter}
            label="Category"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Men</MenuItem>
            <MenuItem value={20}>Women</MenuItem>
            <MenuItem value={30}>Kids</MenuItem>
          </Select>

        </div>

        <div className='col w-[25%] ml-auto flex items-center gap-3'>
          <Button className=' btn btn-sm !bg-green-600 !text-white'>Export</Button>
          <Button className='btn-blue btn-sm'>Add Product</Button>
        </div>

      </div>

      <div className='relative overflow-x-auto mt-5 pb-5'>
        <table className="w-full text-sm text-left rtl:text-right text-body pt-5">
          <thead className="text-sm text-heading">
            <tr>
              <th scope="col" class="px-6 py-3" >
                <div className='w-[60px]'>
                  <Checkbox {...label} />
                </div>
              </th>
              <th scope="col" className="px-0 py-3 whitespace-nowrap">
                PRODUCT
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                CATEGORY
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                SUB CATEGORY
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                PRICE
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                SALES
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>

            <tr className='odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-[rgba(0,0,0,0.2)]'>
              <td className='px-6 py-2'>
                <div className='w-[60px]'>
                  <Checkbox {...label} size='small' />
                </div>
              </td>
              <td className='px-0 py-2'>
                <div className='flex items-center gap-4 w-[350px]'>
                  <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                    <Link to='/product/4321'>
                      <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" className='w-full group-hover:scale-105 transition-all' />
                    </Link>
                  </div>
                  <div className='info w-[75%]'>
                    <h3 className='text-[14px] font-[600] leading-4 hover:text-[#3872fa]'>
                      <Link to='/product/4321'>
                        Electronic Rubber Table | Lorem ipsum dolor sit | Lorem ipsum
                      </Link>
                    </h3>
                    <span className='text-[13px]'>
                      Books
                    </span>

                  </div>
                </div>
              </td>

              <td className='px-6 py-2'>Electronics</td>

              <td className='px-6 py-2'>Women</td>

              <td className='px-6 py-2'>
                <div className='flex gap-1 flex-col'>
                  <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>$68.00</span>
                  <span className='price text-[#3872fa] text-[15px] font-[600]'>$58.00</span>
                </div>
              </td>

              <td className='px-6 py-2'>
                <p className='text-[14px]'><span className='font-[600]'> 234 </span>sale</p>
                <Progress value={50} type='success' />
              </td>

              <td className='px-6 py-2'>
                <div className='flex items-center gap-1'>
                  <Tooltip title="Edit Product" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc] '>
                      <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>

                  <Tooltip title="View Product Details" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>

                  <Tooltip title="Remove Product" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                      <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>
                </div>
              </td>

            </tr>
            <tr className='odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-[rgba(0,0,0,0.2)]'>
              <td className='px-6 py-2'>
                <div className='w-[60px]'>
                  <Checkbox {...label} size='small' />
                </div>
              </td>
              <td className='px-0 py-2'>
                <div className='flex items-center gap-4 w-[350px]'>
                  <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                    <Link to='/product/4321'>
                      <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" className='w-full group-hover:scale-105 transition-all' />
                    </Link>
                  </div>
                  <div className='info w-[75%]'>
                    <h3 className='text-[14px] font-[600] leading-4 hover:text-[#3872fa]'>
                      <Link to='/product/4321'>
                        Electronic Rubber Table | Lorem ipsum dolor sit | Lorem ipsum
                      </Link>
                    </h3>
                    <span className='text-[13px]'>
                      Books
                    </span>

                  </div>
                </div>
              </td>

              <td className='px-6 py-2'>Electronics</td>

              <td className='px-6 py-2'>Women</td>

              <td className='px-6 py-2'>
                <div className='flex gap-1 flex-col'>
                  <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>$68.00</span>
                  <span className='price text-[#3872fa] text-[15px] font-[600]'>$58.00</span>
                </div>
              </td>

              <td className='px-6 py-2'>
                <p className='text-[14px]'><span className='font-[600]'> 234 </span>sale</p>
                <Progress value={50} type='success' />
              </td>

              <td className='px-6 py-2'>
                <div className='flex items-center gap-1'>
                  <Tooltip title="Edit Product" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc] '>
                      <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>

                  <Tooltip title="View Product Details" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>

                  <Tooltip title="Remove Product" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                      <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>
                </div>
              </td>

            </tr>
            <tr className='odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-[rgba(0,0,0,0.2)]'>
              <td className='px-6 py-2'>
                <div className='w-[60px]'>
                  <Checkbox {...label} size='small' />
                </div>
              </td>
              <td className='px-0 py-2'>
                <div className='flex items-center gap-4 w-[350px]'>
                  <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                    <Link to='/product/4321'>
                      <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" className='w-full group-hover:scale-105 transition-all' />
                    </Link>
                  </div>
                  <div className='info w-[75%]'>
                    <h3 className='text-[14px] font-[600] leading-4 hover:text-[#3872fa]'>
                      <Link to='/product/4321'>
                        Electronic Rubber Table | Lorem ipsum dolor sit | Lorem ipsum
                      </Link>
                    </h3>
                    <span className='text-[13px]'>
                      Books
                    </span>

                  </div>
                </div>
              </td>

              <td className='px-6 py-2'>Electronics</td>

              <td className='px-6 py-2'>Women</td>

              <td className='px-6 py-2'>
                <div className='flex gap-1 flex-col'>
                  <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>$68.00</span>
                  <span className='price text-[#3872fa] text-[15px] font-[600]'>$58.00</span>
                </div>
              </td>

              <td className='px-6 py-2'>
                <p className='text-[14px]'><span className='font-[600]'> 234 </span>sale</p>
                <Progress value={50} type='success' />
              </td>

              <td className='px-6 py-2'>
                <div className='flex items-center gap-1'>
                  <Tooltip title="Edit Product" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc] '>
                      <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>

                  <Tooltip title="View Product Details" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>

                  <Tooltip title="Remove Product" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                      <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>
                </div>
              </td>

            </tr>
            <tr className='odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-[rgba(0,0,0,0.2)]'>
              <td className='px-6 py-2'>
                <div className='w-[60px]'>
                  <Checkbox {...label} size='small' />
                </div>
              </td>
              <td className='px-0 py-2'>
                <div className='flex items-center gap-4 w-[350px]'>
                  <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                    <Link to='/product/4321'>
                      <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" className='w-full group-hover:scale-105 transition-all' />
                    </Link>
                  </div>
                  <div className='info w-[75%]'>
                    <h3 className='text-[14px] font-[600] leading-4 hover:text-[#3872fa]'>
                      <Link to='/product/4321'>
                        Electronic Rubber Table | Lorem ipsum dolor sit | Lorem ipsum
                      </Link>
                    </h3>
                    <span className='text-[13px]'>
                      Books
                    </span>

                  </div>
                </div>
              </td>

              <td className='px-6 py-2'>Electronics</td>

              <td className='px-6 py-2'>Women</td>

              <td className='px-6 py-2'>
                <div className='flex gap-1 flex-col'>
                  <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>$68.00</span>
                  <span className='price text-[#3872fa] text-[15px] font-[600]'>$58.00</span>
                </div>
              </td>

              <td className='px-6 py-2'>
                <p className='text-[14px]'><span className='font-[600]'> 234 </span>sale</p>
                <Progress value={50} type='success' />
              </td>

              <td className='px-6 py-2'>
                <div className='flex items-center gap-1'>
                  <Tooltip title="Edit Product" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc] '>
                      <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>

                  <Tooltip title="View Product Details" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>

                  <Tooltip title="Remove Product" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                      <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>
                </div>
              </td>

            </tr>
            <tr className='odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-[rgba(0,0,0,0.2)]'>
              <td className='px-6 py-2'>
                <div className='w-[60px]'>
                  <Checkbox {...label} size='small' />
                </div>
              </td>
              <td className='px-0 py-2'>
                <div className='flex items-center gap-4 w-[350px]'>
                  <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                    <Link to='/product/4321'>
                      <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" className='w-full group-hover:scale-105 transition-all' />
                    </Link>
                  </div>
                  <div className='info w-[75%]'>
                    <h3 className='text-[14px] font-[600] leading-4 hover:text-[#3872fa]'>
                      <Link to='/product/4321'>
                        Electronic Rubber Table | Lorem ipsum dolor sit | Lorem ipsum
                      </Link>
                    </h3>
                    <span className='text-[13px]'>
                      Books
                    </span>

                  </div>
                </div>
              </td>

              <td className='px-6 py-2'>Electronics</td>

              <td className='px-6 py-2'>Women</td>

              <td className='px-6 py-2'>
                <div className='flex gap-1 flex-col'>
                  <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>$68.00</span>
                  <span className='price text-[#3872fa] text-[15px] font-[600]'>$58.00</span>
                </div>
              </td>

              <td className='px-6 py-2'>
                <p className='text-[14px]'><span className='font-[600]'> 234 </span>sale</p>
                <Progress value={50} type='success' />
              </td>

              <td className='px-6 py-2'>
                <div className='flex items-center gap-1'>
                  <Tooltip title="Edit Product" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc] '>
                      <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>

                  <Tooltip title="View Product Details" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>

                  <Tooltip title="Remove Product" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                      <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>
                </div>
              </td>

            </tr>
            <tr className='odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-[rgba(0,0,0,0.2)]'>
              <td className='px-6 py-2'>
                <div className='w-[60px]'>
                  <Checkbox {...label} size='small' />
                </div>
              </td>
              <td className='px-0 py-2'>
                <div className='flex items-center gap-4 w-[350px]'>
                  <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                    <Link to='/product/4321'>
                      <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" className='w-full group-hover:scale-105 transition-all' />
                    </Link>
                  </div>
                  <div className='info w-[75%]'>
                    <h3 className='text-[14px] font-[600] leading-4 hover:text-[#3872fa]'>
                      <Link to='/product/4321'>
                        Electronic Rubber Table | Lorem ipsum dolor sit | Lorem ipsum
                      </Link>
                    </h3>
                    <span className='text-[13px]'>
                      Books
                    </span>

                  </div>
                </div>
              </td>

              <td className='px-6 py-2'>Electronics</td>

              <td className='px-6 py-2'>Women</td>

              <td className='px-6 py-2'>
                <div className='flex gap-1 flex-col'>
                  <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>$68.00</span>
                  <span className='price text-[#3872fa] text-[15px] font-[600]'>$58.00</span>
                </div>
              </td>

              <td className='px-6 py-2'>
                <p className='text-[14px]'><span className='font-[600]'> 234 </span>sale</p>
                <Progress value={50} type='success' />
              </td>

              <td className='px-6 py-2'>
                <div className='flex items-center gap-1'>
                  <Tooltip title="Edit Product" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc] '>
                      <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>

                  <Tooltip title="View Product Details" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>

                  <Tooltip title="Remove Product" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                      <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>
                </div>
              </td>

            </tr>
            <tr className='odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-[rgba(0,0,0,0.2)]'>
              <td className='px-6 py-2'>
                <div className='w-[60px]'>
                  <Checkbox {...label} size='small' />
                </div>
              </td>
              <td className='px-0 py-2'>
                <div className='flex items-center gap-4 w-[350px]'>
                  <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                    <Link to='/product/4321'>
                      <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" className='w-full group-hover:scale-105 transition-all' />
                    </Link>
                  </div>
                  <div className='info w-[75%]'>
                    <h3 className='text-[14px] font-[600] leading-4 hover:text-[#3872fa]'>
                      <Link to='/product/4321'>
                        Electronic Rubber Table | Lorem ipsum dolor sit | Lorem ipsum
                      </Link>
                    </h3>
                    <span className='text-[13px]'>
                      Books
                    </span>

                  </div>
                </div>
              </td>

              <td className='px-6 py-2'>Electronics</td>

              <td className='px-6 py-2'>Women</td>

              <td className='px-6 py-2'>
                <div className='flex gap-1 flex-col'>
                  <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>$68.00</span>
                  <span className='price text-[#3872fa] text-[15px] font-[600]'>$58.00</span>
                </div>
              </td>

              <td className='px-6 py-2'>
                <p className='text-[14px]'><span className='font-[600]'> 234 </span>sale</p>
                <Progress value={50} type='success' />
              </td>

              <td className='px-6 py-2'>
                <div className='flex items-center gap-1'>
                  <Tooltip title="Edit Product" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc] '>
                      <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>

                  <Tooltip title="View Product Details" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>

                  <Tooltip title="Remove Product" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                      <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>
                </div>
              </td>
            </tr>
            <tr className='odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-[rgba(0,0,0,0.2)]'>
              <td className='px-6 py-2'>
                <div className='w-[60px]'>
                  <Checkbox {...label} size='small' />
                </div>
              </td>
              <td className='px-0 py-2'>
                <div className='flex items-center gap-4 w-[350px]'>
                  <div className='img w-[65px] h-[65px] rounded-md overflow-hidden group'>
                    <Link to='/product/4321'>
                      <img src="https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/15.webp" className='w-full group-hover:scale-105 transition-all' />
                    </Link>
                  </div>
                  <div className='info w-[75%]'>
                    <h3 className='text-[14px] font-[600] leading-4 hover:text-[#3872fa]'>
                      <Link to='/product/4321'>
                        Electronic Rubber Table | Lorem ipsum dolor sit | Lorem ipsum
                      </Link>
                    </h3>
                    <span className='text-[13px]'>
                      Books
                    </span>

                  </div>
                </div>
              </td>

              <td className='px-6 py-2'>Electronics</td>

              <td className='px-6 py-2'>Women</td>

              <td className='px-6 py-2'>
                <div className='flex gap-1 flex-col'>
                  <span className='oldPrice line-through leading-3 text-gray-500 text-[15px] font-[500]'>$68.00</span>
                  <span className='price text-[#3872fa] text-[15px] font-[600]'>$58.00</span>
                </div>
              </td>

              <td className='px-6 py-2'>
                <p className='text-[14px]'><span className='font-[600]'> 234 </span>sale</p>
                <Progress value={50} type='success' />
              </td>

              <td className='px-6 py-2'>
                <div className='flex items-center gap-1'>
                  <Tooltip title="Edit Product" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc] '>
                      <AiOutlineEdit className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>

                  <Tooltip title="View Product Details" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                      <FaRegEye className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>

                  <Tooltip title="Remove Product" placement="top">
                    <Button className='!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]  !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#ccc]'>
                      <GoTrash className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                    </Button>
                  </Tooltip>
                </div>
              </td>

            </tr>
          </tbody>
        </table>
      </div>

      <div className='flex items-center justify-end pt-5 pb-5 px-4'>
        <Pagination count={10} color="primary" />
      </div>

    </div>


    <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
      <div className='flex items-center justify-between px-5 py-5'>
        <h2 className='text-[20px] font-[600]'>Recent Orders</h2>
      </div>

      <div className='relative overflow-x-auto mt-5 pb-5'>
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
                Email
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

            <tr class="bg-neutral-primary border-b border-[rgba(0,0,0,0.2)]">
              <td className='px-6 py-4 font-[500]'>
                <Button className='!w-[35px] !h-[35px] !min-2-[40px] !rounded-full !bg-white' onClick={() => isShowOrderedProduct(0)}>
                  {
                    isOpenOrderedProduct === 0 ? <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' /> : <FaAngleDown leDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                  }
                </Button>
              </td>

              <td className="px-6 py-4 font-[600] text-[#3872fa]">
                <span >678865771abe110ae012</span>
              </td>
              <td className="px-6 py-4 font-[600] text-[#3872fa]">
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
                <span >678865771abe110ae012</span>
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


            <tr class="bg-neutral-primary border-b border-[rgba(0,0,0,0.2)]">
              <td className='px-6 py-4 font-[500]'>
                <Button className='!w-[35px] !h-[35px] !min-2-[40px] !rounded-full !bg-white' onClick={() => isShowOrderedProduct(1)}>
                  {
                    isOpenOrderedProduct === 1 ? <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]' /> : <FaAngleDown leDown className='text-[16px] text-[rgba(0,0,0,0.7)]' />
                  }
                </Button>
              </td>

              <td className="px-6 py-4 font-[600] text-[#3872fa]">
                <span >678865771abe110ae012</span>
              </td>
              <td className="px-6 py-4 font-[600] text-[#3872fa]">
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
                <span >678865771abe110ae012</span>
              </td>
              <td className="px-6 py-4 font-[500]">
                <Badge status='pending' />
              </td>
              <td className="px-6 py-4 font-[500] whitespace-nowrap">
                2026-01-23
              </td>
            </tr>

            {
              isOpenOrderedProduct === 1 && (
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

  </>

}

export default Dashboard
