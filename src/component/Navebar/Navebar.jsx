import React, { useContext } from 'react'
import style from './Navebar.module.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { CounterContext } from '../../context/counterContext/CounterContext'
import { userContext } from '../../context/userContext/userContext'
import Home from '../../pages/Home/Home'
import Cart from '../../pages/Cart/Cart'
import ProductDetails from '../../pages/ProductDetails/ProductDetails'
import { CarteContext } from '../../context/cartContext/cartContext'

import logo from './../../assets/freshcart-logo.svg'

export default function Navebar() {

 let {counter}= useContext(CounterContext)

 let navigate=useNavigate()

const {userToken , setUserToken}= useContext(userContext);
const{numOfCartItems}= useContext(CarteContext)
function logOut(){
  localStorage.removeItem('userToken');
  setUserToken(null);
  navigate('login')
}
  return (
    <div >

    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={'/'}
         class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} class="h-8" alt="Flowbite Logo" />
           
        </Link>
    
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
    
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <div className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            {
      userToken&&<>      <li>
      <Link to={""} class=" py-2 px-3" aria-current="page">
      Home
      </Link>
    </li>
  <li>
      <Link to={"Cart"} class=" py-2 px-3" aria-current="page">
      cart
      </Link>
      <span className='relative'>
      <i className='fa-solid inline text-2xl mx-2 fa-cart-shopping text-green-500'></i> 
       <span className='absolute -top-3 text-white right-0 bg-black rounded-full w-4 h-4 flex justify-center items-center'>
         {numOfCartItems}
       </span>
      </span>
    </li>
  <li>
      <Link to={"Product"} class="py-2 px-3" aria-current="page">
      Products
      </Link>
    </li>
  <li>
      <Link to={"/Categoris"} class="py-2 px-3" aria-current="page">
      Catigores
      </Link>
    </li>
  <li>
      <Link to={"/Brands"} class="py-2 px-3" aria-current="page">
      Brands
      </Link>
    </li>
    </>
    }
            </div>
            <li>
              <Link href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
              <i className='fa-brands fa-facebook'></i>
              </Link>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> <i className='fa-brands fa-instagram'></i></a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> <i className='fa-brands fa-twitter'></i></a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> <i className='fa-brands fa-youtube'></i></a>
            </li>
        {userToken?<>
          <li>
              <button class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={() => logOut()}>logout</button>
            </li>
        </>:<>
            <li>
              <Link to='login' class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">login</Link>
            </li>
            <li>
              <Link to='register' class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"> register</Link>
            </li>
        </>}
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}
