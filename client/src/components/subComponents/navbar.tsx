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
            <Link to={'/'}><li>Main</li></Link>
            <DropDown mainTitle="Create" subTitle={["Draw", "Pixelate", "Generate"]} routing="/create"/>
            <Link to={'/gallery'}><li>Gallery</li></Link>
            <Link to={'/shop'}><li>Shop</li></Link>
            <DropDown mainTitle="Community" subTitle={["Feedback", "Chatting"]} routing="/community"/>
            <DropDown mainTitle="About" subTitle={["PawCon", "Creator"]} routing="/about"/>
            <Link to={'/login'}><li>Login/SignUp</li></Link>
        </ul>
    </nav>
  );
}
