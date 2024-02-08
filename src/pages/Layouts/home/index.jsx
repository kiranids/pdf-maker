import { Divider } from "@mui/material";
import React, { Suspense, lazy, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Outlet,
} from "react-router-dom";

const index = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    const toggleProducts = () => {
      setIsProductsOpen(!isProductsOpen);
    };
  const location = useLocation();

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
              <a href="#" className="flex ms-2 md:me-24">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                 GenAi
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-60 h-screen pt-20 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/dashboard"
                className={`flex items-center p-2 ${
                  location.pathname.includes("/dashboard") ? "bg-red-500" : ""
                } text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <span className="ms-3"><i class="ri-bar-chart-2-fill"></i> Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`flex items-center p-2 ${
                  location.pathname.includes("/contact") ? "bg-red-500" : ""
                } text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                <i class="ri-contacts-book-3-fill"></i> Contact-us
                </span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/harish"
                className={`flex ${
                  location.pathname.includes("/harish") ? "bg-red-500" : ""
                } items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <span className="flex-1 ms-3 whitespace-nowrap"> <i class="ri-survey-fill"></i> Form</span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`flex items-center p-2 ${
                  location.pathname.includes("about") ? "bg-red-500" : ""
                } text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
              >
                <span className="ms-3"><i class="ri-home-smile-line"></i> About</span>
              </Link>
            </li>
            <li>
              {/* Products list item with expand/collapse button */}
              <div
                className="flex items-center p-2 space-between text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group focus:outline-none"
                onClick={toggleProducts}
              >
                <span className="ms-3"><i className="ri-shake-hands-fill"></i> Technologies</span>
                {/* Show different icon based on open/closed state */}
                <i className={`ri-arrow-${isProductsOpen ? 'up' : 'down'}-s-line`}></i>
              </div>
              {/* Nested sublist for Products */}
              {isProductsOpen && (
                <ul className="pl-4">
                  <li>
                    <Link
                      to="/products/category1"
                      className={`flex items-center p-2 ${
                        location.pathname.includes("/products/category1") ? "bg-red-500" : ""
                      } text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                    >
                      <span className="ms-3"> <i class="ri-reactjs-line"></i> React</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products/category2"
                      className={`flex items-center p-2 ${
                        location.pathname.includes("/products/category2") ? "bg-red-500" : ""
                      } text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                    >
                      <span className="ms-3"><i class="ri-angularjs-fill"></i> Angular </span>
                    </Link>
                  </li>
                  {/* Add more nested items as needed */}
                </ul>
              )}
            </li>
            <Divider className="bg-white mt-10"/>
            <li>
               
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className={`p-4 sm:ml-60 bg-red ${isSidebarOpen ? "block" : ""}`}>
        <div className="p-4 border-2  border-gray-200 bg-gray-500 w-100 h-dvh border-dashed rounded-lg dark:border-gray-700 mt-14">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default index;
