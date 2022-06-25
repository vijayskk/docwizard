import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { auth, provider } from '../firebase'


function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Image
        src="https://cdn-icons-png.flaticon.com/512/5968/5968517.png"
        height="200"
        width="450"
        objectFit='contain'
      />
      <h1 className='ml-2 text-gray-500 text-5xl mt-6'>DocWizard</h1>
      <div className='mt-10'>
      <button className='hover:bg-blue-700 bg-blue-600 w-40 h-10 text-white hover:shadow-lg rounded-xl'  onClick={()=>{
        auth.signInWithPopup(provider)
      }} >
        Login
      </button>
      </div>
    </div>
  )
}

export default Login
