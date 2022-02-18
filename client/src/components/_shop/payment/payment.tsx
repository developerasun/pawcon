import * as React from 'react';
import { RenderMetaMask } from './metamask'
import { RenderPaypal } from './paypal'

export interface IPaymentProps {
}

export function Payment (props: IPaymentProps) {
    const [method, setMethod] = React.useState("")

    const handleChange = () => {
        const checkout = document.getElementById('checkout') as HTMLSelectElement
        const selected = checkout.options[checkout.selectedIndex].value
        setMethod(selected)
    }

    return (
    <>
    <form id="payment">
        <label htmlFor="termsAndCondition">Terms and condition</label>
        <input type="checkbox" name="terms" id="termsAndCondition" /> I agree to Terms & Conditions
        {/* add metamask and paypal logic here */}
        <select onChange={handleChange} name="checkout" id="checkout">
            <option value="Metamask">Metamask</option>
            <option value="Paypal">Paypal</option>
        </select>
    </form> 
    {method==="Metamask" 
        ? <RenderMetaMask />
        : <RenderPaypal />
    }
    </>
    );
}
