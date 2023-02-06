import React from 'react'
import { useElements, useStripe, PaymentElement  } from "@stripe/react-stripe-js"

export default function CheckoutForm({ clientSecret }) {
    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const result = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:3000",
                receipt_email:"marlesandres1@gmail.com"
            },
            redirect: 'if_required'
        });

        console.log(result)

        if (result.error) {
            console.log(result.error.message);
        } else {
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
