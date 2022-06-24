import { Folder, MoreVert } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

function Files() {
  return (
    <div>
      <div className='w-full flex justify-center '>
        <div className='max-w-3xl w-full '>
            <div className='sticky w-full h-20 border-b border-gray-300 flex items-center'>
                <p className='ml-4 text-gray-600'>My Document</p>
                <p className=' text-gray-600 ml-auto mr-4'>Date created</p>
                <IconButton className='' color="default">
                    <Folder />
                </IconButton>
            </div>

            <div className='w-full h-20 border-b border-gray-200 flex items-center'>
                <IconButton className='' color="primary">
                    <Folder />
                </IconButton>
                <p className='ml-2 text-gray-600'>Document 1.docx</p>
                <p className=' text-gray-600 ml-auto mr-4 text-sm'>14/01/04</p>
                <IconButton className='' color="default">
                    <MoreVert />
                </IconButton>
            </div>


            <div className='w-full h-20 border-b border-gray-200 flex items-center'>
                <IconButton className='' color="primary">
                    <Folder />
                </IconButton>
                <p className='ml-2 text-gray-600'>Document 2.docx</p>
                <p className=' text-gray-600 ml-auto mr-4 text-sm'>14/01/04</p>
                <IconButton className='' color="default">
                    <MoreVert />
                </IconButton>
            </div>


            <div className='w-full h-20 border-b border-gray-200 flex items-center'>
                <IconButton className='' color="primary">
                    <Folder />
                </IconButton>
                <p className='ml-2 text-gray-600'>Document 3.docx</p>
                <p className=' text-gray-600 ml-auto mr-4 text-sm'>14/01/04</p>
                <IconButton className='' color="default">
                    <MoreVert />
                </IconButton>
            </div>
            
            
        </div>
    </div>
    </div>
  )
}

export default Files
