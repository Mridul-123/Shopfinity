import React, { useContext } from 'react'
import TextField from '@mui/material/TextField'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';

const ForgotPassword = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowPassword2, setIsShowPassword2] = useState(false);

    const context = useContext(MyContext)

    const history = useNavigate()

    return (
        <section className='section py-10'>
            <div className='container mx-auto flex justify-center items-center'>
                <div className='card shadow-md w-[450px] rounded-md bg-white p-5 px-10'>
                    <h3 className='text-center text-[18px] text-black'>Forgot Password</h3>
                    <form className='w-full pt-5'>
                        <div className='form-group w-full pb-4 relative'>
                            <TextField
                                type={isShowPassword === false ? 'password' : 'text'}
                                id="password"
                                label="New Password"
                                variant="outlined"
                                className='w-full'
                                name='email'
                            />
                             <Button className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full  !text-black' onClick={() => setIsShowPassword(!isShowPassword)}>
                                {
                                    isShowPassword === false ? <IoMdEye className='text-[20px] opacity-75' /> : <IoMdEyeOff className='text-[20px] opacity-75' />
                                }
                            </Button>
                        </div>
                        <div className='form-group w-full pb-4 relative'>
                            <TextField
                                type={isShowPassword2 === false ? 'password' : 'text'}
                                id="confirm_password"
                                label="Confirm Password"
                                variant="outlined"
                                className='w-full'
                                name='password'
                            />
                           
                            <Button className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full  !text-black' onClick={() => setIsShowPassword2(!isShowPassword2)}>
                                {
                                    isShowPassword2 === false ? <IoMdEye className='text-[20px] opacity-75' /> : <IoMdEyeOff className='text-[20px] opacity-75' />
                                }
                            </Button>
                        </div>

                        <div className='flex items-center w-full pb-3 pt-3'>
                            <Button className='btn-org btn-lg w-full'>Change Password </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ForgotPassword
