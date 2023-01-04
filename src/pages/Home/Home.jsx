import React from 'react'
import bg from '../../Assets/images/bg.jpg'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
    const dispatch = useDispatch();
    const changeWindow = (target) => {
        dispatch({
            type: "CHANGE_WINDOW",
            payload: target
        });
    }

    return (
        <>
            <div id="bg_wallpaper" style={{ backgroundImage: 'url(' + bg + ')' }}>
                <div></div>
            </div>
            <div id="home_page" className='row'>
                <div className="col-md-4 title_container">
                    <span className='title_1'>Experimenta los sabores más auténticos</span>
                    <span className='subt_1'>Ven y déjate sorprender por nuestras deliciosas opciones de menú</span>
                    <div className="COA_Button" onClick={()=>{changeWindow("STORE")}}>
                        Ordena en línea
                    </div>
                </div>
            </div>
        </>
    )
}
