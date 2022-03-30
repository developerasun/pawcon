import * as React from 'react';
import './sass/css/profile.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../containers/redux/store.hooks';
import { MenuTabs } from '../_community/community';
import Avatar, { genConfig,  } from 'react-nice-avatar'; 
import { googleLogout, logout } from '../../containers/redux/actionCreators';
import { API_DEV } from '../../containers/C_apiUrl';
import { Button } from '../../subComponents/button';
import useLocalStorage from '../../containers/hooks/useLocalStorage';

const Dummy = () => {
  return <>show what user liked among gallery items</>
}
const Dummy2 = () => {
  return <>show what user bought from gallery</>
}
const Dummy3 = () => {
  return <>show user feedbacks if left</>
}

// TO DO : add file upload for user profile changes
export function Profile () {
  const [submit, setSubmit] = React.useState(false)
  const [submitGoogle, setSubmitGoogle] = React.useState(false)
  const config = genConfig() // react-nice-avatar package
  const avatar = React.useRef( // FIX : change hard-coded value later
  <Avatar  
    id='avatar'
    sex='man'
    style={{width : '8rem', height : '8rem'}} />)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const ls = useLocalStorage()
  
  // Get users from Redux store
  const jwtUsername = useAppSelector((state)=>state.login.email)
  const oauthUsername = useAppSelector((state)=> state.googleLogin.username)

  const handleLogout = React.useCallback(
    () => {
      // JWT logout : '/logout', Delete JWT for logout
      console.log("jwt logout clicked")
      fetch(API_DEV.logout, {
        method: 'DELETE'
      })
        .then((res) => res.json())
        .then((data)=> {
          if (data.success) { 
            console.log("jwt logout success : ",data)
            dispatch(logout()) // set login status to false
            ls.removeOneLocal("jwt")
            alert('jwt logout success')
            navigate('/')
          }  
        })
        .catch((err)=>console.log(err))
    },
    [dispatch, navigate],
  )
  
  const handleGoogleLogout = React.useCallback( () => {
    // google logout : '/oauth/logout'
    fetch(API_DEV.oauth.google.logout, {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then((data)=> {
        if (data.success) { 
          console.log("google logout success : ",data.success)
          dispatch(googleLogout())
          ls.removeOneLocal("google")
          alert('google logout success')
          navigate('/')
        }
      })
      .catch((err)=>console.log(err))
  }, [dispatch, navigate]
  )
  
  React.useEffect(()=>{
    if (submit) {
      handleLogout()
    }
    if (submitGoogle) {
      handleGoogleLogout()
    }  // make sure to include all dependencies, otherwise client request won't work
  }, [submit, submitGoogle, handleLogout, handleGoogleLogout])
  
  return (
    <div id='profile'>
      <div id="userSettings">

        <div id="greetings">
          {/* avatar should not change during logout */}
          {avatar.current} 
          <span>Welcome back, { jwtUsername !== "guest" ? jwtUsername : oauthUsername }!</span>
          <span>Plan here : e.g free, premium </span>
          <div className="buttons">
            <Button
              // FIX : change url later
              url='/'
              btnText='Edit profile' />
              <Button
              // TO DO : add sign out logic later
              url='/'
              btnText='Close account' />
            <Button 
              btnText='Logout'
              callback={
                jwtUsername !== "guest" 
                ? () => setSubmit(true)
                : () => setSubmitGoogle(true)} />
          </div>
        </div>

        <div id='controls'>
          {/* add grid style here */}
          <span className='gridItem'>Preferences</span>
          <span className='gridItem'>Change password</span>
          <span className='gridItem'>aaa</span>
          <span className='gridItem'>bbb</span>
          <span className='gridItem'>ccc</span>
          <span className='gridItem'>dddd</span>
        </div>

      </div>

      <div id="userMenuTabs">
        <MenuTabs 
        // FIX : add each component later
          components={[<Dummy />, <Dummy2 />, <Dummy3 />]}
          names={['Liked', 'Purchased', 'Contributed']} />
      </div>
      
    </div> 
  );
}
