import * as React from 'react';
import '../../sass/css/navbar.css'

export function Navbar () {
  return (
    <nav id='navigation'>
        <ul className='mainMenu'>
            <li>Main</li>
            <li className='dropdown'>
                <span>Create</span>
                <ul className='dropdown-sub'>
                    <li>Draw</li>
                    <li>Pixelate</li>
                    <li>Generate</li>
                </ul>
            </li>
            <li>Gallery</li>
            <li>Shop</li>
            <li className='dropdown'>
                <span>Community</span>
                <ul className='dropdown-sub'>
                    <li>Feedback</li>
                    <li>Chatting</li>
                </ul>
            </li>
            <li className='dropdown'>
                <span>About</span>
                <ul className='dropdown-sub'>
                    <li>PawCon</li>
                    <li>Creator</li>
                </ul>
            </li>
        </ul>
        <ul className='loginMenu'>
            <li>Login</li>
            <li>Sign Up</li>
        </ul>
    </nav>
  );
}
