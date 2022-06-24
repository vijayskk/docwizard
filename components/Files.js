import { Folder, MoreVert } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

function Files() {
    const files = [0,1,2,3,4,5]
  return (
    <div>
      <div className='w-full flex justify-center '>
        <div className='max-w-3xl w-full '>
            <div className='sticky w-full h-20 border-b border-gray-300 flex items-center'>
                <p className='ml-4 text-gray-600'>My Documents</p>
                <p className=' text-gray-500 ml-auto mr-4'>Date created</p>
                <IconButton className='mr-4' color="default">
                    <Folder />
                </IconButton>
            </div>

            {
                files.map((o,i)=>{
                    return(
                        <div key={i} className='w-full h-20 border-b border-gray-200 flex items-center'>
                            <IconButton className='ml-4' color="primary">
                                <Folder />
                            </IconButton>
                            <p className='ml-2 text-gray-600'>Document 1.docx</p>
                            <p className=' text-gray-600 ml-auto mr-4 text-sm'>14/01/04</p>
                            <IconButton className='' color="default">
                                <MoreVert />
                            </IconButton>
                        </div>
                    )
                })
            }


            
            
        </div>
    </div>
    </div>
  )
}

export default Files
