import React from 'react';
 import Navbar from './Navbar';
import Footer from './Footer';
import List from '../../public/list.json';
import Carts from './carts';
import { Link } from 'react-router-dom';
function Paidnotes() {
  console.log(List);
  return (
    <>
      {/* <Navbar/> */}

      <div className='  dark:bg-slate-900 dark:text-white min-w-screen min-h-screen 2xl container mx-auto md:px-20 px-4'>
        <div className='  dark:bg-slate-900 dark:text-white
        items-center justify-center text-center'>
          <h1 className='mt-20  dark:bg-slate-950 dark:text-white text-2xl md:text-4xl '>We're welcome to have you{" "}
            <span className='text-pink-700'>Here! :)</span></h1>
          <p className='mt-12'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio iusto similique dignissimos totam officia quasi unde, doloribus minus expedita qui esse beatae illo molestiae sunt corrupti omnis quibusdam quis ratione?
          </p>
       <Link to={"/"}>
       <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
            Back
          </button>
       </Link>
        </div>

        <div className='mt-12 mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 justify-center px-10 py-8'>
          {
            List.map((item) => (
              <div >
                <Carts item={item} key={item.id} />
              </div>
            ))
          }
        </div>
      </div>

      {/* <Footer/> */}
    </>
  );
}

export default Paidnotes;
