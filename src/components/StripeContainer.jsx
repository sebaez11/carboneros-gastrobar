import React, { useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useSelector,useDispatch } from 'react-redux'

import Loader from './Loader';
const stripePromise = loadStripe('pk_test_51MP5RBCoqsP9nmU79JWcST21pVat2K0WNhY53HeakphZoU4bL7CzZcksxPIsHoTKOQFQfo9iongSJB3X7j8KuVeJ002KNy3Dk4');

export default function StripeContainer() {
    const [clientSecret, setClientSecret] = useState("");
    const shoppingCartStore = useSelector(store => store.shoppingCart);
    const dispatch = useDispatch();

    const executeDispatch = (type, target) => {
        dispatch({
            type: type,
            payload: target
        });
    }

    function sumTotal() {
        return parseFloat(shoppingCartStore.shoppingList.reduce((total, item) => total + (item.precio * item.units), 0));
    }

    async function createPaymentIntent() {
        try {
            const data = {
                amount: sumTotal()
            }
            const response = await fetch('http://localhost:4000/payment', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();
            return result;
        } catch (error) {
            console.error(error);
        }
    }
    

    useEffect(() => {
        createPaymentIntent().then((res) => {
            setClientSecret(res.clientSecret);
            executeDispatch("SET_PAYMENT_ID",res.id)
        })
    }, [])


    return (
        clientSecret == "" ? (
            <Loader />
        ) : (
            <Elements stripe={stripePromise} options={{clientSecret}} >
                <CheckoutForm clientSecret={clientSecret}/>
            </Elements >
        )
    );
}
