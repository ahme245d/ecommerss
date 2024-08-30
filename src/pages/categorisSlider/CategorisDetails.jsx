import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useFetcher, useParams } from 'react-router-dom'

export default function CategorisDetails() {
const[categoryDetals,setCategoryDetals]=useState({})
 let {id}= useParams()
 console.log(id);
 
 function getcatigoresDetails(){
  axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`).
  then((data)=>setCategoryDetals(data.data.data)
  ).catch((err)=>console.log(err)
  )
 }
 useEffect(()=>{
    getcatigoresDetails()
  },[]
 )
  return (
    <div className='container flex justify-center '>
      <div className="w-2/3 h-[400px]">
      <img src={categoryDetals.image} className='w-90% h-[90%]' alt="" />
      </div>
      <div className="w-1/3">
       <h1>name:{categoryDetals.name}</h1>
       <h1>createdAt:{categoryDetals.createdAt}</h1>
      </div>
    </div>
  )
}
