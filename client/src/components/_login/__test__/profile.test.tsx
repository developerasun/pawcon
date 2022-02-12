import { render, screen } from '@testing-library/react';
import { Profile } from '../profile'

const MockProfile = ( ) => {
    return <Profile />
  }

test('Profile render test', ()=>{
    render(<MockProfile />)
    const liElement = screen.getByRole("list")
    expect(liElement).toBeInTheDocument()
})