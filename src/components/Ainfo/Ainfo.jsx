import React, { useContext } from 'react'
import './Ainfo.css'
import adib from '../../img/adib.png'
import kitob from '../../img/kitob.png'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'
function Ainfo() {
    const { item} = useContext(Context)
    console.log(item);
    return (
        <div className='Ainfo'>
            <div className="left">
                <img src={adib} alt="" className='katta' />
                <div className="yon">
                    <div className="left__left">
                        <p>Tavallud sanasi</p>
                        <h6 className='h7'>5-Avg 1941</h6>
                        <p>Toshkent, Uzbekistan</p>
                    </div>
                    <br />
                    <div className="left_right">
                        <p>Vafot etgan sanasi</p>
                        <h6 className='h7'>24-MAY 2013</h6>
                        <p> Uzbekistan</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="matn">
                    <h2>O’tkir Hoshimov</h2>
                    <p>Oʻtkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi Chilonzor) tumanidagi Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika kulliyotida oʻqish bilan baravar gazeta tahririyatida ishladi. 1959 yildan 1963 yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”, “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih, tarjimon boʻlib ishladi. Soʻng “Toshkent haqiqati” gazetasida adabiy xodim (1963–1966), “Toshkent oqshomi” gazetasida boʻlim mudiri (1966–1982), Gʻ. Gʻulom nomidagi Adabiyot va sanʼat nashriyotida bosh muharrir oʻrinbosari (1982–1985) boʻldi. 1985–1995 yillarda “Sharq yulduzi” jurnaliga bosh muharrirlik qildi. 1995 yildan 2005 yilgacha Oʻzbekiston Respublikasi Oliy Majlisining Matbuot va axborot qoʻmitasi raisi lavozimida ishladi. 2005 yildan “Teatr“ jurnalida bosh muharrir boʻlib ishladi.</p>
                </div>
                <div className="ijodi">
                    <i className="bil bi-bookmark-fill"></i>
                    <h3>IJODI</h3>
                    <p>Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.</p>
                </div>
                <div className="asarlari">
                    <h2 >ASARLARI</h2>
                    <Link to='/bookinfo'>
                        <ul className='rasm'>
                            <li className='car__li'>
                                <img src={kitob} alt=""
                                    className='scr' />
                                <h6 className='h6'>Dunyoning ishlari</h6>
                                <li className='foter'>
                                    <h6 className='h8'><i class="bi bi-star-fill"> </i>
                                        <p className=''>4.1 • 3400 ta fikrlar</p></h6>
                                </li>
                            </li>
                        </ul>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Ainfo