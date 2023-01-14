import React, { useState } from 'react'
import { PaymentElement } from '@stripe/react-stripe-js';
import { useElements, useStripe } from "@stripe/react-stripe-js"

export default function CheckoutForm({ clientSecret }) {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();
        console.log(event)
        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const result = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
                return_url: "http://localhost:3000",
            },
            redirect: 'if_required'
        });

        console.log(result)

        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(result.error.message);
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <span className='span-custom-form'>Nombre completo</span>
                <input className='input-custom-form' type="text" placeholder='Tu nombre' name='cardnameperson' />
                <span className='span-custom-form'>Correo electronico</span>
                <input className='input-custom-form' type="email" placeholder='ejemplo@example.com' name='cardemailperson' />
                <span className='span-custom-form'>Dirección</span>
                <input className='input-custom-form' type="text" placeholder='Avenida 40 No. 40-52' name='numberphoneperson' />
                <span className='span-custom-form'>Numero de telefono</span>
                <input className='input-custom-form' type="number" placeholder='3102623020' name='card-name-person' />
                <span className='span-custom-form'>Elige tu metodo de pago</span>
                <PaymentElement />
                <button id="Button-pay" disabled={!stripe} >Pagar</button>
            </form>
        </>
    )
}
