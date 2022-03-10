import * as React from 'react';
import './sass/css/profile.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../containers/redux/store.hooks';
import { MenuTabs } from '../_community/community';
import Avatar, { genConfig,  } from 'react-nice-avatar'; 
import { googleLogout, logout } from '../containers/redux/actionCreators';
import { API_DEV } from '../containers/C_apiUrl';

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
  const [submit, setSubmit] = React.useState(false)
  const [submitGoogle, setSubmitGoogle] = React.useState(false)
  const config = genConfig() // react-nice-avatar package
  const avatar = React.useRef( // FIX : change hard-coded value later
  <Avatar  
    sex='man'
    style={{width : '3rem', height : '3rem'}} />)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  // Get user email from Redux store
  const username = useAppSelector((state)=>state.login.email)

  // add oauth Redux logic here
  const oauthUsername = useAppSelector((state)=> state.googleLogin.username)

  const handleSumbit = () =>{
    setSubmit(true)
  }

  const handleLogout = () => {
    // JWT logout : '/logout'
    console.log("jwt logout clicked")
    fetch(API_DEV.logout) // Delete JWT for logout
    dispatch(logout()) // set login status to false
    alert('jwt logout success')
    navigate('/')
  }
  
  const handleGoogleLogout = () => {
    // google logout : '/oauth/logout'
    fetch(API_DEV.oauth.google.logout)
    dispatch(googleLogout())
    alert('google logout success')
    navigate('/')
  }
  
  React.useEffect(()=>{
    if (submit) {
      handleLogout()
    }
    if (submitGoogle) {
      handleGoogleLogout()
    }
  }, [submit, submitGoogle, navigate, dispatch])
 
  return (
    <div id='profile'>
      <div id="user">
        {/* avatar should not change during logout */}
        <span>{avatar.current}</span> 
        <span>Hello, { username !== "guest" ? username : oauthUsername }! Welcome back!</span>
        {/* FIX :user setting here */}
        <div id='setting'>
          <span>Personal detail</span>
          <span>Change password</span>
        </div>
        { 
          username !== "guest"
          ? <button 
              className='logoutButton' 
              type='submit' 
              onClick={handleSumbit}>Logout</button>
          : <button 
              className='logoutButton'
              type='submit'
              onClick={handleGoogleLogout}>Logout</button>
        }

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
