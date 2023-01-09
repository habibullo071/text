import React from 'react'
import Asosiy from '../../components/Asosiy/Asosiy'
import Users from '../../components/Asosiy/Users (2)'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import img from '../../img/ornament.png'


import './Adiblar.css'

function Adiblar() {
  return (
    <div className='Adiblar'>
        <img src={img} alt=""  className='bg'/>
        <Navbar/>
        <Hero/>
        <Asosiy/>
    </div>
  )
}

export default Adiblar