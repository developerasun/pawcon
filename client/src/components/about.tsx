import * as React from 'react';
import { Navbar } from './partials/nav';

export interface IAboutProps {
}

export function About (props: IAboutProps) {
  return (
    <div>
      <Navbar />
      <h1>about page</h1>
    </div>
  );
}
