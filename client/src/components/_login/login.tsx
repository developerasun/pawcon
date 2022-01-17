import * as React from 'react'
import { ProfileProps } from '../containers/propContatiner'
import { LoginForm } from './loginForm'
import { Profile } from './profile'
import { Navbar } from '../subComponents/navbar';

// conditional rendering based on login status
export function Login() {
  const [user, setUser] = React.useState<ProfileProps | null>(null)
  const tempLogin = false

  return (
    <>
      {/* if user exists(logged in), render Profile component */}
      {/* if not(logged out / null), render LoginForm component */}
      {tempLogin ? <Profile 
                      name={"Jake"}
                      email={"testing@gmail.com"}
                      isLoggedIn={true}/> 
                : <LoginForm />}
    </>
  );
}
