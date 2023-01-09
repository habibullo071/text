import React from 'react'
import Binfo from '../../components/Binfo/Binfo'
import Navbar from '../../components/Navbar/Navbar'
import './BookInfo.css'
function BookInfo() {
  return (
    <div className='BookInfo'>
        <Navbar/>
        <Binfo/>
    </div>
  )
}

export default BookInfo