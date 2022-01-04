import * as React from 'react';
import { LoginForm } from './partials/loginPartials/loginForm'
import { Profile } from './partials/loginPartials/profile'
import { Navbar } from './partials/nav';

// export interface ILoginProps {
//   loginStatus : boolean
//   component : React.ComponentType
// }

// conditional rendering based on login status
export function Login () {
  const [loginStatus, setLoginStatus] = React.useState(false)
  const handleLogin = () => setLoginStatus(true)
  const handleLogout = () => setLoginStatus(false)

  return (
    <div>
      <Navbar />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {loginStatus===true ? <Profile /> : <LoginForm />}
    </div>
  );
}
