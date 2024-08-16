import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FreeNotes from '../components/freenotes'
import Footer from '../components/Footer'


function home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <FreeNotes />
      <Footer />
    </>
  )
}

export default home
