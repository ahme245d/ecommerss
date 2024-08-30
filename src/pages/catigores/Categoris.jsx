import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../../component/loader/loader';
import { Link } from 'react-router-dom';
import { data } from 'autoprefixer';
import Slider from 'react-slick';

export default function Categoris() {
const[categoris,setCategoris]=useState([])
const[categoryDetail,setCategoryDetail]=useState({})
    function getCategoris(){
axios.get("https://ecommerce.routemisr.com/api/v1/categories").then((data)=>setCategoris(data.data.data)
).catch((err)=>console.log(err));

    }

    useEffect(()=>{
getCategoris()
    },[]
)
function categoryDetails(id){
    axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`).
    then((data)=>setCategoryDetail(data.data.data)
    ).catch((err=>console.log(err)
    ))
}
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
    <div className='container row justify-center'>
{categoris.length>0?



categoris.map((category)=>(

    // to={`/CategorisDetails/${category._id}`}

    <div onClick={() => categoryDetails(category._id)} className='md:w-1/1 lg:w-1/3 p-4' key={category._id}><div className="inner w-full h-[200px] cart ">
    <img src={category.image}className='w-full rounded h-[100%]' alt="" />
    </div>
    <div class="p-5 text-center ">
      
       <h1 className='text-bold text-2xl text-green-700'>{category.name}</h1>
    </div>
    </div>

//   <Link to={`/CategorisDetails/${category._id}`} className='md:w-1/2 lg:w-1/5 p-4 bg-red-500' key={category._id}>
//   <div className="inner w-full h-[200px]">
//     <img src={category.image}className='w-full h-[100%]' alt="" />
//   </div>
//   <h6>{category.name}</h6>
//   </Link>
)):<Loader/>
}




 <div className='w-full '><h1 className='border m-4 border-2 w-1/6 '>{categoryDetail[0]?.name}</h1>
  </div>



{console.log(categoryDetail[0]?.name)}




    </div>
    
  )
}
