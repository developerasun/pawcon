import * as React from 'react'
import { LoginForm } from './loginForm'
import { Profile } from './profile'
import { RootState, useAppSelector } from '../containers/redux/store.hooks';

export function Login() {
  const isLogin = useAppSelector((state:RootState) => state.login.isLogin)
  const isGoogleLogin = useAppSelector((state: RootState) => state.googleLogin.success)

  return (
    <>  
      {/* if user exists(login with jwt or oauth), render Profile component */}
      {/* if not, render LoginForm component */}
      {isLogin !== true && isGoogleLogin !== true ? <LoginForm/> : <Profile />}
    </>
  );
}
