import React, { useState, useEffect } from 'react'
import CreamSoupImg from '../../Assets/images/Store/Categories/cream_soup.jpg'
import ChorizoImg from '../../Assets/images/Store/Categories/chorizo.jpg'
import PigImg from '../../Assets/images/Store/Categories/pig.jpg'
import ChickenImg from '../../Assets/images/Store/Categories/chicken.jpg'
import FishImg from '../../Assets/images/Store/Categories/fish.jpg'
import BeefImg from '../../Assets/images/Store/Categories/beef.jpg'
import SpecialsImg from '../../Assets/images/Store/Categories/specials.jpg'
import OthersImg from '../../Assets/images/Store/Categories/others.jpg'
import AditionalsImg from '../../Assets/images/Store/Categories/aditionals.jpg'
import DrinksImg from '../../Assets/images/Store/Categories/drinks.jpg'
import Loader from '../../components/Loader'
import FoodCard from '../../components/FoodCard'
import { useDispatch, useSelector } from 'react-redux'
import FoodDetails from '../../components/FoodDetails'
export default function Store({ navBar }) {
    const shopStore = useSelector(store => store.shop);
    const dispatch = useDispatch();

    const executeDispatch = (type, target) => {
        dispatch({
            type: type,
            payload: target
        });
    }

    async function fetchData() {
        try {
            const response = await fetch('comidas.json');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData().then(response => {
            executeDispatch("UPDATE_SHOP_DATA", response.comidas);
        });
    }, [])
    
    return (
        <div id="store_page" className='row'>
            <div className="col-md-3 options-sidebar">
                <span className='Title'>
                    Categorias
                    <div></div>
                </span>
                <div className="categories">
                    <div className="list-food-card">
                        <div className="food-card" style={{ backgroundImage: 'url(' + CreamSoupImg + ')' }}>
                            <div className="bg">
                                <span>Cremas</span>
                            </div>
                        </div>
                        <div className="food-card" style={{ backgroundImage: 'url(' + ChorizoImg + ')' }}>
                            <div className="bg">
                                <span>Entradas</span>
                            </div>
                        </div>
                        <div className="food-card" style={{ backgroundImage: 'url(' + PigImg + ')' }}>
                            <div className="bg">
                                <span>Cerdo</span>
                            </div>
                        </div>
                        <div className="food-card" style={{ backgroundImage: 'url(' + ChickenImg + ')' }}>
                            <div className="bg">
                                <span>Pollo</span>
                            </div>
                        </div>
                        <div className="food-card" style={{ backgroundImage: 'url(' + FishImg + ')' }}>
                            <div className="bg">
                                <span>Pescado</span>
                            </div>
                        </div>
                        <div className="food-card" style={{ backgroundImage: 'url(' + BeefImg + ')' }}>
                            <div className="bg">
                                <span>Carne de res</span>
                            </div>
                        </div>
                        <div className="food-card" style={{ backgroundImage: 'url(' + SpecialsImg + ')' }}>
                            <div className="bg">
                                <span>Especiales</span>
                            </div>
                        </div>
                        <div className="food-card" style={{ backgroundImage: 'url(' + OthersImg + ')' }}>
                            <div className="bg">
                                <span>Otros</span>
                            </div>
                        </div>
                        <div className="food-card" style={{ backgroundImage: 'url(' + AditionalsImg + ')' }}>
                            <div className="bg">
                                <span>Adicionales</span>
                            </div>
                        </div>
                        <div className="food-card" style={{ backgroundImage: 'url(' + DrinksImg + ')' }}>
                            <div className="bg">
                                <span>Bebidas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-9 content">
                <div className="search-bar row">
                    <div className="search-input">
                        <input type="text" name="" id="" placeholder='¿Qué te apetece hoy?' />
                        <ion-icon name="search"></ion-icon>
                    </div>
                </div>
                <div className="food-content row">
                    {
                        shopStore.dataFood == null ? (
                            <Loader />
                        ) : (
                            shopStore.dataFood.map((e, i) => (
                                <>
                                    <FoodCard data={e} key={i} n={i} />
                                </>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}
