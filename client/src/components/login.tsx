import * as React from 'react';
import { ProfileProps } from './containers/propContatiner';
import { LoginForm } from './partials/loginPartials/loginForm'
import { Profile } from './partials/loginPartials/profile'
import { Navbar } from './partials/nav';

// conditional rendering based on login status
export function Login() {
  const [user, setUser] = React.useState<ProfileProps | null>(null)
  
  // handleLogin => fetch(GET) user info 
  // handleLogout => reset form  user info
  const handleLogin = () => {
    setUser({name : "Jake", email: "Jake@gmail.com", isLoggedIn:true})
  }
  const handleLogout = () => setUser(null)

  return (
    <div>
      <Navbar />

      {/* if user exists(logged in), render Profile component */}
      {/* if not(logged out / null), render LoginForm component */}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {user?.isLoggedIn===true ? <Profile 
                                    name={user.name}
                                    email={user.email}
                                    isLoggedIn={user.isLoggedIn}/> 
                                : <LoginForm />}
    </div>
  );
}
