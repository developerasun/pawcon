import * as React from 'react';
import { Navbar } from '../subComponents/navbar';
import { CartForm } from './cartForm';
import { CartList } from './cartList';

export interface IShopProps {
}

export function Shop (props: IShopProps) {
  return (
    <div>
      <h1>shop route</h1>
        shoppable items list here
      <br /><br /><br /><br />

      <CartForm />
      <br /><br /><br /><br />
      <CartList />
    </div>
  );
}
