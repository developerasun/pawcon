import * as React from 'react'
import { LoginForm } from './loginForm'
import { Profile } from './profile'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../containers/redux/actionCreators'
import { RootState } from '../containers/redux/store.hooks';
import { Cookies } from 'react-cookie';
import { cookieList } from '../containers/cookieContainer'

// conditional rendering based on login status
export function Login() {
  const cookie = new Cookies()
  console.log(cookie.get(cookieList.LOGIN)) // undefined if not logged in
  const loginCookie = cookie.get(cookieList.LOGIN)

  // getting state from Redux store : useSelector
  const isLogin = useSelector<RootState>((state) => state.login.isLogin)

  // getting dispatch from Redux store : useDispatch
  const dispatch = useDispatch()

  console.log(isLogin)

  return (
    <>  
      <button onClick={()=>dispatch(login())}>Login test with Redux</button>
      
      {/* if user exists(jwt cookie exists), render Profile component */}
      {/* if not, render LoginForm component */}
      {loginCookie!==undefined 
                ? <Profile 
                      name={"Jake"}
                      email={"testing@gmail.com"}
                      isLoggedIn={true}/> 
                : <LoginForm />}
    </>
  );
}
