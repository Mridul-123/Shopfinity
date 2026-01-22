import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { FaRegPlusSquare } from "react-icons/fa";
import { FiMinusSquare } from "react-icons/fi";

const CategoryCollapse = () => {
    const [submenuIndex, setSubmenuIndex] = React.useState(null);
    const [innerSubmenuIndex, setInnerSubmenuIndex] = React.useState(null);

    const openSubmenu = (index) => {
        if (submenuIndex === index) {
            setSubmenuIndex(null);
        } else {
            setSubmenuIndex(index)
        }

    }

    const openInnerSubmenu = (index) => {
        if (innerSubmenuIndex === index) {
            setInnerSubmenuIndex(null);
        } else {
            setInnerSubmenuIndex(index)
        }

    }

    return (
        <>
            <div className='scroll'>
                <ul className='w-full'>
                    <li className='list-none flex items-center relative flex-col'>
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'> Fashion</Button>
                        </Link>
                        {
                            submenuIndex === 0 ? <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(0)} />
                                :
                                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(0)} />
                        }

                        {submenuIndex === 0 &&
                            <ul className='submenu w-full pl-3' >
                                <li className='list-none relative'>
                                    <Link to="/" className='w-full'>
                                        <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'> Apparel</Button>
                                    </Link>

                                    {
                                        innerSubmenuIndex === 0 ? <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openInnerSubmenu(0)} />
                                            :
                                            <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openInnerSubmenu(0)} />
                                    }

                                    {
                                        innerSubmenuIndex === 0 &&
                                        <ul className='inner_submenu  w-full pl-3' >
                                            <li className="list-none relative mb-2">
                                                <Link to="/" className='link w-full !text-left  !justify-start !px-3 transition text-[14px] '>Smart Tablet</Link>

                                            </li>

                                            <li className='list-none relative mb-2'>
                                                <Link to="/" className='link w-full !text-left  !justify-start !px-3 transition text-[14px] '>Crepe-T-Shirt</Link>

                                            </li>

                                            <li className='list-none relative mb-2'>
                                                <Link to="/" className='link w-full !text-left  !justify-start !px-3 transition text-[14px] '>Leather Watch</Link>

                                            </li>

                                            <li className='list-none relative mb-2'>
                                                <Link to="/" className='link w-full !text-left  !justify-start !px-3 transition text-[14px] '>Rolling Diamond</Link>

                                            </li>
                                        </ul>
                                    }

                                </li>
                            </ul>
                        }

                    </li>


                    <li className='list-none flex items-center relative flex-col' >
                        <Link to="/" className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'> Fashion</Button>
                        </Link>
                        {
                            submenuIndex === 1 ? <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(1)} />
                                :
                                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openSubmenu(1)} />
                        }

                        {submenuIndex == 1 &&
                            <ul className='submenu w-full pl-3' >
                                <li className='list-none relative'>
                                    <Link to="/" className='w-full'>
                                        <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'> Apparel</Button>
                                    </Link>

                                    {
                                        innerSubmenuIndex === 1 ? <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openInnerSubmenu(1)} />
                                            :
                                            <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={() => openInnerSubmenu(1)} />
                                    }

                                    {
                                        innerSubmenuIndex === 1 &&
                                        <ul className='inner_submenu w-full pl-3' >
                                            <li className="list-none relative mb-2">
                                                <Link to="/" className='link w-full !text-left  !justify-start !px-3 transition text-[14px] '>Smart Tablet</Link>

                                            </li>

                                            <li className='list-none relative mb-2'>
                                                <Link to="/" className='link w-full !text-left  !justify-start !px-3 transition text-[14px] '>Crepe-T-Shirt</Link>

                                            </li>

                                            <li className='list-none relative mb-2'>
                                                <Link to="/" className='link w-full !text-left  !justify-start !px-3 transition text-[14px] '>Leather Watch</Link>

                                            </li>

                                            <li className='list-none relative mb-2'>
                                                <Link to="/" className='link w-full !text-left  !justify-start !px-3 transition text-[14px] '>Rolling Diamond</Link>

                                            </li>
                                        </ul>
                                    }

                                </li>
                            </ul>
                        }

                    </li>
                </ul>
            </div>
        </>
    )
}

export default CategoryCollapse
