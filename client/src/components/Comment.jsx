import React from 'react'
import Image from './Image'

function Comment() {
  return (
    <div className='p-4 bg-slate-50 rounded-xl mb-8'>
    <div className='flex items-center gap-4'>
      <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40"/>
      <span className='font-medium'>Harshvardhan</span>
      <span className='text-sm text-gray-500'>2 days ago</span>
    </div>
    <div className='mt-4'>
      <p>
        This is a comment for this post just for testing
        This is a comment for this post just for testing
        This is a comment for this post just for testing
        This is a comment for this post just for testing
      </p>
    </div>
    </div>
  )
}

export default Comment