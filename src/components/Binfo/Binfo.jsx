import React from 'react'
import './Binfo.css'
import korkma from '../../img/img.png'
import naqsh from '../../img/naqsh.png'
function Binfo() {
    return (
        <div className='Binfo'>
            <div className="main">
                <img src={korkma} alt="" />
                <div className="main__right">
                    <h2>QORQMA</h2>
                    <h6>
                        Javlon Jovliyev
                        <i className="bib bi-star-fill"></i>
                        4.1
                    </h6>
                    <p>Sahifalar soni:    <b>376</b> </p>
                    <p>Chop etilgan:    <b>2021</b> </p>
                    <p>Janri:     <b>Tarixiy</b> </p>
                    <p>Nashriyot   <b>Nihol Nashri</b> </p>
                    <img src={naqsh} alt="" className='naqsh' />
                    <div className="main__right__footer">

                    </div>
                    <div className="fd">
                        <h6>To’liq ma’lumot  <i class="bi bi-arrow-down"></i> <div className="iv"></div></h6>
                        <p>Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади.
                            <br /><br />

                            Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.</p>
                        <div className="l">
                            <b className='lo'>Mavjud formatlar</b>
                            <ul className='or'>
                                <li>
                                    <i className="bio bi-book-fill"></i><br />
                                    Qogoz kitob <br />
                                    27 000som
                                </li>
                                <li>
                                    <i className="bio bi-headphones"></i><br />
                                    Audiokitob <br />
                                    6:23soat
                                </li>
                                <li>
                                    <i className="bio bi-journal"></i><br />
                                    Elektron <br />
                                    pdf,epuh
                                </li>
                            </ul>
                            <button className='button'>Javonga qo’shish </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="main__footer">

            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default Binfo