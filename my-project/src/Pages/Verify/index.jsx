import React from 'react'
import { useState } from 'react'
import OtpBox from '../../components/OtpBox'
import { Button } from '@mui/material'

const Verify = () => {

    const [otp, setOtp] = useState("")
    const handleOtpChange = (value) => {
        setOtp(value)
    }

    const verifyOtp = (e) => { 
        e.preventDefault();
        alert(otp);
    }

    return (
        <section className='section py-10'>
            <div className='container mx-auto flex justify-center items-center'>
                <div className='card shadow-md w-[450px] rounded-md bg-white p-5 px-10'>
                    <div className='text-center flex items-center justify-center'>
                        <img src="\public\verify3.png" width='80' />

                    </div>
                    <h3 className='text-center text-[18px] text-black pt-4 pb-1'>Verify OTP</h3>

                    <p className='text-center pt-0 pb-4'>OTP sent to <span className='text-[#ff5252] font-bold'> mridul@gmail.com</span></p>


                    <form onSubmit={verifyOtp}>
                        <OtpBox length={6} onChange={handleOtpChange} />

                        <div className='flex items-center justify-center pt-5 px-3'>
                            <Button type='submit' className='btn-org btn-lg w-full'> Verify OTP</Button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Verify
