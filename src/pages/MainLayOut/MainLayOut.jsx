import React from 'react'
import Navebar from '../../component/Navebar/Navebar'
import Footer from '../../component/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayOut() {
  return (
    <div>
        <Navebar/>
<Outlet/>
        <Footer/>
    </div>
  )
}
