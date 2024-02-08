import React, { Suspense, lazy, useState } from 'react'
import { BrowserRouter as Router,Routes,Route, Link, useLocation } from 'react-router-dom'
import Loader from './components/Loader';
const Home = lazy(()=>import("./pages/home"));
// const Test = lazy(()=>import("./pages/Test"));
const Harish = lazy(()=>import("./pages/Harish"));
const Login = lazy(()=>import("./pages/Login"));
const About = lazy(()=>import("./pages/About"));
const ContactUs = lazy(()=>import("./pages/ContactUs"));
const Dashboard = lazy(()=>import("./pages/Dashboard"));




const Test = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const location =useLocation()
  
  return (
  
      
     
  <div className="flex">
  <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={toggleSidebar}
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
              </button>
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Flowbite</span>
              </a>
            </div>
            
          </div>
        </div>
      </nav>

      <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-60 h-screen pt-20 transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
            <Link to="/dashboard" className={`flex items-center p-2 ${location.pathname.includes('/dashboard') ? 'bg-red-500' : ''} text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
  <span className="ms-3">Dashboard</span>
</Link>

            </li>
            <li>
                         <Link to="/contact" className={`flex items-center p-2 ${location.pathname.includes('/contact') ? 'bg-red-500' : ''} text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
                         <span className="flex-1 ms-3 whitespace-nowrap">Contact-us</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
</Link>
            </li>
            <li>
              
              <Link to="/harish" className={`flex ${location.pathname.includes('/harish') ? 'bg-red-500' : ''} items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
                <span className="flex-1 ms-3 whitespace-nowrap">Form</span>
                </Link>
            </li>
            <li>
            <Link to="/about" className={`flex items-center p-2 ${location.pathname.includes('about') ? 'bg-red-500' : ''} text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}>
  <span className="ms-3">About</span>
</Link>
            </li>
            <li>
              <Link to="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                </Link>
            </li>
            <li>
              <Link to="/dashboard"className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                </Link>
            </li>
            <li>
              <Link to="/dashboard" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className={`p-4 sm:ml-60 bg-red ${isSidebarOpen ? 'block' : ''}`}>
            <div className="p-4 border-2  border-gray-200 bg-gray-500 w-100 h-dvh border-dashed rounded-lg dark:border-gray-700 mt-14">
            <Suspense fallback={<Loader/>}>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/test' element={<Test />} />
                <Route path='/harish' element={<Harish />} />
                <Route path='/login' element={<Login />} />
                <Route path='/about' element={<About />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/contact' element={<ContactUs />} />
              </Routes>
      </Suspense>
            </div>
          </div>
        </div>
  
   
  )
}

export default Test