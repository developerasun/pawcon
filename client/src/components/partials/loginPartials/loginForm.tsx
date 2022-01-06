import * as React from 'react';

export interface  LoginFormProps {
}

export function LoginForm (props:  LoginFormProps) {
  const handleSubmit = () => {

  }
  return (
    <div>
      <h2>Join PawCon today!</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, animi?</p>
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
         </label>
         <button>Login</button>
      </form>
    </div>
  );
}
