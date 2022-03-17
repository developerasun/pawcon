import * as React from 'react';
import './sass/css/loginForm.css'
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../containers/redux/store.hooks';
import { login } from '../../containers/redux/actionCreators';
import { API_DEV } from '../../containers/C_apiUrl';
import { LoginValidationError } from '../../containers/C_props';
import useLocalStorage from '../../containers/hooks/useLocalStorage';

export function LoginForm () {
  const [submit, setSubmit] = React.useState(false)
  const [validationErr, setValidationErr] = React.useState<LoginValidationError>()

  const navigate = useNavigate()
  const dispatch = useAppDispatch() // typed dispatch 
  const ls = useLocalStorage() // custom hook

  const handleSubmit = (event : React.FormEvent) => { 
    event.preventDefault()
    setSubmit(true)
    console.log("submitted")
  }

  const handleGoogleLogin = (event: React.MouseEvent) => {
    event.preventDefault()
    console.log("google login clicked")

    // sessionStorage is used to check if user logined by Google. 
    // since server redirects to root once login is succeeded 
    // and client loose its current state by the redirecting, 
    // contains a login checkpoint in session to validate. 
    // sessionStorage.setItem("googleLogin", "true")
    ls.setLocalItem("googleLogin", "true")
    window.location.replace(API_DEV.oauth.google.url) // redirect
  }

  const hasError = () => {
    let result = ''
    if (validationErr) {
      if (validationErr.errorMessage.includes("email")) {
        result = 'emailError';
      }
      if (validationErr.errorMessage.includes("password")) {
        result = 'passwordError';
      }
    }
    return result
  }

  // JWT login logic
  React.useEffect(()=> {
    const email = document.getElementById("email") as HTMLInputElement
    const password = document.getElementById("password") as HTMLInputElement

    if (submit) { 
      setSubmit(false) // make resubmission possible
      // HTTP POST request
      fetch(API_DEV.login, {
        method: 'POST', 
        body: JSON.stringify({
          email : email.value, 
          password : password.value
        }),
        headers : { 'Content-Type' : 'application/json' },
        credentials:'include' // A string indicating whether credentials will be sent with the request(for cookie) 
      }).then(async (res) => {
        if (res.status === 200) {return res.json()} // password correct, login success
        if (res.status === 401) { // password incorrect
          const error = await res.json() // get error object from server
          setValidationErr(error) 
        }
      }).then((data)=> {
        console.log(data) // data object includes success property(set by server)
        if (data.success) {
          alert("login success")  
          // Get server response, set login Redux state
          dispatch(login(data._doc.email)) // server response object when success
          navigate('/')
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }, [submit, navigate, dispatch])

  return (
    <div className='loginComponent'>
  
      <div className="loginPromotionContainer">
        <h2>Welcome back!</h2>
        <p>Find your paw-sibility here.</p>
        <img src={"https://i.ibb.co/cyjB9pX/new-user.png"} loading='lazy' width={'200'} alt='welcome user'/>
      </div>

      <div className="loginContainer">
        <form 
            className='loginForm'
            onSubmit={handleSubmit}>

          <span
            className='callToAction'
            style={validationErr && {"color": "darkred" , "fontWeight" : "bold"}}>
              {validationErr ? '' : "Please Login First."}
          </span>

          <div className="emailField">
            <label htmlFor="email"> Email </label>
              {/* add validaiton failure style */}
            <input 
              className={hasError()}
              type='email' name='email' id='email'      
              placeholder='Enter your email'
              required />
            <span>
              { validationErr 
                ? validationErr.errorMessage.includes("email") 
                ? validationErr.errorMessage : ''
                : '' }
            </span> 
          </div>

          <div className="passwordField">
            <label htmlFor="password"> Password </label>
            <input 
              className={hasError()}
              type='password' name='password' id='password'      
              placeholder='Enter your password'
              required />
            <span>
                { validationErr 
                  ? validationErr.errorMessage.includes("password") 
                  ? validationErr.errorMessage : ''
                  : '' }
            </span>
          </div>

          <button className='loginBtn' type='submit' name='loginButton'>Login</button>
        </form>

        <ul className="oAuthContainer">
          <li className='title'>Login with</li>
          <ul className='oAuths'>
            <li>
              <img
                onClick={handleGoogleLogin}
                style={{"cursor" : "pointer"}}
                src={"https://i.ibb.co/m997sdM/google-logo.webp"} 
                alt="google logo" 
                id='googleLogo'
                loading='lazy' />
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