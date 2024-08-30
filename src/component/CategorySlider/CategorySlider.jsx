import React, { useEffect, useState } from 'react'
import style from './CategorySlider.module.css'
import axios from 'axios'
import { data } from 'autoprefixer';
import Slider from 'react-slick';
export default function CategorySlider() {

  const[categories,setCategories]=useState([]);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows:false,
  autoplay:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};




function getCategores(){
  axios.get("https://ecommerce.routemisr.com/api/v1/categories")
  .then((data) =>setCategories(data.data.data))
  .catch((err)=>console.log(err))
  
}
useEffect(()=>{
  getCategores()
  
    },[])

  return (

  <div className='my-5 py-4 '>
    <h2 className='text-2xl font-bold mb-2'>shop popular categories</h2>
      <Slider {...settings}>
        {categories.map((categoriy)=>
        
        <div className="h-[250px]"key={categoriy._id}>
<img src={categoriy.image} className='h-full' alt="" />
<h2>{categoriy.name}</h2>
        </div>
        )}
    {/* <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
    <div>
      <h3>5</h3>
    </div>
    <div>
      <h3>6</h3>
    </div> */}
  </Slider>
  </div>
  )
}
