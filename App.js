import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from "./components/home.js"
import About from"./components/about.js"
import Login from './components/Login.js';
import Register from './components/Register.js';
import UserProfile from './components/UserProfile.js';
import AdminProfile from './components/AdminProfile.js';
import Chatbot from './components/chatbot.js';
import Rootlayout from './Rootlayout.js';

function App() {
  let BrowserRouter=createBrowserRouter([
    {
      path:'',
      element:<Rootlayout/>,
      children:[
        {
          path:'',
          element:<Home/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/user-profile',
          element:<UserProfile/>
        },
        {
            path:'/chatbot',
            element:<Chatbot/>
        },
        {
          path:'/admin-profile',
          element:<AdminProfile/>
        }
      ]
    }
  ])
  return (
   <div>
    <RouterProvider router={BrowserRouter}></RouterProvider>
   </div>
  );
}

export default App;