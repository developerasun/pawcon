import * as React from 'react'
import './sass/css/navbar.css'
import { Link } from 'react-router-dom'
import { NavbarStyle } from '../containers/styleContainer'
import { v4 as uuidV4 } from 'uuid'
import { DropDownProps } from '../containers/propContatiner'

const DropDown = ( {mainTitle, subTitle, routing}:DropDownProps ) => {
    return (
        <ul className='dropdown'>
            <Link to={`${routing}`}>{mainTitle}</Link>
            <ul className='dropdownSub deactive'>
                {subTitle.map((item)=>{
                    return <li key={uuidV4()}>{item}</li>
                })}
            </ul>
        </ul>
    )
}

export function Navbar () {
  const [toggle, setToggle] = React.useState<boolean>(false)
  const handleClick = () => setToggle(!toggle)
  
    // useEffect to add dropdown effect
    React.useEffect(()=>{
        const navbarMenu = document.getElementById("menu") as HTMLElement
        const dropdownSubs = document.getElementsByClassName("dropdownSub")
        
        navbarMenu.addEventListener("mouseenter", ()=>{
            Array.from(dropdownSubs).map((item)=>{
                item.classList.remove("deactive")
                item.classList.add("active")
            })
        })

        navbarMenu.addEventListener("mouseleave", ()=>{
            Array.from(dropdownSubs).map((item)=>{
                item.classList.remove("active")
                item.classList.add("deactive")
            })
        })

    }, [])
    
  return (
    <nav id='navigation' 
         style={NavbarStyle.main}>
        <ul className='navBtns'>
            <li id='closeBtn'   onClick={handleClick} 
                                style={toggle ? NavbarStyle.toggleBar.toggle : NavbarStyle.toggleBar.notToggle}> &times; </li>
            <li id='triggerBtn' onClick={handleClick}
                                style={toggle ? NavbarStyle.toggleBar.notToggle : NavbarStyle.toggleBar.toggle}> &#8801; </li>
        </ul>

        <ul id='menu' style={toggle ? NavbarStyle.toggleBar.toggle : NavbarStyle.toggleBar.notToggle}>
            <li><Link to={'/'}>Main</Link></li>
            <li><DropDown mainTitle="Create" subTitle={["Draw", "Pixelate", "Generate"]} routing="/create"/></li>
            <li><Link to={'/gallery'}>Gallery</Link></li>
            <li><Link to={'/shop'}>Shop</Link></li>
            <li><DropDown mainTitle="Community" subTitle={["Feedback", "Chatting"]} routing="/community"/></li>
            <li><DropDown mainTitle="About" subTitle={["PawCon", "Creator"]} routing="/about"/></li>
            <li><Link to={'/login'}>Login/SignUp</Link></li>
        </ul>
    </nav>
  );
}
