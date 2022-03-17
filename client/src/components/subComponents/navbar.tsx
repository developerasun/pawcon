import * as React from 'react'
import './sass/css/navbar.css'
import { Link } from 'react-router-dom'
import { Button } from './button'

export function Navbar () {
    const [toggle, setToggle] = React.useState<boolean>(false)
    const handleClick = () => setToggle(!toggle)
    const handleToggle = () => setToggle(!toggle) // reset navbar once clicked
    
  return (
    <div id='navigation'>
        <Link to={'/'} className='logoContainer' > 
            {/* change logo to the one with brand name: 'PawCon' */}
            <img src="https://i.ibb.co/2tfRH08/pawcon-logo.png" alt="pawcon pirate cat" id='logo'/>
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
                <li><Link to={'/'}>Main</Link></li>
                <li><Link to={'/create'}>Create</Link></li>
                <li><Link to={'/gallery'}>Gallery</Link></li>
                <li><Link to={'/shop'}>Shop</Link></li>
                <li><Link to={'/community'}>Community</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/login'}>Login/SignUp</Link></li>
                <li><Button 
                        btnText='Get Started'
                        url='/signup' /></li>
            </ul>

        </div>
    </div>
  );
}
