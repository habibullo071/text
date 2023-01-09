import React from 'react'
import Asosiy1 from '../../components/Asosiy1/Asosiy1'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import img from '../../img/ornament.png'

import './Kitoblar.css'
function Kitoblar() {
  return (
    <div className='Kitoblar'>
      <img src={img} alt="" className='bg' />
        <Navbar/>
        <Hero/>
        <Asosiy1/>
    </div>
  )
}

export default Kitoblar