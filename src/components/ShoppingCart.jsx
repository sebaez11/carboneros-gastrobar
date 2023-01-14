import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodCartCard from './FoodCartCard';
export default function ShoppingCart() {
    const ele = useRef();
    const ele2 = useRef();
    const ele3 = useRef();

    const dispatch = useDispatch();
    const shoppingCartStore = useSelector(store => store.shoppingCart);


    const executeDispatch = (type, target) => {
        dispatch({
            type: type,
            payload: target
        });
    }

    function sumTotal() {
        return shoppingCartStore.shoppingList.reduce((total, item) => total + (item.precio * item.units), 0);
    }

    function closeShoppingCart() {
        ele.current.style.opacity = 0;
        setTimeout(() => {
            executeDispatch("TOOGLE_SHOPPINGCART_WINDOW", true);
        }, 500);
    }

    function toPayPage() {
        ele3.current.style.width = '100%';
        ele2.current.style.opacity = 0;
        setTimeout(() => {
            executeDispatch("TOOGLE_SHOPPINGCART_WINDOW", true);
            executeDispatch("CHANGE_WINDOW","PAY")
        }, 500);
    }

    useEffect(() => {
        setTimeout(() => {
            ele.current.style.opacity = 1;
        }, 2);
    }, [])

    return (
        <div id='ShoppingCart' class='row' ref={ele}>
            <div className="transition" ref={ele3} ></div>
            <div className="col-md-3 main" ref={ele2}>
                <div className="btn-close" onClick={() => { closeShoppingCart() }}></div>
                <div className="title">
                    <span>Tu carrito de compras <div></div></span>
                </div>
                <div className="food-list">
                    {shoppingCartStore.shoppingList.map((ele, i) => (
                        <FoodCartCard data={ele} key={i} />
                    ))}
                </div>
                <div className="btn-go-to-pay">
                    <div className="btn-trash">
                        <ion-icon name="trash-outline"></ion-icon>
                    </div>
                    <div className={shoppingCartStore.shoppingList.length == 0 ? ('btn-final disabled') : ('btn-final')} onClick={() => { toPayPage() }}>
                        <span className='span-go-to-pay'>Ir a pagar</span>
                        <span className='subtotal'>Subtotal:
                            <span>
                                {' $ ' + sumTotal()}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
