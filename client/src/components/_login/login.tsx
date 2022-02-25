import * as React from 'react'
import { LoginForm } from './loginForm'
import { Profile } from './profile'
import { RootState, useAppSelector } from '../containers/redux/store.hooks';

export function Login() {
  const isLogin = useAppSelector((state:RootState) => state.login.isLogin)

  // FIX : check oauth status
  React.useEffect(() => {
    console.log('value of isLogin is : ', isLogin)
  }, [isLogin])

  return (
    <>  
      {/* if user exists(login with jwt or oauth), render Profile component */}
      {/* if not, render LoginForm component */}
      {isLogin
                ? <Profile/> 
                : <LoginForm />}
    </>
  );
}
