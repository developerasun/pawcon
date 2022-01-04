import * as React from 'react';

export interface  LoginFormProps {
}

export function LoginForm (props:  LoginFormProps) {
  return (
    <div>
      <form>
          <label htmlFor="email">
            <input 
                type='email' 
                name='email'
                id='email'      
                placeholder='Enter your eamil'/>
          </label> <br />
          <label htmlFor="password">
            <input type='password'  
                name='password'
                id='password'      
                placeholder='Enter your password'/>
         </label>
      </form>
    </div>
  );
}
