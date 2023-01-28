import React from 'react'
import bg from '../../Assets/images/Contact/contact_bg.jpg'
import MailchimpSubscribe from "react-mailchimp-subscribe"

export default function Contact() {
    const SimpleForm = () => <MailchimpSubscribe url={url} />

    const CustomForm = ({ status, message, onValidated }) => {
        let email, name;
        const submit = () =>
            email &&
            name &&
            email.value.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email.value,
                NAME: name.value
            });
    }
    const url = "https://carbonerossparrilla.us21.list-manage.com/subscribe/post?u=5362315272762b6e758772920&amp;id=45995b57a8&amp;f_id=0098eae1f0";
    return (
        <div id='Contact_Page' className='row'>
            <div id="bg_wallpaper" style={{ backgroundImage: 'url(' + bg + ')' }}>
                <div></div>
            </div>
            <div className="col-md-4 list-contact">
                <div className="direccion">
                    <span className="title">
                        ¿Como llegar a nuestro restaurante?
                    </span>
                    <span>
                        Estamos ubicados en el barrio el Barzal, a una cuadra de Ole Villavicencio en la zona rosa en dirección hacia el barrio el buque.
                    </span>
                </div>
                <div className="Horarios">
                    <span className="title">
                        Nuestros horarios de atención
                    </span>
                    <span>
                        Lunes a Domingo de 11 AM a 4 PM.
                    </span>
                </div>
                <div className="Redes">
                    <span className="title">
                        Nuestras redes
                    </span>
                    <div className="red">
                        <ion-icon name="logo-facebook"></ion-icon>
                        <a href="https://www.facebook.com/carbonerossparrillavillavo/">/carbonerossparrillavillavo</a>
                    </div>
                    <div className="red">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <a href="https://www.instagram.com/carbonerossparrilla/">/carbonerossparrillavillavo</a>
                    </div>
                </div>
                <div className="Data">
                    <span className="title">
                        Datos importantes
                    </span>
                    <span>
                        Dirección:
                        <span>
                            Avenida 40 No. 40-52, Villavicencio, Meta
                        </span>
                    </span>
                    <span>
                        Celular:
                        <span>
                            3123321884
                        </span>
                    </span>
                    <span>
                        Correo:
                        <span>
                            carbonerossparrilla@gmail.com
                        </span>
                    </span>
                    <span className="title">
                        Subscripcion
                    </span>
                    <span>
                        <span>
                            ¿Qué esperas para unirte a nuestra familia de amantes de la buena comida? ¡Suscribete hoy y comienza a disfrutar de las mejores ofertas!
                        </span>
                    </span>
                    <a href="http://eepurl.com/ijpwXr">
                        <div className="mailchimp">
                            <span>¡Suscribete aqui mismo!</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
