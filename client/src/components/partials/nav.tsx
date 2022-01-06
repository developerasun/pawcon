import * as React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/css/navbar.css'
import { NavbarStyle } from '../containers/styleContainer'

export function Navbar () {
  const [toggle, setToggle] = React.useState(false)
  const handleClick = () => setToggle(!toggle)

  return (
    //   basic style is done with sass
    //   style changed with state done with styleContainters. 
    //   later will only be dome with styleContainers
    <nav id='navigation' style={toggle ? NavbarStyle.navigation.toggled 
                                       : NavbarStyle.navigation.notToggled}>
        <ul className='navBtns'>
            <li id='closeBtn'>&times;</li>
            <li id='triggerBtn' onClick={handleClick}>&#8801;</li>
        </ul>
        <ul className={`mainMenu menu`} style={toggle ? NavbarStyle.menu.toggled 
                                                      : NavbarStyle.menu.notToggled}>
            <Link to={'/'}><li>Main</li></Link>

            <li className='dropdown'>
                <Link to={'/create'}><span>Create</span></Link>
                <ul className='dropdown-sub'>
                    <li>Draw</li>
                    <li>Pixelate</li>
                    <li>Generate</li>
                </ul>
            </li>

            <Link to={'/gallery'}><li>Gallery</li></Link>
            <Link to={'/shop'}><li>Shop</li></Link>

            <li className='dropdown'>
                <Link to={'/community'}><span>Community</span></Link>
                <ul className='dropdown-sub'>
                    <li>Feedback</li>
                    <li>Chatting</li>
                </ul>
            </li>

            <li className='dropdown'>
                <Link to={'/about'}><span>About</span></Link>
                <ul className='dropdown-sub'>
                    <li>PawCon</li>
                    <li>Creator</li>
                </ul>
            </li>
            
            <Link to={'/login'}><li>Login/SignUp</li></Link>
        </ul>
    </nav>
  );
}
