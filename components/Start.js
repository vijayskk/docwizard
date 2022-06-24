import { Add, MoreVert } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

function Start() {
  return (
    <div className='w-full flex justify-center bg-gray-50'>
        <div className='max-w-3xl w-full '>
            <div className='sticky w-full h-20  flex items-center'>
                <p className='ml-4 text-gray-600'>Start a new document</p>
                <IconButton className='ml-auto' color="default">
                    <MoreVert />
                </IconButton>
            </div>

            <div className='w-full gap-4 grid grid-flow-row  xl:grid-cols-3 md:grid-cols-2 grid-cols-1 py-8'>
                <IconButton className='ml-auto'>
                    <div className='bg-white flex-col w-48 h-64 rounded-xl border border-gray-300 flex items-center justify-center mx-auto'>
                        <Add className='text-gray-600 h-20 w-20' color='primary' />
                        <p className='mt-4 text-md font-thin'>Blank</p>
                    </div>
                </IconButton>
                

                
            </div>
            
        </div>
    </div>
  )
}

export default Start
