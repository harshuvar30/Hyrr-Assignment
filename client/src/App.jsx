import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./pages/PostList.jsx";
import Signup from "./pages/SignUp.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Signup />} />
    //     <Route path="/posts" element={<PostList />} />
    //   </Routes>
    // </Router>
    <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
     <Navbar/>
    </div>
  );
};

export default App;
