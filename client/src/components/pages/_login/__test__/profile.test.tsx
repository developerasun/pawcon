import { render, screen } from '@testing-library/react';
import { Profile } from '../profile'

// should mock React-Redux app
// TO DO : read jest docs for mocking details
describe('temp test', function() {
  test.skip('Profile render test', function(){
      render(< Profile />)
      const greeting = screen.getByText(/Welcome/)
      expect(greeting).toEqual("Welcome")
  })
})