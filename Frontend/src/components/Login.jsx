import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link 
                to="/" 
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById('my_modal_3').close()}
              >
                ✕
              </Link>
              <div className="text-center mb-6">
                <h3 className="italic font-extrabold text-2xl text-pink-700 dark:text-white">Login</h3>
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
                <div className="text-right mt-3 mb-1">
                  <a className="underline text-sm text-pink-500 hover:text-pink-700 dark:text-pink-300 dark:hover:text-pink-500" href="#">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="flex items-center md:ml-10 justify-between">
                <button
                  className="w-96 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
              <div className="text-center mt-4">
                <a className="text-sm text-gray-700 dark:text-gray-200" href="#">
                  Not Registered?{" "}
                  <Link 
                    to="/Signup"
                    className="underline text-pink-500 hover:text-pink-700 dark:text-pink-300 dark:hover:text-pink-500"
                    onClick={() => document.getElementById('my_modal_3').close()}
                  >
                    Signup Here
                  </Link>
                </a>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
