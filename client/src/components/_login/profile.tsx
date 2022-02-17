import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../containers/redux/store.hooks';

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

  return (
    // add some style here : user avatar // dashboard
      <ul>
        <li>Hello, {username}. Welcome back!</li>
        <button type="submit" onClick={()=>setSubmit(true)}>Logout</button>
      </ul> 
  );
}
