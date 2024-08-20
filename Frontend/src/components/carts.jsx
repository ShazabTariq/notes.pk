import React from 'react';

function Carts({ item }) {
  return (
    <div className="relative z-0 flex justify-center mt-5 mb-5">
      <div
        className="card bg-white border border-gray-200 dark:bg-slate-900 dark:text-white 
        w-72 h-96 shadow-lg rounded-lg p-2 transition-transform duration-300 ease-in-out transform hover:scale-105"
      >
        <figure className="flex justify-center h-48">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={item.image}
            alt={item.name}
          />
        </figure>
        <div className="card-body mt-2 flex flex-col justify-between h-48">
          <div>
            <h2 className="card-title text-md font-semibold text-gray-800 dark:bg-slate-900 dark:text-white">
              {item.name}
              <div className="badge badge-secondary text-xs font-medium ml-2 px-2 py-1 bg-pink-500 rounded-md">
                {item.category}
              </div>
            </h2>
            <p className="text-gray-600 mt-1 text-sm dark:bg-slate-900 dark:text-white text-ellipsis overflow-hidden">
              {item.title}
            </p>
          </div>
          <div className="card-actions flex justify-between items-center mt-3">
            <div className="badge badge-outline text-sm font-semibold text-gray-700 dark:bg-slate-900 dark:text-white">
              {item.price}
            </div>
            <button className="cursor-pointer bg-pink-300 rounded-full border[2px] text-white px-2 py-1 transition-all duration-300 ease-in-out hover:bg-pink-500">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
