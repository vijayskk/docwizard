import { Apps, MenuSharp, NineK, Search } from '@mui/icons-material'
import { IconButton, Menu, MenuItem } from '@mui/material'
import React from 'react'

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <header className='flex sticky shadow-md h-16 md:h-20 items-center '>
            <IconButton className='ml-4' color="default">
                <MenuSharp />
            </IconButton>
            <img className='w-10 ml-2 md:ml-5' src="https://cdn-icons-png.flaticon.com/512/5968/5968517.png" alt="" />
            <h1 className='hidden md:inline ml-2 text-gray-500 text-xl '>Docs</h1>
            <div className='flex-grow flex items-center rounded-lg h-10 bg-gray-200 ml-4 md:ml-20'>
                <Search className='ml-4' />
                <input type="text" className='w-full bg-transparent ml-2 focus:outline-none' placeholder='Search'/>
            </div>
            <IconButton className='ml-2 md:ml-8' color="default">
                <Apps />
            </IconButton>
            
            <img onClick={handleClick} className='ml-2 w-10 rounded-full md:ml-8 mr-4 darkmode-ignore z-50' src='https://avatars.githubusercontent.com/u/83910193?v=4' />
            
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </header>
    )
}

export default Header
