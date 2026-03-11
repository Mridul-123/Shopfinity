import React, { useContext, useState } from 'react'
import { Button, Divider } from '@mui/material'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { RiMenu2Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaRegUser } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import {MyContext} from '../../App'



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {

  const [anchorMyAcc, setAnchorMyAcc] = useState(null);
  const openMyAcc = Boolean(anchorMyAcc);
  const handleClickMyAcc = (event) => {
    setAnchorMyAcc(event.currentTarget);
  };
  const handleClosMyAcc = () => {
    setAnchorMyAcc(null);
  };

  const context = useContext(MyContext); 

  return (
    <header className={`w-full h-[auto] py-2 ${context.isSidebarOpen===true ? 'pl-72' : 'pl-5'} transition-all pr-7 shadow-md bg-white flex items-center justify-between `}>
      <div className='part1'>
        <Button className='!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-[rgba(0,0,0,0.8)]' onClick={() => context.setIsSidebarOpen(!context.isSidebarOpen)}>  
          <RiMenu2Line className='text-[18px] text-[rgba(0,0,0,0.8)]' />
        </Button>
      </div>

      <div className='part2 w-[40%] flex items-center justify-end gap-5'>

        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <FaRegBell />
          </StyledBadge>
        </IconButton>


        <div className='relative'>

          <div className='rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer' onClick={handleClickMyAcc}>
            <img src="https://imgs.search.brave.com/vNgpuftwCn2vmiKCx17cYFJc_esAHcOtdf85k5EScU8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI2LzBl/LzdiLzI2MGU3Yjlm/YzFjZDEwNjRlNjIx/ODNlMGM2YWIyZTNm/LmpwZw" className='w-full h-full object-cover' />

            <Menu
              anchorEl={anchorMyAcc}
              id="account-menu"
              open={openMyAcc}
              onClose={handleClosMyAcc}
              onClick={handleClosMyAcc}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&::before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleClosMyAcc} className='!bg-white'>
                <div className='flex items-center gap-3'>
                  <div className='rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer'>
                    <img src="https://imgs.search.brave.com/vNgpuftwCn2vmiKCx17cYFJc_esAHcOtdf85k5EScU8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI2LzBl/LzdiLzI2MGU3Yjlm/YzFjZDEwNjRlNjIx/ODNlMGM2YWIyZTNm/LmpwZw" className='w-full h-full object-cover' />
                  </div>

                  <div className='info'>
                    <h3 className='text-[15px] font-[500] leading-5'>Martin Garixx</h3>
                    <p className='text-[12px] font-[400] opacity-70'>admin01@gmail.com</p>
                  </div>
                </div>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClosMyAcc} className='flex items-center gap-3' >
                <FaRegUser className='text-[16px]'/> <span className='text-[14px]'>Profile</span>
              </MenuItem>
              <MenuItem onClick={handleClosMyAcc} className='flex items-center gap-3' >
                <IoMdLogOut className='text-[18px]' /> <span className='text-[14px]'>Sign Out</span>
              </MenuItem>
            </Menu>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
