import React from 'react';
import Notes from '../../src/assets/notes.jpg';
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mb-10 md:mb-28 my-10">
        <div className=' order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-28'>
       <div className='space-y-6'>
       <h1 className='text-4xl font-bold mb-12 md:mb-30'>Hello, welcomes here to learn something
            <span className='text-pink-700'>  new everyday!!! </span> 
            </h1>
            <p className='text-xl '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus modi voluptatem perspiciatis iure mollitia impedit repellat magnam labore dolores ab omnis et officiis laborum, qui, obcaecati porro aut eaque soluta.</p>
            <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
       </div>
       <button className="btn mt-6 bg-pink-600 btn-secondary">Secondary</button>
        </div>
        <div className="order-1 w-full md:w-1/2 flex justify-center">
        <img src={Notes}   className="w-81 h-81 mt-12 md:mt-32 rounded-r-3xl md:ml-5" alt="Notes" />
        </div>
      </div>
    </>
  );
}

export default Banner;
