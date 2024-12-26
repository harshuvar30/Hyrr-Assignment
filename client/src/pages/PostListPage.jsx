
import React, { useState } from 'react'
import PostList from '../components/PostList'
import SideMenu from '../components/SideMenu'

function PostListPage() {
    const [open,setOpen] = useState(false);
  return (
    <div className=''>
    <h1 className='mb-8 text-2xl'>Development</h1>
    <button onClick={()=>setOpen((prev)=>!prev)} className='bg-blue-800 text-sm text-white px-4 md:hidden rounded-2xl mb-4'>{open ? "Close" : "Filter or Search"}</button>
    <div className='flex flex-col-reverse gap-8 md:flex-row'>
    <div className=''>
        <PostList/>
    </div>
    <div className={`${open ? "block" : "hidden"} md:block`}>
        <SideMenu/>
    </div>
    </div>
    </div>
  )
}
 
export default PostListPage