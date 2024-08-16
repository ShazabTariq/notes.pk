import React from "react";

import './index.css';
import Home from './home/home';
import { Routes, Route } from "react-router-dom";
import Paidnotess from "./paidnotess/Paidnotess";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Paidnotes" element={<Paidnotess />} />
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>

      </Routes>
      </div>
    </>
  );
};

export default App;
