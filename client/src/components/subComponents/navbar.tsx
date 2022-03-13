import * as React from 'react'
import './sass/css/navbar.css'
import { Link } from 'react-router-dom'
import { v4 as uuidV4 } from 'uuid'
import { DropDownProps } from '../containers/C_props'

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
    const handleToggle = () => setToggle(!toggle) // reset navbar once clicked

    // useEffect to add dropdown effect
    React.useEffect(()=>{
        const navbarMenu = document.getElementById("menu") as HTMLElement
        const dropdownSubs = document.getElementsByClassName("dropdownSub")
        
        navbarMenu.addEventListener("mouseenter", ()=>{
            Array.from(dropdownSubs).map((item)=>{
                item.classList.remove("deactive")
                item.classList.add("active")
                return ""
            })
        })

        navbarMenu.addEventListener("mouseleave", ()=>{
            Array.from(dropdownSubs).map((item)=>{
                item.classList.remove("active")
                item.classList.add("deactive")
                return ""
            })
        })

    }, [])
    
  return (
    <div id='navigation'>
        <Link to={'/'} className='logoContainer' > 
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
                <li><DropDown mainTitle="Create" subTitle={["Draw", "Pixelate", "Generate"]} routing="/create"/></li>
                <li><Link to={'/gallery'}>Gallery</Link></li>
                <li><Link to={'/shop'}>Shop</Link></li>
                <li><DropDown mainTitle="Community" subTitle={["Feedback", "Chatting"]} routing="/community"/></li>
                <li><DropDown mainTitle="About" subTitle={["PawCon", "Creator"]} routing="/about"/></li>
                <li><Link to={'/login'}>Login/SignUp</Link></li>
            </ul>
        </div>
    </div>
  );
}
