import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ShoppingCart() {
    const ele = useRef();
    const dispatch = useDispatch();
    const shoppingCartStore = useSelector(store => store.shoppingCart);

    const executeDispatch = (type, target) => {
        dispatch({
            type: type,
            payload: target
        });
    }

    function closeShoppingCart() {
        ele.current.style.opacity = 0;
        setTimeout(() => {
            executeDispatch("TOOGLE_SHOPPINGCART_WINDOW", true);
        }, 500);
    }

    useEffect(() => {
        setTimeout(() => {
            ele.current.style.opacity = 1;
        }, 2);
    }, [])

    return (
        <div id='ShoppingCart' class='row' ref={ele}>
            <div className="col-md-3 main">
                <div className="btn-close" onClick={() => { closeShoppingCart() }}></div>
                <div className="title">
                    <span>Tu carrito de compras <div></div></span>
                </div>
                <div className="food-list">
                    {shoppingCartStore.shoppingList.map((ele, i) => (
                        <span key={i}>{ele.nombre}</span>
                    ))}
                </div>
                <div className="btn-go-to-pay">
                    <div className="btn-trash">
                        <ion-icon name="trash-outline"></ion-icon>
                    </div>
                    <div className="btn-final">
                        Ir a pagar
                    </div>
                </div>
            </div>
        </div>
    )
}
