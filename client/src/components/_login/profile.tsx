import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileProps } from '../containers/propContatiner';

export function Profile ({ name, email, isLoggedIn }: ProfileProps) {
  const [submit, setSubmit] = React.useState(false);
  const navigate = useNavigate()
  React.useEffect(()=>{
    if (submit) {
      fetch('/logout')

      alert('logout success')
      navigate('/')
    }
  }, [submit, navigate])
  return (
      <ul>
        <li>Hello, {name}. Welcome back!</li>
        <li>ID : {email}</li>
        <button type="submit" onClick={()=>setSubmit(true)}>Logout</button>
      </ul> 
  );
}
