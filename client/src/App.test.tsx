import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('app test', function() {
  test('should render a title text', () => {
    render(<App />);
    const titleText = screen.getByText(/Best Start For Lazy NFT Creators/i);
    expect(titleText).toBeInTheDocument();
  });
})
