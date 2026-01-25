import React from 'react'
import { useState } from 'react'
import './style.css'

const OtpBox = ({ length, onChange }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""))
    const handleChange = (element, index) => {
        const value = element.value;
        if (isNaN(value)) return; // only numbers allowed

        // Updated OTP value
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        onChange(newOtp.join(""));

        // Focus on next input
        if (value && index < length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    }

    const handleKeyDown = (event , index) => { 
        if(event.key === 'Backspace' && !otp[index] && index > 0){ 
            document.getElementById(`otp-input-${index -1}`).focus();
        }
    }

    return (
        <div className='otpBox'>
            {otp.map((data, index) => (
                <input key={index}
                    id={`otp-input-${index}`}
                    type='text' maxLength='1'
                    value={otp[index]}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                />
            ))}

        </div>
    )
}

export default OtpBox
