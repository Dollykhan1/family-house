import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login/Login.jsx';
import Housedetails from './components/Housedetails.jsx';
import PageError from './components/PageError.jsx';
import Profile from './components/Profile.jsx';
import PrivateRoute from './Provider/PrivateRoute.jsx';
import UpdateProfile from './components/UpdateProfile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <PageError></PageError>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/house.json')
      },
      {
        path:"/data/:id",
        element: <PrivateRoute><Housedetails></Housedetails></PrivateRoute>,
        loader: ()=> fetch('/house.json')
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
      {
        path: "updateProfile",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
     
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }


    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
