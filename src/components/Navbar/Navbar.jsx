import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../img/img1.svg'






import './Navbar.css'
function Navbar() {
    return (
        <div className='navbar'>
            <h3 className='h3'>Badiiyat</h3>
            <ul className='ul'>
                <Link to='/adiblar'><li className='li'>Bosh sahifa</li></Link>
                <Link to='/kitoblar'><li className='li'>Kitoblar</li></Link>
                <li className='li'>Nazm</li>
                <li className='li'>Maqolalar</li>
                <li className='li'>Maqolalar</li>
            </ul>
            <img src={img1} alt="" className='img1' />
            <Link to='/' >

                <div className="logOut">
                    <i className="bi bi-box-arrow-right"></i>
                </div>
            </Link>
       
       
       
       
       
       
       
       
       
       
       
       
       
        </div>

    )
}

export default Navbar