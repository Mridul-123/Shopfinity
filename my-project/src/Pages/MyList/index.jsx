import React from 'react'
import { Button } from '@mui/material';
import { BsFillBagCheckFill } from "react-icons/bs";
import MyListItems from './myListItems';
import AccountSideBar from '../../components/AccountSideBar';

const MyList = () => {
    return (

         <section className='py-10 w-full'>
            <div className='container flex items-start gap-5 mx-auto'>
                <div className='col1 w-[20%]'>
                    <AccountSideBar/>
                </div>

                <div className='col2 w-70%]'>
                    <div className='shadow-md rounded-md bg-white'>
                        <div className='py-2 px-3 border-b border-[rgba(0,0,0,0.1)]'>
                            <h2>My List</h2>
                            <p className='pt-0 pb-2'>There are <span className='font-bold text-[#ff5252]'> 5 </span>products in My List</p>
                        </div>
                        <MyListItems />
                        <MyListItems />
                        <MyListItems />
                        <MyListItems />
                        <MyListItems />   
                        <MyListItems />   
                        <MyListItems />   
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyList
