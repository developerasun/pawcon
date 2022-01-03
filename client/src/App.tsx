import React from 'react';
import logo from './logo.svg';
import './sass/css/reset.css'
// React router v6
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/home'
import { About } from './components/about'
import { Community } from './components/community'
import { Create } from './components/create'
import { Gallery } from './components/gallery'
import { Shop } from './components/shop'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/community' element={<Community />}/>
        <Route path='/create' element={<Create />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/shop' element={<Shop />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
