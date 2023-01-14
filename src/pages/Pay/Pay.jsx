import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StripeContainer from '../../components/StripeContainer';
import CardBg from '../../Assets/images/Pay/Card.jpg'
import { useState } from 'react';
import FoodCardPay from '../../components/FoodCardPay';

export default function Pay() {
    const ele = useRef();
    const dispatch = useDispatch();
    const shoppingCartStore = useSelector(store => store.shoppingCart);
    const payStore = useSelector(store => store.pay);

    const executeDispatch = (type, target) => {
        dispatch({
            type: type,
            payload: target
        });
    }

    function toStorePage() {
        setTimeout(() => {
            executeDispatch("CHANGE_WINDOW", "STORE")
        }, 500);
        if (payStore.paymentId != null) {
            fetch('http://localhost:4000/cancel-payment', {
                method: 'POST',
                body: JSON.stringify({ client_payment: payStore.paymentId }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => (
                console.log(res.json())
            ));
        }
    }

    function sumTotal() {
        return parseFloat(shoppingCartStore.shoppingList.reduce((total, item) => total + (item.precio * item.units), 0));
    }

    useEffect(() => {
        setTimeout(() => {
            ele.current.style.opacity = 1;
        }, 2);
    }, [])

    return (
        <div id='PayPage' className='row' ref={ele}>
            <div className="btn-return" onClick={() => { toStorePage() }}>
                <ion-icon name="arrow-back-outline"></ion-icon>
                <span>Volver a la tienda</span>
            </div>
            <div id="card-view" className="col-md-3">
                <div className="card" style={{ backgroundImage: 'url(' + CardBg + ')' }}>
                    <div className="wifi">
                        <ion-icon name="wifi-outline"></ion-icon>
                    </div>
                    <div className="numbers">
                        <span>XXXX XXXX XXXX XXXX</span>
                    </div>
                    <div className="name">
                        <span>Tu nombre</span>
                    </div>
                    <div className="data">
                        <div className="dates">
                            <span className="expiry-date">
                                Fecha de vencimiento
                            </span>
                            <div className="date">
                                01/01
                            </div>
                        </div>
                        <div className="logo">
                            <ion-icon name="logo-web-component"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main" className="col-md-9">
                <div className="div-aux row">
                    <div className="col-md-6 form-data-card">
                        <div className="title">
                            <span>Datos de pago</span>
                        </div>
                        <div className="form-custom">
                            <StripeContainer />
                        </div>
                        <div className="aux"></div>
                    </div>
                    <div className="col-md-6 resume">
                        <div className="title">
                            <span>Tu resumen</span>
                        </div>
                        <div className="cart-list">
                            {shoppingCartStore.shoppingList.map((ele, i) => (
                                <FoodCardPay data={ele} key={i} />
                            ))}
                        </div>
                        <div className="billing">
                            <div className="subtotal">
                                <span className='label'>Subtotal </span>
                                <span className='price'>{'$ ' + sumTotal() + ' COP'}</span>
                            </div>
                            <div className="serviceFee">
                                <span className='label'>Tarifa de Servicio </span>
                                <span className='price'>$ 2000 COP</span>
                            </div>
                            <div className="serviceFee" style={{ marginBottom: '24px' }}>
                                <span className='label'>Costo de envío </span>
                                <span className='price'>$ 5000 COP</span>
                            </div>
                            <div className="total">
                                <span className='label'>Total </span>
                                <span className='price'>{'$ ' + (sumTotal() + 7000) + ' COP'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
