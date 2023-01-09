import React from 'react'
import Ainfo from '../../components/Ainfo/Ainfo'
import Navbar from '../../components/Navbar/Navbar'
import img from '../../img/ornament.png'
import './Adibinfo.css'
function Adibinfo() {
  return (
    <div className='Adibinfo'>
        <Navbar/>
        <Ainfo/>
        <img src={img} alt="" className='alt'/>
    </div>
  )
}

export default Adibinfo