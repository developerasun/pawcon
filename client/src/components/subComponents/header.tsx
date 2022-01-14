import * as React from 'react';
import { Navbar } from './navbar';
import logo from '../../assets/img/logo/pawcon-logo.png';

export function Header() {
  return (
    <header>
      <img id="logo" 
           src={logo} 
           loading='lazy'
           alt="pawcon logo" 
           style={{ "width" : 50, "height" : 50 }}/>
      <Navbar />
    </header>
  );
}
