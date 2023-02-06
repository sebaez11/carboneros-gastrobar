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
export default function Store({ navBar }) {
    const shopStore = useSelector(store => store.shop);
    const dispatch = useDispatch();
    const [categories, setCategories] = useState({
        current: null
    });
    const [search, setSearch] = useState(null);

    function changeCategorie(cat) {
        if (categories.current == cat) {
            setCategories({ current: null })
        } else {
            setCategories({ current: cat })
        }
    }

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
                        <div className="food-card" style={{ backgroundImage: 'url(' + CreamSoupImg + ')' }} onClick={() => (changeCategorie("Cremas"))}>
                            <div className="bg">
                                <span>Cremas</span>
                            </div>
                        </div>
                        <div className="food-card" style={{ backgroundImage: 'url(' + ChorizoImg + ')' }} onClick={() => (changeCategorie("Entradas"))}>
                            <div className="bg">
                                <span>Entradas</span>
                            </div>
                        </div>
                        <div className="food-card" style={{ backgroundImage: 'url(' + PigImg + ')' }} onClick={() => (changeCategorie("Cerdo"))}>
                            <div className="bg">
                                <span>Cerdo</span>
                            </div>
                        </div>
                        <div className="food-card" style={{ backgroundImage: 'url(' + ChickenImg + ')' }} onClick={() => (changeCategorie("Pollo"))}>
                            <div className="bg">
                                <span>Pollo</span>
                            </div>
                        </div>
                        <div className="food-card" style={{ backgroundImage: 'url(' + FishImg + ')' }} onClick={() => (changeCategorie("Pescado"))}>
                            <div className="bg">
                                <span>Pescado</span>
                            </div>
                        </div>
                        <div className="food-card" style={{ backgroundImage: 'url(' + BeefImg + ')' }} onClick={() => (changeCategorie("Carne de res"))}>
                            <div className="bg">
                                <span>Carne de res</span>
                            </div>
                        </div>
                        <div className="food-card" style={{ backgroundImage: 'url(' + SpecialsImg + ')' }} onClick={() => (changeCategorie("Especiales"))}>
                            <div className="bg">
                                <span>Especiales</span>
                            </div>
                        </div>
                        <div className="food-card" style={{ backgroundImage: 'url(' + OthersImg + ')' }} onClick={() => (changeCategorie("Otros"))}>
                            <div className="bg">
                                <span>Otros</span>
                            </div>
                        </div>
                        <div className="food-card" style={{ backgroundImage: 'url(' + AditionalsImg + ')' }} onClick={() => (changeCategorie("Adicionales"))}>
                            <div className="bg">
                                <span>Adicionales</span>
                            </div>
                        </div>
                        <div className="food-card" style={{ backgroundImage: 'url(' + DrinksImg + ')' }} onClick={() => (changeCategorie("Bebidas"))}>
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
                        <input type="text" name="" id="" placeholder='¿Qué te apetece hoy?' onChange={(e) => (setSearch(e.target.value))} />
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
                                    {categories.current == null ? (
                                        search==null || e.nombre.toLowerCase().includes(search.toLowerCase())?(
                                            <FoodCard data={e} key={i} n={i} />
                                        ):(
                                            null
                                        )
                                    ) : (
                                        e.categorias.includes(categories.current) ? (
                                            search==null || e.nombre.toLowerCase().includes(search.toLowerCase())?(
                                                <FoodCard data={e} key={i} n={i} />
                                            ):(
                                                null
                                            )
                                        ) : (
                                            null
                                        )
                                    )}
                                </>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}
