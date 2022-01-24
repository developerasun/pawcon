import React from 'react';
import './App.css'
// React router v6
// Outlet : Renders the child route's element, if there is one.
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './components/containers/redux/store'
import { Home } from './components/_home/home'
import { About } from './components/_about/about'
import { Community } from './components/_community/community'
import { Create } from './components/_create/create'
import { Gallery } from './components/_gallery/gallery'
import { Details } from './components/_gallery/details'
import { RenderDetails } from './components/_gallery/renderDetails'
import { Shop } from './components/_shop/shop'
import { Login } from './components/_login/login'
import { SignUp } from './components/_signup/signup'
import { Page404 } from './components/subComponents/page404'
import { Footer } from './components/subComponents/footer'
import { Navbar } from './components/subComponents/navbar'

function App() {
  return (
    // react-redux store
    <Provider store={store}>
      {/* react-router */}
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/community' element={<Community />}/>
            <Route path='/create' element={<Create />}/>

            <Route path='/gallery' element={<Gallery />} />

            { /* Add <Outlet /> component in root route component <Details> 
            to render child component <RenderDetails>*/ }
            <Route path='/details' element={<Details />}>
                <Route path=':title' element={<RenderDetails />} />
            </Route>

            <Route path='/shop' element={<Shop />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='*' element={<Page404 />}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
