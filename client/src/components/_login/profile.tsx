import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../containers/redux/store.hooks';
import { MenuTabs } from '../_community/community';
import './sass/css/profile.css';


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
  const navigate = useNavigate()

  // Get user email from Redux store
  const username = useAppSelector((state)=>state.login.email)

  // add oauth Redux logic here
  const oauthUsername = "something"

  React.useEffect(()=>{
    if (submit) {
      // add oauth logout logic at this route(server)
      fetch('/logout') // Delete JWT for logout
      alert('logout success')
      navigate('/') // client redirect
    }
  }, [submit, navigate])

  React.useEffect(() => {

  }, [])
  
  return (
    <div id='profile'>

      <div id="user">
        <img src="https://i.ibb.co/X4dN67P/jake.webp" alt="profile" width={50}/>
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
