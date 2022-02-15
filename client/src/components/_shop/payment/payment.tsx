import * as React from 'react';
export interface IPaymentProps {
}

export function Payment (props: IPaymentProps) {
    return (
    <div className="payment">
        <p className="total"> CART TOTAL : {129}</p>
        <label htmlFor="terms">
            <input type="checkbox" name="terms" id="terms" /> I agree to Terms & Conditions
        </label>
        <button type="submit" onClick={()=>console.log()}>CHECKOUT</button>
    </div> 
    );
}
