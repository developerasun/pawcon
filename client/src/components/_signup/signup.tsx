import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_DEV } from '../containers/C_apiUrl';
import './sass/css/signupForm.css'
import { LoginValidationError } from '../_login/loginForm'

export function SignUp () {
  const navigate = useNavigate()
  const [submit, setSubmit] = React.useState(false)
  const [validationErr, setValidationErr] = React.useState<LoginValidationError>()

  const handleSubmit = (event : React.FormEvent) => { 
    event.preventDefault()
    setSubmit(true)
    console.log("submitted")
  }

  // // User signup up logic
  React.useEffect(()=> {
    const abortController = new AbortController()
    const email = document.getElementById("email") as HTMLInputElement
    const password = document.getElementById("password") as HTMLInputElement

    // replace this part with Axios
    if (submit) { 
      fetch(API_DEV.signup, {
        method: 'POST', 
        body: JSON.stringify({
          email : email.value, 
          password : password.value
        }), 
        headers : { 'Content-Type' : 'application/json' }, 
        signal : abortController.signal
      }).then(async (res) => {
        // check if the id is created, status code should be synced with server
        if (res.status === 201) { return res.json() } 
        if (res.status === 400) {
          const error = await res.json()
          setValidationErr(error)
        }
      }).then((data)=>{
        console.log(data) // data object includes success property(set by server)
        if (data.success) { 
          alert("sign up success")  
          navigate('/')
        } 
      }).catch((err) => {
        console.log(err)
      })
    }

    // cleanup
    return () => abortController.abort()
  }, [submit, navigate]) // add dependency here

  return (
<div className='signupComponent'>
  
  <div className="signupPromotionContainer">
    <h2>Join PawCon today!</h2>
    <p>Be NFT Paw-oneers in seconds.</p>
    <img src={"https://i.ibb.co/bvCbscp/paw-login.webp"} width='200' alt='pawcon logo'/>
  </div>

  <div className="signupContainer">
    <form 
        className='signupForm'
        onSubmit={handleSubmit}>
      <label htmlFor="email">
        <input 
          className={
            validationErr ?
            validationErr.errorMessage.includes("email") ?
            'emailError' : ''
            : '' }
          type='email' 
          name='email'
          id='email'      
          placeholder='Eamil address'
          required />
      </label>
      <label htmlFor="password">
        <input 
          className={
            validationErr ?
            validationErr.errorMessage.includes("Password") ? // case sensitive, can't use reg exp
            'passwordError' : ''
            : '' }
          type='password'  
          name='password'
          id='password'      
          placeholder='Password'
          required />
      </label> 
      <span style={validationErr && {"color": "darkred" , "fontWeight" : "bold"}}>
        {validationErr ? validationErr.errorMessage : "Please sign up first"}
      </span>
      <button className='signupBtn' type='submit'>Sign up</button>
    </form>
    <Link to={`/login`} className='loginLink'><i><u>Already got account?</u></i></Link>
  </div>

</div>
  );
}
