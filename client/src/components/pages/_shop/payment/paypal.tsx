import * as React from 'react';
import { Button } from '../../../subComponents/button';

export interface IRenderPaypalProps {
}

export function RenderPaypal (props: IRenderPaypalProps) {
  const handleClick = () => {
    // add paypal API here
  }
  return (
    <div>
      <Button 
        callback={handleClick}
        btnText='Checkout Paypal'>
      </Button>
    </div>
  );
}
