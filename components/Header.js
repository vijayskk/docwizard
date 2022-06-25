import { Apps, MenuSharp, NineK, Search } from '@mui/icons-material'
import { IconButton, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    var [user] = useAuthState(auth)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const trueuser = user
    if(user){
        if(user.isAnonymous){
            user = false
        }
    }

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
            
            {user?<img onClick={handleClick} className='ml-2 w-10 rounded-full md:ml-8 mr-4 darkmode-ignore z-50' src={user.photoURL} />
            :<img onClick={handleClick} className='ml-2 w-10 rounded-full md:ml-8 mr-4 darkmode-ignore z-50' src="https://media.istockphoto.com/vectors/person-gray-photo-placeholder-man-vector-id1133765772?k=20&m=1133765772&s=612x612&w=0&h=2X073i6UQf9Z6NRxena3em12vhr7I7nromkZk4mfEmk=" />}
            
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
                <MenuItem onClick={()=>{
                    if(trueuser){
                        auth.signOut()
                    }
                }}>Logout</MenuItem>
            </Menu>
        </header>
    )
}

export default Header
