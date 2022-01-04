import * as React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/css/navbar.css'

export function Navbar () {
  return (
    <nav id='navigation'>
        <ul className="navBtns">
            <li id='closeBtn'>&times;</li>
            <li id='triggerBtn'>&#8801;</li>
        </ul>
        <ul className='mainMenu menu'>
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

        </ul>
        <ul className='loginMenu menu'>
            <Link to={'/login'}><li>Login</li></Link>
            <Link to={'/signup'}><li>Sign up</li></Link>
        </ul>
    </nav>
  );
}
