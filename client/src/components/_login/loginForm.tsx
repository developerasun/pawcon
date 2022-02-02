import * as React from 'react';
import './sass/css/loginForm.css'
import { Link, useNavigate } from 'react-router-dom';
import pawconLogo from '../../assets/img/logo/pawcon-logo.webp'
import googleLogo from '../../assets/img/logo/google-logo.webp'
import githubLogo from '../../assets/img/logo/github-logo.webp'

export function LoginForm () {
  const navigate = useNavigate()
  const [submit, setSubmit] = React.useState(false)
  const handleSubmit = (event : React.FormEvent) => { 
    event.preventDefault()
    setSubmit(true)
    console.log("submitted")
  }

  // // User login up logic
  React.useEffect(()=> {
    const email = document.getElementById("email") as HTMLInputElement
    const password = document.getElementById("password") as HTMLInputElement
    const abortController = new AbortController()
    if (submit) { 

      // replace this part with Axios
      fetch('/login', {
        method: 'POST', 
        body: JSON.stringify({
          email : email.value, 
          password : password.value
        }), 
        headers : { 'Content-Type' : 'application/json' },
        signal : abortController.signal
      }).then((res) => {
        if (res.ok) { return res.json() }
        else console.log(res.json()) // log server error response
      }).then((data)=> {
        console.log(data)
        alert("login success")  
        navigate('/')
      })
    }

  // cleanup
  return () => abortController.abort()
  }, [submit, navigate]) // add dependency here

  return (
    <div className='loginComponent'>
  
      <div className="loginPromotionContainer">
        <h2>Welcome back!</h2>
        <p>Come pat my paw. Twice.</p>
        <img src={pawconLogo} width='200' alt='pawcon logo'/>
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