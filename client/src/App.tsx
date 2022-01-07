import React from 'react';
import './sass/css/reset.css'
// React router v6
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/home'
import { About } from './components/about'
import { Community } from './components/community'
import { Create } from './components/create'
import { Gallery } from './components/gallery'
import { CardDetails } from './components/partials/galleryPartials/cardDetails'
import { Shop } from './components/shop'
import { Login } from './components/login';
import { Page404 } from './components/partials/page404';

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
        <Route path='*' element={<Page404 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
