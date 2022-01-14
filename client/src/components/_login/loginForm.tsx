import * as React from 'react';
import { Link } from 'react-router-dom';

// login form flow for React Router
// 1) Login get
// 2) Logout get
// 3) Signup get

export function LoginForm () {
  // const [submit, setSubmit] = React.useState(false)
  const [click, setClick] = React.useState(false)
  
  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setClick(true)
    console.log(click)
  }

  // TEST :React to Node Js testing
  React.useEffect(()=> {
    fetch('/login').then((res)=> { res.json() })
    // FIX : something wrong here => data logged undefined
                   .then((data) => console.log(data))
                   .catch((err) => console.log(err))
  }, [click])

  // // User sign up logic
  // React.useEffect(()=> {
  //   const email = document.querySelector("#email") as HTMLInputElement
  //   const password = document.querySelector("#password") as HTMLInputElement
  //   fetch('/signup', {
  //     method: 'POST', 
  //     body: JSON.stringify({
  //       email : email, 
  //       password : password
  //     }), 
  //     headers : { 'Content-Type' : 'application/json' }
  //   })
  // }, [ ]) // add dependency here

  return (
    <div>
      <h2>Join PawCon today!</h2>
      <p>Be the one of the coolest NFT trend setters in seconds.</p>
      <Link to={`/signup`}>LINK : Not signed up yet?</Link>
      <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <input 
                type='email' 
                name='email'
                id='email'      
                placeholder='Enter your eamil'
                required />
          </label> <br />
          <label htmlFor="password">
            <input type='password'  
                name='password'
                id='password'      
                placeholder='Enter your password'
                required />
         </label> <br />
         <button type='submit'>Login</button>
      </form>
    </div>
  );
}
