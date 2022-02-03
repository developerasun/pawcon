import * as React from 'react'
import { LoginForm } from './loginForm'
import { Profile } from './profile'
import { Cookies } from 'react-cookie';
import { cookieList } from '../containers/cookieContainer'

export function Login() {
  const cookie = new Cookies()
  console.log(cookie.get(cookieList.LOGIN)) // undefined if not logged in
  const loginCookie = cookie.get(cookieList.LOGIN) // use cookie for conditional rendering

  return (
    <>  
      {/* if user exists(jwt cookie exists), render Profile component */}
      {/* if not, render LoginForm component */}
      {loginCookie!==undefined 
                ? <Profile/> 
                : <LoginForm />}
    </>
  );
}
