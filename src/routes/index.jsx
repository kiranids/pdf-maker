import React, { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import Auth from '../pages/Layouts/auth';
import Home from '../pages/Layouts/home';
const Login = lazy(()=>import('../pages/login'));
const Register = lazy(()=>import('../pages/signup'));
const ForgetPassword = lazy(()=>import('../pages/forgetpassword'));
const Dashboard = lazy(()=>import('../pages/Dashboard'));
const About = lazy(()=>import('../pages/About'));
const Harish = lazy(()=>import('../pages/Harish'));
const Contact = lazy(()=>import('../pages/ContactUs'));

const router = createBrowserRouter([
    {
        path: 'auth',
        element: <Auth />,
        children: [
            {
                path: '',
                element: <Login />,
                index:'/'
            },
            {
                path: 'login',
                element: <Login />,
            },
          
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'forgot-password',
                element: <ForgetPassword />
            }
        ]
    },
    {
        path: '/',
        element: <Home />,
        children: [

     
            {
                path: '',
                element: <Navigate to="/dashboard" />
            },
            {
                path: 'dashboard',
                element: <Dashboard />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'harish',
                element: <Harish />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            
        ]
    }
])
export default router