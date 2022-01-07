import * as React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/css/navbar.css'

export function Navbar () {
  const [toggle, setToggle] = React.useState<boolean>(false)
  const handleClick = () => setToggle(!toggle)

    // useEffect to add dropdown effect
    React.useEffect(()=>{
        // const dropdownSubs = document.querySelectorAll(".dropdownSub") as NodeListOf<HTMLElement>
        // dropdownSubs.addEventListener()
    }, [])
  return (
    <nav id='navigation' 
         style={{   'position' : 'absolute', 
                    'right' : '0', 
                    'padding' : '2rem', 
                    'width' : 'fit-content', 
                    'height' : '100vh' }}>
        <ul className='navBtns'>
            <li id='closeBtn'   onClick={handleClick} 
                                className={`${toggle ? "toggled" : "notToggled"}`}> &times; </li>
            <li id='triggerBtn' onClick={handleClick}
                                className={`${toggle ? "notToggled" : "toggled"}`}> &#8801; </li>
        </ul>

        <ul className={`mainMenu menu ${toggle ? "toggled" : "notToggled"}`} >
            <Link to={'/'}><li>Main</li></Link>

            <li className='dropdown'>
                <Link to={'/create'}><span>Create</span></Link>
                <ul className={`dropdownSub`}>
                    <li>Draw</li>
                    <li>Pixelate</li>
                    <li>Generate</li>
                </ul>
            </li>

            <Link to={'/gallery'}><li>Gallery</li></Link>
            <Link to={'/shop'}><li>Shop</li></Link>

            <li className='dropdown'>
                <Link to={'/community'}><span>Community</span></Link>
                <ul className='dropdownSub'>
                    <li>Feedback</li>
                    <li>Chatting</li>
                </ul>
            </li>

            <li className='dropdown'>
                <Link to={'/about'}><span>About</span></Link>
                <ul className='dropdownSub'>
                    <li>PawCon</li>
                    <li>Creator</li>
                </ul>
            </li>
            
            <Link to={'/login'}><li>Login/SignUp</li></Link>
        </ul>
    </nav>
  );
}
