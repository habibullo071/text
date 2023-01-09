import React, { useState } from 'react'
import img1 from '../../img/img1.png'
import Users from '../Asosiy/Users (2)'
import './Hero.css'
function Hero() {
  const [value, setValue] = useState('')
  console.log(value);
  const searchItem = (evn) => {
    const data = []
    Users.forEach((e) => {
      console.log(e.name);
      if (e.name.includes(evn)) {
        data.push(e)
      }
    })
    console.log(data);
  }
  return (
    <div className='Hero'>
      <img src={img1} alt="" />
      <div className="qidirish">
        <h4 className='h4'>Qidirish</h4>
        <div className="inpp">
          <input onChange={(e) => setValue(e.target.value)} type="text" className='in' placeholder='Adiblar, kitoblar, audiolar, maqolalar...' />
          <button className='btn'> <i className="bi bi-search"></i> Izlash</button>
        </div>
      </div>
    </div>
  )
}

export default Hero