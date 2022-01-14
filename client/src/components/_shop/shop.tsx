import * as React from 'react';
import { Navbar } from '../subComponents/navbar';

export interface IShopProps {
}

export function Shop (props: IShopProps) {
  return (
    <div>
      <Navbar />
      <h1>shop route</h1>
    </div>
  );
}
