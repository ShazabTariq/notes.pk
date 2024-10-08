import React, { useEffect, useState } from 'react';
import Login from './Login';
import Logout from './Logout';
import { useauth } from "../components/context/Authprovider.jsx";

function Navbar() {
  const [authuser, setauthuser] = useauth();

  const [sticky, setSticky] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navitems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/Paidnotes">Paid Notes</a></li>
      <li><a href="/Contact">Contact</a></li>
      <li><a href="/About">About</a></li>
    </>
  );

  return (
    <>
      <div className={`z-50 max-w-screen-2xl container mx-auto md:px-20 px-0 py-1 dark:bg-slate-900 dark:text-white fixed top-0 right-0 left-0 
        ${sticky ? 'sticky-navbar shadow-md bg-base-300 dark:bg-slate-600 dark:text-white duration-300 transition-all ease-in-out' : ''}`}>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 dark:bg-slate-800 dark:text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {navitems}
              </ul>
            </div>
            <a href="#" className="text-2xl font-bold cursor-pointer">Notes.pk</a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navitems}
              </ul>
            </div>
            <div className='hidden md:block'>
              <label className="px-3 py-2 border rounded-md flex items-center gap-2">
                <input type="text" className="grow outline-none dark:bg-slate-900 dark:text-white" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>
              </label>
            </div>
            <label className="px-3 py-1 grid cursor-pointer place-items-center" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              <input
                type="checkbox"
                checked={theme === "dark"}
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path
                  d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
            {
              authuser ? (
                <Logout/>
              ) :(
                <div className="">
                <a
                  href="#"
                  className="bg-black text-cyan-50 px-4 py-2 rounded-md hover:bg-slate-800 duration-300 md:w-auto w-full"
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                >
                  Login
                </a>
                <Login />
              </div>
              )
            }
           

          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
