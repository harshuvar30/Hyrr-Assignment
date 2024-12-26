import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import PostListPage from './pages/PostListPage.jsx'
import HomePage from './pages/HomePage.jsx'
import SinglePostPage from './pages/SinglePostPage.jsx'
import WritePage from './pages/WritePage.jsx'
import Signup from './pages/SignUp.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Layout from './layout/Layout.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    element:<Layout/>,
    children:[
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: '/posts',
        element: <PostListPage/>
      },
      {
        path:'/:slug',
        element:<SinglePostPage/>
      },
      {
        path:'/write',
        element:<WritePage/>
      }, {
        path:'/register',
        element:<Signup/>
      },
      {
        path:'/login',
        element:<LoginPage/>
      }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='login' element={<Login />} />
//       <Route path='sign-up' element={<SignUp />} />
//     </Route>
//   )
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App.jsx';
// import './index.css'; // Import Tailwind CSS styles


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/" >
  <RouterProvider router={router}/>
  </ClerkProvider>
  </React.StrictMode>
);
