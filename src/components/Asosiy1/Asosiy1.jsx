import React, { useState } from 'react'
import './BooksObj.js'
import './Asosiy1.css'
import bookObj from './BooksObj.js'
import { Link } from 'react-router-dom'
function Asosiy1() {
    return (
        <div className='Asosiy1'>
            <div className="asosiy">
                <h2 className='h2'>Asosiy kategoriyalar</h2>
                <ul className='temuriy'>
                    <li className='temuriy__'>Temuriylar davri </li>
                    <li className='temuriy__'>Jadid adabiyoti </li>
                    <li className='temuriy__'>Sovet davri </li>
                    <li className='temuriy__'>Mustaqillik davri</li>
                </ul>
            </div>
            <Link to='/bookinfo '> 
                <ul className='rasm'>
                    {
                        bookObj?.map((e,i) => (
                            <li key={i} className='car__li'>
                                <img src={e.img} alt=""
                                    className='scr' />
                                {e.nameBook}
                                <h6 className='h6'>{e.name}</h6>
                                <li className='foter'>
                                    <h6 ><i className="bi bi-star-fill"> </i>{e.comments} </h6>
                                </li>
                            </li>

                        ))
                    }
                </ul>
            </Link>
        </div>
    )
}

export default Asosiy1