import * as React from 'react';
import './sass/css/loginForm.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../containers/redux/store.hooks';
import { login } from '../containers/redux/actionCreators';

export function LoginForm () {
  const [submit, setSubmit] = React.useState(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch() // typed dispatch 

  const handleSubmit = (event : React.FormEvent) => { 
    event.preventDefault()
    setSubmit(true)
    console.log("submitted")
  }

  // JWT login logic
  React.useEffect(()=> {
    const email = document.getElementById("email") as HTMLInputElement
    const password = document.getElementById("password") as HTMLInputElement
    const abortController = new AbortController()
  
    if (submit) { 
      // HTTP POST request
      fetch('/login', {
        method: 'POST', 
        body: JSON.stringify({
          email : email.value, 
          password : password.value
        }), 
        headers : { 'Content-Type' : 'application/json' },
        signal : abortController.signal

      // Get server response, set login Redux state
      }).then((res) => {
        if (res.ok) { 
          // if login success, dispatch user email to Redux store
          dispatch(login(email.value))
          return res.json() 
        }
        else console.log(res.json()) // log server error response

      // Redirect user
      }).then((data)=> {
        // FIX : add email & password validation here 
        console.log(data)
        alert("login success")  
        navigate('/')
      })
    }

  // cleanup
  return () => abortController.abort()
  }, [submit, navigate, dispatch])

  return (
    <div className='loginComponent'>
  
      <div className="loginPromotionContainer">
        <h2>Welcome back!</h2>
        <p>Find your paw-sibility here.</p>
        <img src={"https://i.ibb.co/bvCbscp/paw-login.webp"} width='200' alt='pawcon logo'/>
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
              {/* FIX : add redux login status logic here, 
              NOTE : should redirect to Google Oauth */}
              <a href="http://localhost:3001/oauth/google" className='googleLogin'>
                <img  src={"https://i.ibb.co/m997sdM/google-logo.webp"} 
                      alt="google logo" 
                      id='googleLogo'
                      loading='lazy' />
              </a>
            </li>
            <li>
              {/* fix link later */}
              <a href="www.github.com" className='githubLogin'>
                <img  src={"https://i.ibb.co/jzGQ70Z/github-logo.webp"} 
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