import { Apps, MenuSharp, NineK, Search } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'

function Header() {
    return (
        <div className='flex sticky shadow-md h-16 md:h-20 items-center '>
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
            <Avatar className='ml-2 md:ml-8 mr-4' src='https://avatars.githubusercontent.com/u/83910193?v=4' />
        </div>
    )
}

export default Header
