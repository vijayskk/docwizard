import { Apps, MenuSharp, NineK, Search } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'

function Header() {
    return (
        <div className='flex sticky shadow-lg h-20 items-center '>
            <IconButton className='ml-4' color="default">
                <MenuSharp />
            </IconButton>
            <img className='w-10 ml-5' src="https://cdn-icons-png.flaticon.com/512/5968/5968517.png" alt="" />
            <h1 className='ml-2 text-gray-500 text-xl '>Docs</h1>
            <div className='flex-grow flex items-center rounded-lg h-10 bg-gray-200 ml-20'>
                <Search className='ml-4' />
                <input type="text" className='w-full bg-transparent ml-2 focus:outline-none' name="" placeholder='Search docs' value="" />
            </div>
            <IconButton className='ml-8' color="default">
                <Apps />
            </IconButton>
            <Avatar className='ml-8 mr-4' src='https://avatars.githubusercontent.com/u/83910193?v=4' />
        </div>
    )
}

export default Header
