import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className='flex h-screen items-center justify-center px-4 md:px-0'>
        <div className="w-full max-w-md md:max-w-lg">
          <div className="modal-box dark:bg-slate-900 dark:text-white p-8 overflow-y-auto max-h-[90vh]">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
              <h3 className="text-center mb-6 italic font-extrabold text-3xl text-pink-700 dark:text-white">Signup</h3>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="text-center w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
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
                  className="text-center w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-200 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="text-center w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="w-full bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
              <div className="text-center mt-4">
                <a className="text-sm text-gray-700 dark:text-gray-200" href="#">
                  Already have an Account?{" "}
                  <a 
                    className='underline text-pink-500 hover:text-pink-700 dark:text-pink-300 dark:hover:text-pink-500'
                    onClick={() => document.getElementById("my_modal_3").showModal()}>
                    Login
                  </a>
                  <Login />
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
