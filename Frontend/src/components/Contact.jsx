import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFax } from "react-icons/fa";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Navbar/>
      <div className='  flex flex-col items-center   dark:bg-slate-900 dark:text-white justify-center px-4 md:px-0 '>
      <div className="relative flex flex-wrap w-full max-w-3xl justify-between mb-8 mt-28">
  <div className="dark:text-gray-300 dark:bg-slate-600 w-full sm:w-40 h-40 bg-slate-200 hover:bg-slate-300 flex flex-col items-center justify-center text-center p-4 shadow-lg rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-125 mb-4 sm:mb-0">
    <FaMapMarkerAlt className="text-3xl text-pink-700 mb-2 dark:text-white dark:bg-slate-600"/>
    <h4 className="font-bold text-lg text-pink-700 dark:text-white dark:bg-slate-600">Location</h4>
    <p>Faisalabad, Punjab</p>
  </div>
  <div className="dark:text-gray-300 dark:bg-slate-600 w-full sm:w-40 h-40 bg-slate-200 hover:bg-slate-300 flex flex-col items-center justify-center text-center p-4 shadow-lg rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-125 mb-4 sm:mb-0">
    <FaPhoneAlt className="dark:text-white dark:bg-slate-600 text-3xl text-pink-700 mb-2"/>
    <h4 className="dark:text-white dark:bg-slate-600 font-bold text-lg text-pink-700">Phone</h4>
    <p>+92 309---450</p>
  </div>
  <div className="dark:text-gray-300 dark:bg-slate-600 w-full sm:w-40 h-40 bg-slate-200 hover:bg-slate-300 flex flex-col items-center justify-center text-center p-4 shadow-lg rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-125 mb-4 sm:mb-0">
    <FaEnvelope className="dark:text-white dark:bg-slate-600 text-3xl text-pink-700 mb-2"/>
    <h4 className="dark:text-white dark:bg-slate-600 font-bold text-lg text-pink-700">Email</h4>
    <p>shazab------@gmail.com</p>
  </div>
  <div className="dark:text-gray-300 dark:bg-slate-600 w-full sm:w-40 h-40 bg-slate-200 hover:bg-slate-300 flex flex-col items-center justify-center text-center p-4 shadow-lg rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-125">
    <FaFax className="dark:text-white dark:bg-slate-600 text-3xl text-pink-700 mb-2"/>
    <h4 className="dark:text-white dark:bg-slate-600 font-bold text-lg text-pink-700">Fax</h4>
    <p>+92305----300</p>
  </div>
</div>

        <div className="w-full max-w-2xl h-auto p-8 bg-white dark:bg-slate-900 shadow-lg">
          <h3 className="text-center mb-6 italic font-extrabold text-3xl text-pink-700 dark:text-white">Contact Us</h3>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="text-center w-full px-4 py-3 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                id="name"
                type="text"
                placeholder="Enter your Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="text-center w-full px-4 py-3 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="text-center w-full px-4 py-3 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                id="message"
                placeholder="Enter your message"
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
            </div>
            <div className="flex items-center justify-center">
              <button
                className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send 
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
