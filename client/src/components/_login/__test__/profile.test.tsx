import { render, screen } from '@testing-library/react';
import { Profile } from '../profile'
import { ProfileProps } from '../../containers/propContatiner';

const MockProfile = ( { name, email, isLoggedIn }: ProfileProps) => {
    return <Profile name={name} email={email} isLoggedIn={isLoggedIn}/>
  }

test('Profile render test', ()=>{
    render(<MockProfile name='jake' email='test@gmail.com' isLoggedIn={true}/>)
    const liElement = screen.getByRole("list")
    expect(liElement).toBeInTheDocument()
})