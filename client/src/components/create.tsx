import * as React from 'react';
import { Navbar } from './partials/nav';

export interface ICreateProps {
}

export function Create (props: ICreateProps) {
  return (
    <div>
      <Navbar />
      <h1>create page</h1>
    </div>
  );
}
