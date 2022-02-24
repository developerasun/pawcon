import * as React from 'react';
import { RenderMetaMask } from './metamask'
import { RenderPaypal } from './paypal'
import '../sass/css/payment.css'
export function Payment () {
    const [method, setMethod] = React.useState("Metamask") // payment default is Metamask
    const handleClick = ({currentTarget : { id }}: React.MouseEvent) => { setMethod(id) }

    return (
    <>
    <div
        id='payment' 
        className="payment">
        <div id="texts">
            <span>Payment Method</span>
            <p>Please select a preferable payment method</p>
        </div>
        <div id="methods">
            <label htmlFor="Metamask" className='labels'>
                <img src="https://i.ibb.co/Qchvsh4/metamask-logo.webp" alt="metamask logo" id='metamaskLogo' />
                <input type="radio" name="payment" id="Metamask" onClick={(e)=>handleClick(e)} />
            </label>
            <label htmlFor="Paypal" className='labels'>
                <img src="https://i.ibb.co/GQFC9dH/paypal-logo.webp" alt="paypal logo" id='paypalLogo' />
                <input type="radio" name="payment" id="Paypal" onClick={(e)=>handleClick(e)} />
            </label>
        </div>
        <div id="buttons">
            {method==="Metamask" 
                ? <RenderMetaMask />
                : <RenderPaypal />
            }
        </div>
    </div>

    </>
    );
}
