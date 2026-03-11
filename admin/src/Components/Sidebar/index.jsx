import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { RxDashboard } from "react-icons/rx";
import { FaRegImage } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiProductHuntLine } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from 'react-collapse';
import { MyContext } from '../../App';




const Sidebar = () => {

  const [subMenuIndex, setSubMenuIndex] = useState(null)
  const isOpenSubmenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null)
    } else {
      setSubMenuIndex(index)
    }
  }

  const context = useContext(MyContext)


  return (
    <div className={`sidebar fixed top-0 left-0 bg-[#fff]  h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-4 w-[${context.isSidebarOpen===true ? '18%' : '0px'}]`}>
      <div className='py-2 w-full '>
        <Link to='/'>
          <img src="https://ecme-react.themenate.net/img/logo/logo-light-full.png" className='w-[120px]' />
        </Link>
      </div>

      <ul className='pt-4'>
        <li>
          <Link to='/'>
          <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'>
            <RxDashboard className='text-[18px]' /> <span>
              Dashboard
            </span>
          </Button>
          </Link>
        </li>
        <li>
          <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]' onClick={() => isOpenSubmenu(1)}>
            <FaRegImage className='text-[18px]' /> <span>
              Home Slides
            </span>
            <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center' >
              <FaAngleDown className={`transition-all ${subMenuIndex === 1 ? 'rotate-180 ' : ' '}` }/>
            </span>
          </Button>


          <Collapse isOpened={subMenuIndex === 1 ? true : false}>
            <ul>
              <li>
                <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3'> <span className='block h-[5px] w-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Home Banner Slides List</Button>
              </li>
              <li>
                <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3'> <span className='block h-[5px] w-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Add Home Banner Slides</Button>
              </li>
            </ul>
          </Collapse>


        </li>
        <li>
          <Link to='/users'>
          <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'>
            <FiUsers className='text-[17px]' /> <span>
              Users
            </span>
          </Button>
          </Link>
        </li>
       <li>
          <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]' onClick={() => isOpenSubmenu(3)}>
            <RiProductHuntLine className='text-[18px]' /> <span>
              Products
            </span>
            <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center' >
              <FaAngleDown className={`transition-all ${subMenuIndex === 3 ? 'rotate-180 ' : ' '}` }/>
            </span>
          </Button>

          <Collapse isOpened={subMenuIndex === 3 ? true : false}>
            <ul>
              <li>
                <Link to='/products'>
                <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3'> <span className='block h-[5px] w-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Product List</Button>
                </Link>
              </li>
              <li>
                <Link to='/product/upload'>
                <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3'> <span className='block h-[5px] w-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Product Upload</Button>
                </Link>
              </li>
            </ul>
          </Collapse>


        </li>
      <li>
          <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]' onClick={() => isOpenSubmenu(4)}>
            <TbCategory className='text-[18px]' /> <span>
              Category
            </span>
            <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center' >
              <FaAngleDown className={`transition-all ${subMenuIndex === 4 ? 'rotate-180 ' : ' '}` }/>
            </span>
          </Button>


          <Collapse isOpened={subMenuIndex === 4 ? true : false}>
            <ul>
              <li>
                <Link to='/categories'>
                <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3'> <span className='block h-[5px] w-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Category List</Button>
                </Link>
              </li>
              <li>
                <Link to='/category/add'>
                <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3'> <span className='block h-[5px] w-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Add a Category</Button>
                </Link>
              </li>
              <li>
                <Link to='/category/subCat'>
                <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3'> <span className='block h-[5px] w-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Sub Category List</Button>
                </Link>
              </li>
              <li>
                <Link to='/category.subCat/add'>
                <Button className='!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3'> <span className='block h-[5px] w-[5px] rounded-full bg-[rgba(0,0,0,0.2)]'></span>Add a Sub Category</Button>
                </Link>
              </li>
            </ul>
          </Collapse>


        </li>
        <li>
          <Link to='/orders'>
          <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'>
            <IoBagCheckOutline className='text-[20px]' /> <span>
              Orders
            </span>
          </Button>
          </Link>
        </li>

        <li>
          <Button className='w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]'>
            <IoMdLogOut className='text-[20px]' /> <span>
              Logout
            </span>
          </Button>
        </li>
      </ul>

    </div>
  )
}

export default Sidebar
