import React from 'react';



function Carts({ item }) {
  return (
    <div className="relative z-0 flex justify-center mt-5 mb-5"> 
      <div className="card bg-white border border-gray-200  dark:bg-slate-900 dark:text-white
      w-80 h-45 shadow-lg rounded-lg p-2 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <figure className="flex justify-center">
          <img className="mt-4 rounded-lg h-45 object-cover" src={item.image} alt={item.name} />
        </figure>
        <div className="card-body mt-2">
          <h2 className="card-title text-md font-semibold text-gray-800  dark:bg-slate-900 dark:text-white" >
            {item.name}
            <div className="badge badge-secondary  text-xs font-medium ml-2 px-2 py-1 bg-pink-500 rounded-md">
              {item.category}
            </div>
          </h2>
          <p className="  dark:bg-slate-900 dark:text-white text-gray-600 mt-1 text-sm">{item.title}</p>
          <div className="card-actions flex justify-between items-center mt-3">
            <div className="  dark:bg-slate-900 dark:text-white badge badge-outline text-sm font-semibold text-gray-700">{item.price}</div>
            <button className="  cursor-pointer bg-pink-300 rounded-full border[2px] text-white px-2 py-1  transition-all duration-300 ease-in-out hover:bg-pink-500">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}







export default Carts;
