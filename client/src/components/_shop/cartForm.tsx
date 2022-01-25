import * as React from 'react';

export interface ICartFormProps {
}

export function CartForm (props: ICartFormProps) {
  return (
    <div >
        cart here
        {/* added to cart ? Checkout : Add to cart */}
        
        <div className="buttons" style={{"display" : "flex", "flexFlow" : "column nowrap", "maxWidth" : "25%"}}>
          <button>Add to Cart</button>
          <button>Remove from Cart</button>
        </div>
    </div>
  );
}
