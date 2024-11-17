import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  
//   useEffect(() => {
//     fetchPosts();
//   }, [page]);

//   const fetchPosts = async () => {
//     // Fetch posts from your server (example endpoint)
//     try {
//       const response = await fetch(`/api/posts?page=${page}`);
//       const data = await response.json();
//       setPosts((prevPosts) => [...prevPosts, ...data.posts]);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   };

//   const loadMore = () => setPage((prev) => prev + 1);

  return (
    <div className=" gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <main className=" flex flex-col items-center justify-center p-6 w-full">
        <h2 className="text-4xl font-bold text-gray-800 text-center md:text-5xl">
          Welcome to MelodyVerse
        </h2>
        <div className="mt-8 w-full text-center">
          <p className="text-gray-600 mt-6">
            Need to login before seeing the posts.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
