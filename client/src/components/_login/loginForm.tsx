import * as React from 'react';
import './sass/css/loginForm.css'
import { Link } from 'react-router-dom';
import googleLogo from '../../assets/img/logo/google-logo.webp'
import githubLogo from '../../assets/img/logo/github-logo.webp'
import { ImgBanner } from '../subComponents/banner';

// login form flow for React Router
// 1) Login get
// 2) Logout get
// 3) Signup get

export function LoginForm () {

  const [submit, setSubmit] = React.useState(false)
  const handleSubmit = (event : React.FormEvent) => { 
    event.preventDefault()
    setSubmit(true)
    console.log("tempasdfasdf")
  }

  // // User login up logic
  React.useEffect(()=> {
    const email = document.getElementById("email") as HTMLInputElement
    const password = document.getElementById("password") as HTMLInputElement
    if (submit) { 
      fetch('/login', {
        method: 'POST', 
        body: JSON.stringify({
          email : email.value, 
          password : password.value
        }), 
        headers : { 'Content-Type' : 'application/json' }
      }).then((res) => {
        if (res.ok) { return res.json()}
      }).then((data)=>console.log(data))
    }

  }, [submit]) // add dependency here

  return (
    <div className='loginComponent'>
  
      <div className="loginPromotionContainer">
        <h2>Welcome back, Paw-ioneer!</h2>
        <p>Be the one of the coolest NFT trend setters in seconds.</p>
      </div>

      <div className="loginContainer">
        <form 
            className='loginForm'
            onSubmit={handleSubmit}>
          <label htmlFor="email">
            <input 
                type='email' 
                name='email'
                id='email'      
                placeholder='Eamil address'
                required />
          </label>
          <label htmlFor="password">
            <input type='password'  
                name='password'
                id='password'      
                placeholder='Password'
                required />
          </label> 
          <button className='loginBtn' type='submit'>Login</button>
        </form>


        <ul className="oAuthContainer">
          <li className='title'>Login with</li>
          <ul className='oAuths'>
            <li>
              <a href="" className='googleLogin'>
                <img  src={googleLogo} 
                      alt="google logo" 
                      id='googleLogo'
                      loading='lazy' />
              </a>
            </li>
            <li>
              <a href="" className='githubLogin'>
                <img  src={githubLogo} 
                      alt="github logo" 
                      id='githubLogo'
                      loading='lazy' />
              </a>
            </li>
          </ul>
        </ul>
        <Link to={`/signup`} className='signupLink'><i><u>Not signed up yet?</u></i></Link>

      </div>

    </div>
  );
}