/*Librerias */

import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

/*Paginas */

import Home from './pages/Home/Home'
import Store from './pages/Store/Store'

/*Componentes */
import NavBar from './components/NavBar'
import ShoppingCart from './components/ShoppingCart'
import FoodDetails from './components/FoodDetails'

export default function App() {
  const navigationStore = useSelector(store => store.navigation);
  const shoppingCartStore = useSelector(store => store.shoppingCart.isVisible);
  const shopStore = useSelector(store => store.shop.foodDetailsVisible);

  return (
    <>
      <NavBar />
      {navigationStore.actualPage === 'HOME' && (<Home />)}
      {navigationStore.actualPage === 'STORE' && (<Store />)}
      {shoppingCartStore && (<ShoppingCart />)}
      {shopStore && (<FoodDetails />)}
    </>
  )
}


