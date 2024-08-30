import React, { useContext,useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Slider from 'react-slick'
import { Helmet } from 'react-helmet'
import { CarteContext } from '../../context/cartContext/cartContext'
import toast from 'react-hot-toast'

export default function ProductDetails() {
  let {id}= useParams();

 const{addToCart,setNumOfCartItems }= useContext(CarteContext)
 async function addProduct(id) {
 let{data}= await addToCart(id)
 setNumOfCartItems(data.numOfCartItems)

 toast.success(data?.message)

 }
 const[details,setDetails]=useState({});

function getDetails(){
  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`).
  then((data)=>setDetails(data.data.data)
  ).catch((err)=>console.log(err))
}
useEffect(()=>{
  getDetails()
},[])

let settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  autoplay:true
};
  return (
  <div className="container">
    <Helmet>
                <title>{details.title}</title>

            </Helmet>
      <div className='row items-center mt-10'>
  <div className="w-1/4">
  <Slider {...settings}>
{details?.images?.map((image)=>(

<img src={image} alt=""className='w-full h-64 object-contain' /> 
))

}

  </Slider>
  
   </div>
  <div className="w-3/4 px-4">
 <div className="inner">
 <h1 className='text-3xl'>{details.title}</h1>
  <small className='text-slate-500'>{details.description}</small>
<p>{details?.category?.name}</p>
<div className="flex justify-between">
  <p>{details.price}</p>
  <div>{details.ratingsAverage}

  <i className='fa-solid fa-star text-yellow-400'></i>
  </div>
</div>
<button onClick={()=>{addProduct(id)}} className='bg-green-500 w-full p-2 rounded mt-3 text-white'>add to car</button>
 </div>
   </div>


    </div>
  </div>
  )
}
