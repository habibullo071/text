import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Adibinfo from './pages/Adibinfo/Adibinfo';
import Adiblar from './pages/Adiblar/Adiblar';
import BookInfo from './pages/BookInfo/BookInfo';
import Kitoblar from './pages/Kitoblar/Kitoblar';
import Login from './pages/Login/Login';

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!window.localStorage.getItem('key') !== 'secretKey') { 
      navigate('/')
    }
  },[])
  return (
    <div className="App">
      <div className="contaner">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/adiblar' element={<Adiblar />} />
          <Route path='/kitoblar' element={<Kitoblar />} />
          <Route path='/adibinfo' element={<Adibinfo />} />
          <Route path='/bookinfo' element={<BookInfo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
