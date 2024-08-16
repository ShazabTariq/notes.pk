import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Paidnotes from '../components/Paidnotes';


function Paidnotess() {
  return (
    <>
    <div className=' dark:bg-slate-900 dark:text-white'>
   <Navbar/>
   <Paidnotes/>
   <Footer/>
   </div>
    </>
  )
}

export default Paidnotess
