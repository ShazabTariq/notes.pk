import React from "react";

import './index.css';
import Home from './home/home';
import { Routes, Route, Navigate } from "react-router-dom";
import Paidnotess from "./paidnotess/Paidnotess";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import About from "./components/About";
import { Toaster } from 'react-hot-toast';
import { useauth } from "./components/context/Authprovider";


const App = () => {
  const [authuser, setauthuser] = useauth();
console.log(authuser);
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Paidnotes" element={authuser ? <Paidnotess /> : <Navigate to="/Signup"/>} />
        <Route path="/Signup" element= { <Signup/>  }/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      <Toaster />
      </div>
    </>
  );
};

export default App;
