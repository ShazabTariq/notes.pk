import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <Navbar />
      <div className="bg-white-100 py-16 relative overflow-x-hidden">
  <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
<h1 className="text-6xl font-extrabold dark:text-white  text-pink-700  mt-10 mb-4">About Us</h1>
<p className="dark:text-gray-300  text-lg text-gray-700 leading-relaxed">
  Welcome to our website! We are dedicated to providing the best service and quality in our field. Our team is committed to excellence and strives to exceed customer expectations.
</p>
</div> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">     
            <div className="relative flex justify-center">
            
              <img
                src="https://64.media.tumblr.com/517bc49cd9f296e391e917e0c139837c/tumblr_inline_oxaqkgq0Gs1rbv0a3_500.jpg"
                alt="About Us"
                className="rounded-lg shadow-lg w-96 max-w-md"
              />
             
            </div>
            <div className="flex flex-col justify-center mt-0 mb-10">
              <h2 className="dark:text-white  text-2xl font-semibold text-pink-700 mb-4">Our Mission</h2>
              <p className="dark:text-gray-300  text-gray-700 leading-relaxed mb-4">
                Our mission is to deliver top-notch products and services to our clients. We believe in building long-term relationships with our customers and partners based on trust, quality, and mutual benefit.
              </p>
              <h2 className="dark:text-white  text-2xl font-semibold  text-pink-700 mb-4">Our Vision</h2>
              <p className= "dark:text-gray-300  text-gray-700 leading-relaxed mb-4">
                Our vision is to be a leader in our industry, recognized for our innovative solutions and commitment to customer satisfaction. We aim to continuously improve and expand our offerings to meet the evolving needs of our clients.
              </p>
              <div className="flex justify-center mt-20">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Logo"
                  className="w-24 h-24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;










