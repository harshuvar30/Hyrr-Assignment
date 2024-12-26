import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

function FeaturedPosts() {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
    {/* First post */}
      <div className='w-full lg:w-1/2 flex flex-col gap-4'>
      <Image src="featured1.jpeg" className="rounded-3xl object-cover" w="895"/>
      <div className='flex items-center gap-4'>
        <h1 className='font semi-bold lg:text-lg'>01.</h1>
        <Link className='text-blue-800 lg:text-lg'>Web-Design</Link>
        <span className='text-gray-500'>2 days ago</span>
      </div>
      <Link to="/test" className='text-xl font font-semibold lg:text-3xl font-bold'>terimummybhot jawan jfldsflsdf ling ling ling</Link>
      </div>

      {/* Other posts */}
      <div className='w-full lg:w-1/2 flex flex-col gap-4'>
      {/* Second */}
         <div className='lg:h-1/3 flex justify-between gap-4'>
         <div className='w-1/3 aspect-video'>
          <Image src="featured2.jpeg" className="rounded-3xl object-cover w-full h-full" w="298"/>
         </div>
          <div className='w-2/3'>
          <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
            <h1 className='font-semibold'>02.</h1>
            <Link to='/test' className='text-blue-800 '>Web-Design</Link>
            <span className='text-gray-500 text-sm'>2 days ago</span>
          </div>
          <Link to='/test' className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>jklsajdlf alsjdglksd l safljflksdlk </Link>
          </div>
         </div>
      {/* Third */}
      <div className='lg:h-1/3 flex justify-between gap-4'>
      <div className='w-1/3 aspect-video'>
          <Image src="featured3.jpeg" className="rounded-3xl object-cover w-full h-full" w="298"/>
         </div>
          <div className='w-2/3'>
          <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
            <h1 className='font-semibold'>02.</h1>
            <Link to='/test' className='text-blue-800 '>Web-Design</Link>
            <span className='text-gray-500 text-sm'>2 days ago</span>
          </div>
          <Link to='/test' className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>jklsajdlf alsjdglksd l safljflksdlk </Link>
          </div>
         </div>
      {/* Fourth */}
      <div className='lg:h-1/3 flex justify-between gap-4'>
      <div className='w-1/3 aspect-video'>
          <Image src="featured4.jpeg" className="rounded-3xl object-cover w-full h-full" w="298"/>
         </div>
          <div className='w-2/3'>
          <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
            <h1 className='font-semibold'>02.</h1>
            <Link to='/test' className='text-blue-800 '>Web-Design</Link>
            <span className='text-gray-500 text-sm'>2 days ago</span>
          </div>
          <Link to='/test' className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>jklsajdlf alsjdglksd l safljflksdlk </Link>
          </div>
         </div>
      </div>

    </div>
  )
}

export default FeaturedPosts