/*
       /$$                               /$$                                                                               
      | $$                              | $$                                                                               
  /$$$$$$$  /$$$$$$  /$$    /$$ /$$$$$$ | $$  /$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$  /$$$$$$   /$$$$$$$ /$$   /$$ /$$$$$$$ 
 /$$__  $$ /$$__  $$|  $$  /$$//$$__  $$| $$ /$$__  $$ /$$__  $$ /$$__  $$ /$$__  $$|____  $$ /$$_____/| $$  | $$| $$__  $$
| $$  | $$| $$$$$$$$ \  $$/$$/| $$$$$$$$| $$| $$  \ $$| $$  \ $$| $$$$$$$$| $$  \__/ /$$$$$$$|  $$$$$$ | $$  | $$| $$  \ $$
| $$  | $$| $$_____/  \  $$$/ | $$_____/| $$| $$  | $$| $$  | $$| $$_____/| $$      /$$__  $$ \____  $$| $$  | $$| $$  | $$
|  $$$$$$$|  $$$$$$$   \  $/  |  $$$$$$$| $$|  $$$$$$/| $$$$$$$/|  $$$$$$$| $$     |  $$$$$$$ /$$$$$$$/|  $$$$$$/| $$  | $$
 \_______/ \_______/    \_/    \_______/|__/ \______/ | $$____/  \_______/|__/      \_______/|_______/  \______/ |__/  |__/
                                                      | $$                                                                 
                                                      | $$                                                                 
                                                      |__/                                                                 
*/
import './App.css'
// React router v6
// Outlet : Renders the child route's element, if there is one.
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './components/containers/redux/store'
import { Home } from './components/pages/_home/home'
import { About } from './components/pages/_about/about'
import { Community } from './components/pages/_community/community'
import { Create } from './components/pages/_create/create'
import { Gallery } from './components/pages/_gallery/gallery'
import { Details } from './components/pages/_gallery/details'
import { RenderDetails } from './components/pages/_gallery/renderDetails'
import { Shop } from './components/pages/_shop/shop'
import { Login } from './components/pages/_login/login'
import { SignUp } from './components/pages/_signup/signup'
import { Page404 } from './components/subComponents/page404'
import { LayoutProvider } from './components/subComponents/layoutProvider'

function App() {
  return ( 
    // react-redux store
    <Provider store={store}>
      {/* react-router */}
      <BrowserRouter>
        {/* navbar and footer */}
        <LayoutProvider>
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
        </LayoutProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
