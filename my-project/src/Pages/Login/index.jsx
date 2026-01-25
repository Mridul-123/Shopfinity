import React, { useContext } from 'react'
import TextField from '@mui/material/TextField'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';

const Login = () => {

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [formFields, setFormFields] = useState({ email: '', password: '' })

    const context = useContext(MyContext)

    const history = useNavigate()

    const forgotPassword = () => {
        context.openAlertBox('success' , 'OTP Send')
        history('/verify')
    }

    return (
        <section className='section py-10'>
            <div className='container mx-auto flex justify-center items-center'>
                <div className='card shadow-md w-[450px] rounded-md bg-white p-5 px-10'>
                    <h3 className='text-center text-[18px] text-black'>Login to your account</h3>
                    <form className='w-full pt-5'>
                        <div className='form-group w-full pb-4'>
                            <TextField
                                type='email'
                                id="standard-basic"
                                label="Email Id"
                                variant="outlined"
                                className='w-full'
                                name='email'
                            />
                        </div>
                        <div className='form-group w-full pb-4 relative'>
                            <TextField
                                type={isShowPassword === false ? 'password' : 'text'}
                                id="password"
                                label="Password"
                                variant="outlined"
                                className='w-full'
                                name='password'
                            />
                            <Button className='!absolute top-[10px] right-[10px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full  !text-black' onClick={() => setIsShowPassword(!isShowPassword)}>
                                {
                                    isShowPassword === false ? <IoMdEye className='text-[20px] opacity-75' /> : <IoMdEyeOff className='text-[20px] opacity-75' />
                                }
                            </Button>
                        </div>

                        <a className='link cursor-pointer text-[14px] font-[500]' onClick={forgotPassword}>Forgot Password</a>

                        <div className='flex items-center w-full pb-3 pt-3'>
                            <Button className='btn-org btn-lg w-full'>Login </Button>
                        </div>

                        <p className='text-center'>Not Registered? <Link className='link text-[14px] font-[550] text-[#ff5252]' to='/register'>Sign Up</Link></p>

                        <p className='text-center font-[500] pt-3 pb-3'>Or continue with social account</p>

                        <Button className='flex  gap-3 w-full !bg-[#f1f1f1] btn-lg !text-black !font-bold'><FcGoogle className='text-[20px]' />Login with Google</Button>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login
