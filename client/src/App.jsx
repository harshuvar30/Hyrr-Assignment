import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./pages/PostList.jsx";
import Signup from "./pages/SignUP.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/posts" element={<PostList />} />
      </Routes>
    </Router>
  );
};

export default App;
