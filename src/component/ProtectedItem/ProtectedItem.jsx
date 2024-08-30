import React, { useContext } from 'react'
import style from './ProtectedItem.module.css'
import { CarteContext } from '../../context/cartContext/cartContext'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function ProtectedItem({products}) {
const{addToCart , setNumOfCartItems }=  useContext(CarteContext);

async function addProduct(id){
let {data}= await addToCart(id)

setNumOfCartItems(data.numOfCartItems)
toast.success(data?.message)
}
  return (
    <div className='relative inner product relative p-3 w-full md:w-1/3 lg:w-1/6'>
    {" "}
<Link   to={`/ProductDetails/${products._id}`} key={products._id}>
  <img src={products.imageCover} alt="" />
  <p className=' mt-2 text-green-500'>{products.category.name}</p>
  <h6 className='font-bold my-3'>{products.title.split(" ").slice(0,2).join(" ")}</h6>
  <div className='row justify-between'>
    <p >{products.price}EGP</p>
    <div className='text-slate-500'>
      <i className='fa-solid fa-star text-yellow-300'></i>
      <span>{products.ratingsAverage}</span>
    </div>
  </div>
</Link>
  <button className=' rounded text-white btn' onClick={()=>{addProduct(products.id)}}>+</button>

    </div>
  )
}
