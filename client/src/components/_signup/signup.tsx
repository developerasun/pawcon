import * as React from 'react';
import './sass/css/signupForm.css'

export interface  SignUpProps {
}

export function SignUp (props:  SignUpProps) {

  const [submit, setSubmit] = React.useState(false)
  const handleSubmit = (event : React.FormEvent) => { 
    event.preventDefault()
    setSubmit(true)
    console.log("tempasdfasdf")
  }

  // // User signup up logic
  React.useEffect(()=> {
    const abortController = new AbortController()
    const email = document.getElementById("email") as HTMLInputElement
    const password = document.getElementById("password") as HTMLInputElement

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
      }).then((data)=>console.log(data))
    }

    // cleanup
    return () => abortController.abort()
  }, [submit]) // add dependency here

  return (
<div className='signupComponent'>
  
  <div className="signupPromotionContainer">
    <h2>Join PawCon today!</h2>
    <p>Be the one of the coolest NFT trend setters in seconds.</p>
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
  </div>

</div>
  );
}
