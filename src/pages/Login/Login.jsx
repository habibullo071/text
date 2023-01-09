import React from 'react'
import { useNavigate } from 'react-router-dom'
import login from '../../img/login.svg'
import './Login.css'
const data = [
    {
        id: 1,
        userName: 'ali',
        password: 345
    },
    {
        id: 2,
        userName: 'vali',
        password: 321
    },
    {
        id: 3,
        userName: 'habibullo',
        password: 123
    },
]
function Login() {
    const navigate = useNavigate()
    const loginHandler = (evn) => {
        evn.preventDefault()
        let userName = evn.target.elements.username.value
        let password = evn.target.elements.password.value
        for (let i = 0; i < data.length; i++){
            if (data[i].userName === userName && data[i].password === parseInt(password)) {
                window.localStorage.setItem('key', 'secretKey')
                break
            } 
        }

            if (window.localStorage.getItem('key') == 'secretKey') {
                navigate('/adiblar')
            }
    }
    return (
        <div className='Login'>
            <div className="birbalo">
                <img src={login} alt="" className='login__img' />
            </div>
            <form className="form-control w-25 m-auto" action='#' onSubmit={loginHandler}>
                <input type="text" className='form-control mt-3' placeholder='username' name='username' />
                <input type="number" className='form-control mt-3' placeholder='password' name='password' />
                <button type='submit' className='bnt btn_success form-control w-20 mt-3 m-auto'>Next stop</button>
            </form>

        </div>
    )
}

export default Login