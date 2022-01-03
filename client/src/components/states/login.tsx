import * as React from 'react';
import { LoginStatusProps } from '../containers/propContatiner';

export function Login ( { name, email }:LoginStatusProps ) {
    const [isLoggedin, setLogin] = React.useState(false)
    const handleLogin = () => setLogin(true)
    const handleLogout = () => setLogin(false)
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        {isLoggedin &&
            <div> 
            <h2>Welcome back, {name}</h2>
                <ul>
                    <li>Name : {name}</li>
                    <li>ID : {email}</li>
                </ul>
            </div>
        }
        {!isLoggedin &&
         <div>
            <p>You are <b>{name}</b>, Please login first</p>
            <p>ID : {email}</p>
        </div>}
    </div>
  );
}
