/*Librerias */

import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function NavBar() {
  const navigationStore = useSelector(store => store.navigation.actualPage);
  const dispatch = useDispatch();

  const executeDispatch = (type, target) => {
    dispatch({
      type: type,
      payload: target
    });
  }

  return (
    <div id='NavBar' className={navigationStore === "STORE" ? ('expand'):(null)} >
      <div className="name" onClick={() => { executeDispatch("CHANGE_WINDOW", "HOME") }}>
        <span >CARBONEROSS</span>
      </div>
      <div className="pages">
        <ul>
          <li onClick={() => { executeDispatch("CHANGE_WINDOW", "HOME") }}>Inicio</li>
          <li onClick={() => { executeDispatch("CHANGE_WINDOW", "WEARE") }}>¿Quienes Somos?</li>
          <li onClick={() => { executeDispatch("CHANGE_WINDOW", "CONTACT") }}>Contacto</li>
        </ul>
      </div>
      <div className="shop" onClick={() => { executeDispatch("TOOGLE_SHOPPINGCART_WINDOW", true) }}>
        <ion-icon name="cart"></ion-icon>
      </div>
    </div>
  )
}
