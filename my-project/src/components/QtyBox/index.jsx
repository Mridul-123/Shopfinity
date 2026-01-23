import React from 'react'
import { Button } from '@mui/material';
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


const QtyBox = () => {
    const [qtyValue, setQtyValue] = React.useState(1);

    const plusQty = () => {
        setQtyValue(qtyValue + 1)
    }
    const minusQty = () => {
        if(qtyValue === 1){ 
            setQtyValue(1)
        }else{ 
            setQtyValue(qtyValue - 1)
        }
    }

    return (
        <div className='qtyBox flex items-center relative'>
            <input type="number" className='w-full pl-4 h-[40px] p-2 text-[15px] focus:outline-none border border-[rgba(0,0,0,0.3)] rounded-md' Value={qtyValue} />
            <div className='flex items-center flex-col justify-between h-[40px] absolute top-0 right-0 z-50 border-l-1 border-[rgba(0,0,0,0.3)]'>
                <Button className='!min-w-[25px] !w-[25px] !h-[20px] !text-[#000] hover:!bg-[#f0f0f0]' onClick={plusQty}><FaAngleUp className='text-[12px] opacity-55'/></Button>
                <Button className='!min-w-[25px] !w-[25px] !h-[20px] !text-[#000] hover:!bg-[#f0f0f0]' onClick={minusQty}><FaAngleDown className='text-[12px] opacity-55' /></Button>
            </div>
        </div>
    )
}

export default QtyBox
