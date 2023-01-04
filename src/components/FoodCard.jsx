import React from 'react'
import OthersImg from '../Assets/images/Store/Categories/others.jpg'
import { useDispatch } from 'react-redux'

export default function FoodCard({ data, n }) {
    const dispatch = useDispatch();

    const executeDispatch = (type, target) => {
        dispatch({
            type: type,
            payload: target
        });
    }

    return (
        <div className='food-card' onClick={() => { executeDispatch("TOOGLE_FOODDETAILS_WINDOW", n) }}>
            <div className="food-image" style={{ backgroundImage: 'url(' + OthersImg + ')' }}></div>
            <div className="food-text">
                <span className="title">
                    {data.nombre}
                </span>
                <span className="descripcion">
                    {data.descripcion}
                </span>
                <span className="precio">
                    {'$ ' + data.precio}
                </span>
            </div>
        </div>
    )
}
