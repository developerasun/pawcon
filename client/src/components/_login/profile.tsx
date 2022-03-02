import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../containers/redux/store.hooks';
import { MenuTabs } from '../_community/community';
import Avatar, { genConfig,  } from 'react-nice-avatar'; 
import './sass/css/profile.css';
import { logout } from '../containers/redux/actionCreators';



const Dummy = () => {
  return <>hello I'm dummy component</>
}
const Dummy2 = () => {
  return <>cool dummy</>
}
const Dummy3 = () => {
  return <>hot dummy</>
}

export function Profile () {
  const [submit, setSubmit] = React.useState(false);
  const config = genConfig() // react-nice-avatar package
  const avatar = React.useRef(
  <Avatar  
    sex='man'
    style={{width : '3rem', height : '3rem'}} />)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  // Get user email from Redux store
  const username = useAppSelector((state)=>state.login.email)

  // add oauth Redux logic here
  const oauthUsername = "something"

  React.useEffect(()=>{
    if (submit) {
      // add oauth logout logic at this route(server)
      fetch('/logout') // Delete JWT for logout
      dispatch(logout()) // set login status to false
      console.log("logout clicked")
      alert('logout success')
      navigate('/') // client redirect
    }
  }, [submit, navigate, dispatch])

  return (
    <div id='profile'>
      <div id="user">
        {/* avatar should not change during logout */}
      <span>{avatar.current}</span> 
        <span>Hello, {username}! Welcome back!</span>
        {/* FIX :user setting here */}
        <div id='setting'>
          <span>Personal detail</span>
          <span>Change password</span>
        </div>
        <button id='logoutButton' type="submit" onClick={()=>setSubmit(true)}>Logout</button>
      </div>

      <div id="menus">
        {/* when each menu clicked, it renders corresponding content */}
        <MenuTabs 
        // FIX : add each component later
          components={[<Dummy />, <Dummy2 />, <Dummy3 />]}
          names={['My artworks', 'My Cart', 'My Feedback']} />
      </div>
    </div> 
  );
}
