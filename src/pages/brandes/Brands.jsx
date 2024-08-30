import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../component/loader/loader';


export default function Brands() {
const[prands,setPrands]=useState({})

  function getPrands(){
    axios.get("https://ecommerce.routemisr.com/api/v1/brands").then((data)=>setPrands(data.data.data)
    ).catch((err)=>console.log(err) )
  }
  useEffect(()=>{
    getPrands()
        },[]
    )
  

    return (
      <div className='container row justify-center'>
        <h1 className='font-bold text-3xl'>ALL PRANDS:</h1>
        
  {prands.length>0?
  
  prands.map((prand)=>(

    <Link className='md:w-1/2 lg:w-1/5 p-4' key={prand._id}>
    <div className="inner w-full h-[200px]">
      <img src={prand.image}className='w-full h-[100%]' alt="" />
    </div>
    <h6>{prand.name}</h6>
    </Link>
  )):<Loader/>
  }
      </div>
    )
  }
  