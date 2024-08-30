import React, { useContext } from 'react'
import style from './Home.module.css'
import MainSlider from '../../component/MainSlider/MainSlider';
import CategorySlider from '../../component/CategorySlider/CategorySlider';
import Products from '../../component/Products/Products';
import { CounterContext } from '../../context/counterContext/CounterContext';
import Loader from '../../component/loader/loader';
export default function Home(props) {
  const{counter,changeCounter}=useContext(CounterContext)
  console.log(props);
  
  return (
    <div className='container'>
 <MainSlider/>
 <CategorySlider/>

 <Products/>
  </div>
    
  )
}
