import * as React from 'react';
import { CartForm } from './cartForm';

export interface IShoppingCartProps {
}

// TO DO: create a pop
export function ShoppingCart (props: IShoppingCartProps) {
  return (
    <div>
      <CartForm />
    </div>
  );
}
