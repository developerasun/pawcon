import * as React from 'react'
import './sass/css/navbar.css'
import { Link } from 'react-router-dom'
import { Button } from './button'
import { useAppDispatch, useAppSelector } from '../containers/redux/store.hooks'
import useLocalStorage from '../containers/hooks/useLocalStorage'
import { googleLogin, login } from '../containers/redux/actionCreators'

// $mobile : 576px;
// $tablet : 768px; 
// $desktop : 992px;
type mobileBreakpoints = 576
const mobileSize : mobileBreakpoints = 576

export function Navbar () {
    const [toggle, setToggle] = React.useState<boolean>(false)
    const isLogin = useAppSelector((state) => state.login.isLogin)
    const isGoogleLogin = useAppSelector((state) => state.googleLogin.success)

    // TO DO : persist login status
    const ls = useLocalStorage()
    const isJwtLocal = ls.getLocalItem("jwt")
    const isGoogleLocal = ls.getLocalItem("google")

    const handleClick = () => setToggle(!toggle)
    const handleToggle = () => setToggle(false)

    // detect window size for CSS media query
    React.useEffect(() => {
      window.addEventListener("resize", () => {
        if (window.innerWidth > mobileSize) {
            setToggle(false) //reset toggle state
        }
      }) 
    }, []) // execute once

  return (
    <div id='navigation'>
        <Link to={'/'} className='logoContainer' > 
            {/* change logo to the one with brand name: 'PawCon' */}
            <img src="https://i.ibb.co/YNb4f1s/logo.png" alt="pawcon pirate cat" id='logo'/>
        </Link>
        <ul className='buttons'>
            <li id='close'   
                className={toggle ? 'unfold' : 'fold'}
                onClick={handleClick}> &times; </li>
            <li id='trigger' 
                className={toggle ? 'fold' : 'unfold'}
                onClick={handleClick}> &#8801; </li>
        </ul>
        <div id='menu' onClick={handleToggle}>
          <ul
              id='lists'
              className={toggle ? 'unfold' : 'fold'}>
              <li className='listsItem'><Link to={'/'}>Main</Link></li>
              <li className='listsItem'><Link to={'/create'}>Create</Link></li>
              <li className='listsItem'><Link to={'/gallery'}>Gallery</Link></li>
              <li className='listsItem'><Link to={'/upload'}>Upload</Link></li>
              <li className='listsItem'><Link to={'/community'}>Community</Link></li>
              <li className='listsItem'><Link to={'/about'}>About</Link></li>

              {/* TO DO : fix conditional rendering based on persisting login status */}
              <li className='listsItem'><Link to={'/login'}>{!isLogin && !isGoogleLogin ? "Login" : "Profile"}</Link></li>
              <li className='listsItem'><Button 
                      btnText='Get Started'
                      url='/signup' /></li>
          </ul>
        </div>
    </div>
  );
}
