import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Login from './Login';
import axios from "axios";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

function Signup() {

const [formData, setFormData] = useState({
  Name: "",
  Email: "",
  Password: "",
});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();


  const onSubmit = async (data) => {
    const userinfo = {
      Name:data.Name,
      Email:data.Email,
      Password:data.Password
    }
    console.log(data);
    await axios.post("http://localhost:5000/Users/saveuser" , userinfo).then((res)=>{
      console.log(data);
      if(res.data){
        // alert("Signup successfully")
        toast.success("Signup successfully")
       
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
      setTimeout(() => {
        // Navigate to the home page after successful signup
        navigate("/");
        
        // window.location.reload();
    })
    }).catch((err)=>{
      if(err.response){
        console.log(err);
        // alert("error: " + err.response.data.message);
        toast.error("error: " + err.response.data.message);
      }
    
    })
  };

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
                  {...register("Name", { required: "Name is required" })}
                />
                {errors.Name && <span className="text-red-500 text-sm">{errors.Name.message}</span>}
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
                  {...register("Email", { required: "Email is required" })}
                />
                {errors.Email && <span className="text-red-500 text-sm">{errors.Email.message}</span>}
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
                  {...register("Password", { required: "Password is required" })}
                />
                {errors.Password && <span className="text-red-500 text-sm">{errors.Password.message}</span>}
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
