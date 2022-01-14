import React from 'react';
import './App.css'
// React router v6
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/_home/home'
import { About } from './components/_about/about'
import { Community } from './components/_community/community'
import { Create } from './components/_create/create'
import { Gallery } from './components/_gallery/gallery'
import { CardDetails } from './components/_gallery/cardDetails'
import { Shop } from './components/_shop/shop'
import { Login } from './components/_login/login';
import { SignUp } from './components/_signup/signup';
import { Page404 } from './components/subComponents/page404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/community' element={<Community />}/>
        <Route path='/create' element={<Create />}/>

        <Route path='/gallery' element={<Gallery />}>
          {/* route parameter for CardDetails => id */}
          <Route path=":id" element={<CardDetails />} />
        </Route>

        <Route path='/shop' element={<Shop />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='*' element={<Page404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
