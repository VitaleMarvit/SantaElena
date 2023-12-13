import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import contacto from '../Assets/contacto.svg';
import wpp from '../Assets/WEB_SANTAELENA_ICONO WASAP.svg';
import insta from '../Assets/WEB_SANTAELENA_ICONO INSTA.svg';
import email from '../Assets/WEB_SANTAELENA_ICONO MAIL.svg';

function Contacto() {

    const [state, handleSubmit] = useForm("xbjeeywr");
    
    if (state.succeeded) {
        return (
            <section id="contacto" className="section-contacto">
                <div className="container-titulo-section-contacto">
                    <h1>Contactanos</h1>
                </div>

                <div className="container-contact-section-contacto">
                    <div className="container-form">
                        <h1>CONSULTANOS CUALQUIER DUDA<img src={contacto} /></h1>
                        <form className="form-section-contacto-succes" onSubmit={handleSubmit}>
                            <h4>¡Mensaje Enviado!</h4>
                            <FontAwesomeIcon icon={faCheck} className="check-icon"/>                            
                        </form>
                    </div>

                    <div className="container-rrss-section-contacto">
                        <div className="container-wpp" data-aos="zoom-in-up" data-aos-offset="50" data-aos-duration="500">
                            <img src={wpp} className="wpp-iconos-rrss" />
                            <div id="container-text-wpp">
                                <a href="https://api.whatsapp.com/send?phone=5492616961197" target="_blank">+54 9 2616961197</a>
                                <a href="https://api.whatsapp.com/send?phone=5492616961197" target="_blank">Mauricio Galdame - ReMax</a>
                            </div>
                        </div>

                        <div className="container-articles-rrss" data-aos="zoom-in-up" data-aos-offset="50" data-aos-duration="500">
                            <img src={insta} className="insta-iconos-rrss" />
                            <a href="https://www.instagram.com/gruposantaelena_/" target="_blank" className="a-instagram">@gruposantaelena_</a>
                        </div>

                        <div className="container-articles-rrss" data-aos="zoom-in-up" data-aos-offset="50" data-aos-duration="500">
                            <img src={email} className="email-iconos-rrss" />
                            <a href="mailto:santaelena.fideicomiso@gmail.com" className="a-email">santaelena.fideicomiso@gmail.com</a>
                        </div>
                    </div>

                </div>
                
                <div className="container-contact-section-contact-dos">
                    <div className="container-form">
                        <h1>CONSULTANOS CUALQUIER DUDA<img src={contacto} /></h1>
                        <form className="form-section-contacto-succes" onSubmit={handleSubmit}>
                            <h4>¡Mensaje Enviado!</h4>
                            <FontAwesomeIcon icon={faCheck} className="check-icon"/>                            
                        </form>
                    </div>

                    <div className="container-rrss-section-contacto">
                        <div className="container-wpp" >
                            <img src={wpp} className="wpp-iconos-rrss" />
                            <div id="container-text-wpp">
                                <a href="https://api.whatsapp.com/send?phone=5492616961197" target="_blank">+54 9 2616961197</a>
                                <a href="https://api.whatsapp.com/send?phone=5492616961197" target="_blank">Mauricio Galdame - ReMax</a>
                            </div>
                        </div>

                        <div className="container-articles-rrss" >
                            <img src={insta} className="insta-iconos-rrss" />
                            <a href="https://www.instagram.com/gruposantaelena_/" target="_blank" className="a-instagram">@gruposantaelena_</a>
                        </div>

                        <div className="container-articles-rrss" >
                            <img src={email} className="email-iconos-rrss" />
                            <a href="mailto:santaelena.fideicomiso@gmail.com" className="a-email">santaelena.fideicomiso@gmail.com</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="contacto" className="section-contacto">
            <div className="container-titulo-section-contacto">
                <h1>Contactanos</h1>
            </div>

            <div className="container-contact-section-contacto">
                <div className="container-form">
                    <h1>CONSULTANOS CUALQUIER DUDA<img src={contacto} /></h1>
                    <form className="form-section-contacto" onSubmit={handleSubmit}>
                        <div class="input-field">
                            <input id="email" type="email" name="email" required spellcheck="false" /> 
                            <label htmlFor="email">Tu Email</label>
                            <ValidationError prefix="Email" field="email" errors={state.errors}/>
                        </div>

                        <div class="input-name">
                            <input id="nombre" type="text" name="message" required spellcheck="false" /> 
                            <label htmlFor="email">Tu Nombre</label>
                            <ValidationError prefix="Email" field="email" errors={state.errors}/>
                        </div>

                        <div class="input-mensaje">
                            <textarea id="message" name="message" type="text" required spellcheck="false" /> 
                            <label>Mensaje</label>
                            <ValidationError prefix="Message" field="message" errors={state.errors}/>
                        </div>

                        <button type="submit" class="submit-btn" disabled={state.submitting}>
                            Enviar
                            <FontAwesomeIcon icon={faChevronRight} className="arrow-contact"/>
                        </button>
                    </form>
                </div>

                <div className="container-rrss-section-contacto">
                    <div className="container-wpp" data-aos="zoom-in-up" data-aos-offset="50" data-aos-duration="500">
                        <img src={wpp} className="wpp-iconos-rrss" />
                        <div id="container-text-wpp">
                            <a href="https://api.whatsapp.com/send?phone=5492616961197" target="_blank">+54 9 2616961197</a>
                            <a href="https://api.whatsapp.com/send?phone=5492616961197" target="_blank">Mauricio Galdame - ReMax</a>
                        </div>
                    </div>

                    <div className="container-articles-rrss" data-aos="zoom-in-up" data-aos-offset="50" data-aos-duration="500">
                        <img src={insta} className="insta-iconos-rrss" />
                        <a href="https://www.instagram.com/gruposantaelena_/" target="_blank" className="a-instagram">@gruposantaelena_</a>
                    </div>

                    <div className="container-articles-rrss" data-aos="zoom-in-up" data-aos-offset="50" data-aos-duration="500">
                        <img src={email} className="email-iconos-rrss" />
                        <a href="mailto:santaelena.fideicomiso@gmail.com" className="a-email">santaelena.fideicomiso@gmail.com</a>
                    </div>
                </div>
            </div>
            
            <div className="container-contact-section-contact-dos">
                <div className="container-form">
                    <h1>CONSULTANOS CUALQUIER DUDA<img src={contacto} /></h1>
                    <form className="form-section-contacto" onSubmit={handleSubmit}>
                        <div class="input-field">
                            <input id="email" type="email" name="email" required spellcheck="false" /> 
                            <label htmlFor="email">Tu Email</label>
                            <ValidationError prefix="Email" field="email" errors={state.errors}/>
                        </div>

                        <div class="input-name">
                            <input id="nombre" type="text" name="message" required spellcheck="false" /> 
                            <label htmlFor="email">Tu Nombre</label>
                            <ValidationError prefix="Email" field="email" errors={state.errors}/>
                        </div>

                        <div class="input-mensaje">
                            <textarea id="message" name="message" type="text" required spellcheck="false" /> 
                            <label>Mensaje</label>
                            <ValidationError prefix="Message" field="message" errors={state.errors}/>
                        </div>

                        <button type="submit" class="submit-btn" disabled={state.submitting}>
                            Enviar
                            <FontAwesomeIcon icon={faChevronRight} className="arrow-contact"/>
                        </button>
                    </form>
                </div>

                <div className="container-rrss-section-contacto">
                    <div className="container-wpp" >
                        <img src={wpp} className="wpp-iconos-rrss" />
                        <div id="container-text-wpp">
                            <a href="https://api.whatsapp.com/send?phone=5492616961197" target="_blank">+54 9 2616961197</a>
                            <a href="https://api.whatsapp.com/send?phone=5492616961197" target="_blank">Mauricio Galdame - ReMax</a>
                        </div>
                    </div>

                    <div className="container-articles-rrss" >
                        <img src={insta} className="insta-iconos-rrss" />
                        <a href="https://www.instagram.com/gruposantaelena_/" target="_blank" className="a-instagram">@gruposantaelena_</a>
                    </div>

                    <div className="container-articles-rrss" >
                        <img src={email} className="email-iconos-rrss" />
                        <a href="mailto:santaelena.fideicomiso@gmail.com" className="a-email">santaelena.fideicomiso@gmail.com</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Contacto };