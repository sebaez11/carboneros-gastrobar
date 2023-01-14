import React from 'react'
import OthersImg from '../Assets/images/Store/Categories/others.jpg'

export default function FoodCardPay({ data }) {
    return (
        <div className='food-card'>
          <div className="food-image" style={{ backgroundImage: 'url(' + OthersImg + ')' }}></div>
          <div className="details">
            <span className='name'>{data.nombre}</span>
            <span className='price'>{'$ ' + data.precio}</span>
            <span className='units'>{data.units==1?(1+' Unidad'):(data.units+' Unidades')}</span>

          </div>
        </div>
      )
}
