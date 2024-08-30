import React from 'react'
import style from './MainSlider.module.css'
import img1 from './../../assets/grocery-banner-2.jpeg'
import img2 from './../../assets/grocery-banner.png'
import img3 from './../../assets/banner-4.jpeg'
import img4 from './../../assets/slider-2.jpeg'
import Slider from 'react-slick'
export default function MainSlider() {
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
    <div className='row'>
      <div className="w-3/4">
     <Slider {...settings}>
     <img src={img1}className='w-full h-[400px]' alt="" />
     <img src={img2}className='w-full h-[400px]' alt="" />
     </Slider>
           </div>
      <div className="w-1/4">
      <div>
        <img src={img3} alt="" className='h-[200px]'/>
      </div>
      <div>
        <img src={img4} alt=""className='h-[200px]' />
      </div>
      </div>
    </div>
  )
}
