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
      <div className='mt-10 flex flex-col items-center'>
      <button className='hover:bg-blue-700 bg-blue-600 w-40 h-10 text-white hover:shadow-lg rounded-xl'  onClick={()=>{
        auth.signInWithPopup(provider)
      }} >
        Login
      </button>

      <button className='hover:bg-gray-700 bg-gray-600 w-40 h-10 text-white hover:shadow-lg rounded-xl mt-6'  onClick={()=>{
        auth.signInAnonymously()
      }} >
        Use Anonymously
      </button>

      <p className='text-sm font-light text-red-600 mt-10'>Warning : Anonymous login wont save your files</p>


      </div>
    </div>
  )
}

export default Login
