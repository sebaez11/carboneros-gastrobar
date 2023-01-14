import React from 'react'
import OthersImg from '../Assets/images/Store/Categories/others.jpg'
import { useDispatch, useSelector } from 'react-redux'

export default function FoodCartCard({ data }) {
  const dispatch = useDispatch();

  const executeDispatch = (type, target) => {
    dispatch({
      type: type,
      payload: target
    });
  }
  return (
    <div className='food-card'>
      <div className="food-image" style={{ backgroundImage: 'url(' + OthersImg + ')' }}></div>
      <div className="details">
        <span className='name'>{data.nombre}</span>
        <span className='price'>{'$ ' + data.precio}</span>
      </div>
      <div className="controls">
        <div className="btn-modify">
          <div className="buttons-control" onClick={()=>(executeDispatch("UPDATE_OBJECT_TO_SHOPPINGCART",{...data,action:"REMOVE"}))}>
            {data.units == 1 ? (<ion-icon name="trash-outline"></ion-icon>) : (<ion-icon name="remove"></ion-icon>)}
          </div>
          <div className="units">
            <span>{data.units}</span>
          </div>
          <div className="buttons-control" onClick={()=>(executeDispatch("UPDATE_OBJECT_TO_SHOPPINGCART",{...data,action:"ADD"}))}>
            <ion-icon name="add"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  )
}
