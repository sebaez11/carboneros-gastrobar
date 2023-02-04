import React from 'react'
import bg from '../../Assets/images/Weare/bg.jpg'

export default function Weare() {
    return (
        <div id="weare_page" className='row'>
            <div className="col-md-4 imageWallpaper" style={{ backgroundImage: 'url(' + bg + ')' }}>

            </div>
            <div className="col-md-8 textColumn">
                <div className="title">
                    <span>¿Quienes somos?</span>
                </div>
                <div className="content">
                    <span>
                        Bienvenidos a nuestro restaurante, donde la comida y el servicio son la prioridad. Somos un grupo de amantes de la gastronomía y entendemos la importancia de una experiencia culinaria memorable. Con más de 10 años de experiencia, ofrecemos una amplia variedad de platos deliciosos, elaborados con ingredientes frescos y de alta calidad. <br /><br />

                        Nuestro equipo de cocina está dirigido por chefs talentosos y apasionados, que trabajan incansablemente para brindarle a nuestros clientes una experiencia culinaria única y satisfactoria. Además, nuestro personal amable y servicial hará que su visita sea inolvidable.<br /><br />

                        Nos esforzamos por crear un ambiente acogedor y amigable, perfecto para una cena romántica, una reunión de negocios o simplemente una noche fuera con amigos. Nos enorgullece ofrecerle una experiencia culinaria de primer nivel y estamos emocionados de tenerle como invitado en nuestro restaurante. ¡Esperamos verle pronto!
                    </span>
                </div>
            </div>
        </div>
    )
}
