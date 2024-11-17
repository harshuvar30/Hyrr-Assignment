import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
<<<<<<< HEAD
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
=======

>>>>>>> 9733fe4276fd0ea0b076f3fee8bf4896a305ac5e


function App() {

<<<<<<< HEAD
  return (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'><Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
    </div>
    </div>
   
  )
=======
  return (<></> )
>>>>>>> 9733fe4276fd0ea0b076f3fee8bf4896a305ac5e
}

export default App
