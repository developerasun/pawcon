import * as React from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar';

export interface ILayoutProviderProps {
    children : React.ReactNode
}

export function LayoutProvider ({children}: ILayoutProviderProps) {
  return (
    <div>
    <Navbar />
        {children}
    <Footer />
    </div>
  );
}
