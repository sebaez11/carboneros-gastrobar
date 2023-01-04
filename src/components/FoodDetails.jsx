import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OthersImg from '../Assets/images/Store/Categories/others.jpg'

export default function FoodDetails() {
    const ele = useRef();
    const dispatch = useDispatch();
    const shopStore = useSelector(store => store.shop);
    const data = shopStore.dataFood[shopStore?.actualElement];
    function closeElement() {
        ele.current.style.opacity = 0;
        setTimeout(() => {
            executeDispatch("TOOGLE_FOODDETAILS_WINDOW", null);
        }, 500);
    }

    const executeDispatch = (type, target) => {
        dispatch({
            type: type,
            payload: target
        });
    }

    function addToCart(){
        ele.current.style.opacity = 0;
        setTimeout(() => {
            executeDispatch("ADD_OBJECT_TO_SHOPPINGCART",{...data,units:1});
            executeDispatch("TOOGLE_FOODDETAILS_WINDOW", null);
        }, 500);
    }

    useEffect(() => {
        setTimeout(() => {
            ele.current.style.opacity = 1;
        }, 2);
    }, [])

    return (
        <div id="FoodDetails" className='row' ref={ele}>
            <div className="col-md-3 main">
                <div className="btn-close" onClick={() => { closeElement() }}></div>
                <div className="details">
                    <div className="food-photo" style={{ backgroundImage: 'url(' + OthersImg + ')' }}></div>
                    <div className="title">
                        <span>{data.nombre}</span>
                    </div>
                    <div className="description">
                        <span className='sub-title'>
                            Descripcion:
                        </span>
                        <span>
                            {data.descripcion}
                        </span>
                    </div>
                    <div className="precio">
                        <span className='sub-title'>
                            Precio:
                        </span>
                        <span>
                            {'$ '+data.precio}
                        </span>
                    </div>
                </div>
                <div className="btn-add-to-cart">
                    <div className="btn-trash">
                        <ion-icon name="trash-outline"></ion-icon>
                    </div>
                    <div className="btn-final" onClick={()=>(addToCart())}>
                        Añadir al carrito
                    </div>
                </div>
            </div>
        </div>
    )
}
