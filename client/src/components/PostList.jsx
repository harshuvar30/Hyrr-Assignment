import React from 'react'
import PostListItem from './PostListItem'
import axios from 'axios'
import { use } from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async() =>{
  const res = await axios.get(`http://localhost:3000/posts`);
  return res.data;
}

function PostList() {
  const {isPending,error,data} = useQuery({
    queryKey:["repoData"],
    queryFn:()=>fetchPosts()
  })
  if(isPending){
    return "Loading..."
  }
  if(error){
    return "An error occured :"+ error.message;
  }
  console.log(data)
  return (
    <div className='flex flex-col mb-8 gap-12'>
        <PostListItem/>
        <PostListItem/>
        <PostListItem/>
        <PostListItem/>
        <PostListItem/>
        <PostListItem/>
        <PostListItem/>
        <PostListItem/>
        <PostListItem/>
        <PostListItem/>
        <PostListItem/>
    </div>
  )
}

export default PostList