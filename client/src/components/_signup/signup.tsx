import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pawconLogo from '../../assets/img/logo/pawcon-logo.webp'
import './sass/css/signupForm.css'

export function SignUp () {
  const navigate = useNavigate()
  const [submit, setSubmit] = React.useState(false)
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
      fetch('/signup', {
        method: 'POST', 
        body: JSON.stringify({
          email : email.value, 
          password : password.value
        }), 
        headers : { 'Content-Type' : 'application/json' }, 
        signal : abortController.signal
      }).then((res) => {
        if (res.ok) { return res.json()}
      }).then((data)=>{
        console.log(data)
        alert("sign up success")  
        navigate('/')
      })
    }

    // cleanup
    return () => abortController.abort()
  }, [submit]) // add dependency here

  return (
<div className='signupComponent'>
  
  <div className="signupPromotionContainer">
    <h2>Join PawCon today!</h2>
    <p>Be the one of the coolest paw-oneers in seconds.</p>
    <img src={pawconLogo} width='200' alt='pawcon logo'/>
  </div>

  <div className="signupContainer">
    <form 
        className='signupForm'
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
      <button className='signupBtn' type='submit'>Sign up</button>
    </form>
    <Link to={`/login`} className='loginLink'><i><u>Already got account?</u></i></Link>
  </div>

</div>
  );
}
