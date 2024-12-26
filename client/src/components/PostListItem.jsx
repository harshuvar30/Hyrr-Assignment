import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

function PostListItem  ()  {
  return (<div className='flex flex-col xl:flex-row gap-8 '>

    <div className='md:hidden xl:block xl:w-1/3'>
        <Image src="postImg.jpeg" className="rounded-2xl object-cover " w="735"/>
    </div>
        <div className='flex flex-col gap-4 xl:w-2/3'>
            <Link to="/test" className='text-4xl font-semibold'>Post Title here checkout terimummy ling ling </Link>
            <div className='flex items-center text-sm text-gray-500 gap-2'>
                <span>Written By</span>
                <Link to='/test' className='text-blue-800'>Jhon Doe</Link>
                <span>on</span>
                <Link to='/test' className='text-blue-800'>Web-Design</Link>
                <span>2 days ago</span>
            </div>
            <p>
                laslkdfl kasdflk  lasjfldsjl  ladlk oasnlkf klnal  llkfnla snlksdfnl naslk fnldnl
                lasdfn lkasn lnaslkn lkasn nlaksn laskn lnslkn lkanl lknaslnf lasnl naln lakn. lasjfldsjl
                aldf k nlaln flnlakgn lknlksnl lknlkaslk nl klan lkdfnlk nlkasnl nlnafl nlkkfnl nlasdnd nlkn.
            </p>
            <Link to="/test" className='underline text-blue-800 text-sm'>Read More</Link>
        </div>
  </div>)
  
}

export default PostListItem