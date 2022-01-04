import * as React from 'react';
import { Navbar } from './partials/nav';

export interface  CommunityProps {
}

export function Community (props:  CommunityProps) {
  return (
    <div>
      <Navbar />
      <h1>community route</h1>
    </div>
  );
}
