import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import List from '../../public/list.json';
import Carts from './carts';




function FreeNotes() {
  const filterData = List.filter((data) => data.category === 'free');

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-screen-xl   dark:bg-slate-900 dark:text-white container mx-auto py-8 md:px-12 px-6 mt-16">
      <div className="text-center mb-8  dark:bg-slate-900 dark:text-white">
        <h1 className="font-bold text-2xl text-gray-800  dark:bg-slate-900 dark:text-white">Free Notes and Books</h1>
        <p className="text-gray-600 mt-2  dark:bg-slate-900 dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel accusantium tenetur deleniti illo quae unde!
        </p>
      </div>
      <div className="slider-container relative z-0  dark:bg-slate-900 dark:text-white"> 
        <Slider {...settings}>
          {filterData.map((item) => (
            <Carts item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}




export default FreeNotes;
