import * as React from 'react'
import { ProfileProps } from '../containers/propContatiner'
import { LoginForm } from './loginForm'
import { Profile } from './profile'
import { RootState } from '../containers/redux/initialStates'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../containers/redux/actionCreators'

// conditional rendering based on login status
export function Login() {
  const [user, setUser] = React.useState<ProfileProps | null>(null)

  // getting state from Redux store : useSelector
  const isLogin = useSelector<RootState>((state) => state.login.isLogin)

  // getting dispatch from Redux store : useDispatch
  const dispatch = useDispatch()

  console.log(isLogin)

  return (
    <>  
      <button onClick={()=>dispatch(login())}>Login test with Redux</button>
      
      {/* if user exists(logged in), render Profile component */}
      {/* if not(logged out / null), render LoginForm component */}
      {isLogin ? <Profile 
                      name={"Jake"}
                      email={"testing@gmail.com"}
                      isLoggedIn={true}/> 
                : <LoginForm />}
    </>
  );
}
