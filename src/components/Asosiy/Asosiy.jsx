import React, { useState } from 'react'
import './Asosiy.css'
import './Users (2).js'
import Users from './Users (2).js'
import bg from '../../img/Frame.png'
import bd from '../../img/Group.png'
import { Link } from 'react-router-dom'

const arrCategory = []
function Asosiy() {
  const [value]=useState('')
  Users.forEach((e, i) => {
    if (!arrCategory.includes(e.genre))
    arrCategory.push(e.genre);
  })
  const [category, setCategory] = useState(arrCategory[0])
  return (
    <div className='Asosiy'>
      <div className="asosiy">
        <h2 className='h2'>Asosiy kategoriyalar</h2>
        <div className='category__list'>
          {
            arrCategory?.map((item, i) => (
              <button className={category == item?'davr  btn__active':''} onClick={() => setCategory(item)} key={i}>{item}</button>
            ))
          }
        </div>
      </div>
      <Link to='/adibinfo'>
        <ul className='card'>
          {
            Users?.filter((e)=>e.genre == category || e.name == value).map((e, i) => (
              <li key={i} className='card__li'>
                <img src={bg} alt="" className='bd' />
                <img src={bd} alt="" className='b' />

                <img src={e.img} alt=""
                  className='scr' />
                {e.name}
                <h6 className='h6'>{e.born}</h6>
                <li className='foter'>
                  <h6 ><i className="bi bi-book-fill"></i>{e.books} </h6>
                  <h6> <i className="bi bi-headphones"></i>{e.audio}</h6>
                </li>
              </li>
            ))
          }
        </ul>
      </Link>
    </div>
  )
}

export default Asosiy