import React from 'react'
import SignUp from '../Sign-Up/SignUp'
import Login from '../Login/Login'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='flex flex-wrap px-auto'>
    <div>Header</div>
    <Link to="/" className='flex items-center'>
    <SignUp/>
    </Link>
    <Link to="/" className='flex items-center'>
    <Login/>
    </Link>
    </header>
  )
}

export default Header