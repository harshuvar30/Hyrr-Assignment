import React from "react";
import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

function HomePage() {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>.</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:6xl font-bold">
            In et eu amet irure officia deserunt est reprehenderit.
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Tempor est excepteur ut voluptate adipisicing dolore nulla ad mollit
            labore. Quis officia velit laborum est eu velit
          </p>
        </div>
        <Link to="write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            height="200"
            width="200"
            className="text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write you story
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 right-0 bottom-0 left-0 m-auto w-20 h-20 bg-blue-800 flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              stroke="white"
              strokeWidth="2"
            >
              {/* <rect fill="none" height="24" width="24" /> */}
              <path d="M9,5v2h6.59L4,18.59L5.41,20L17,8.41V15h2V5H9z" />
            </svg>
          </button>
        </Link>
      </div>
      {/* CATEGORIES */}
      <MainCategories/>
      {/* FEATURED POSTS */}
      <FeaturedPosts/>
      {/* POST LIST */}
      <div className="">
        <div className="my-8 text-2xl text gray-600">
        <h1>Recent Posts</h1>
        <PostList/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
