import React from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpenText, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Contacto() {
    return (
        <section id="contacto" className="section-contacto">
            <div className="container-titulo-section-contacto">
                <h1>Contactanos</h1>
            </div>

            <div className="container-contact-section-contacto">
                <div className="container-form">
                    <h1>CONSULTANOS CUALQUIER DUDA</h1>
                    <form className="form-section-contacto">
                        <div class="form-group">
                            <label for="email"></label>
                            <input type="email" id="email" name="email" placeholder="Tu Email" required class="input-principal"></input>
                        </div>
                        <div class="form-group">
                            <label for="message"></label>
                            <textarea id="message" name="message" placeholder="Mensaje" required class="input-mensaje"></textarea>
                        </div>
                        <button type="submit" class="submit-btn">
                            Enviar
                            <FontAwesomeIcon icon={faChevronRight} className="arrow-contact"/>
                        </button>
                    </form>
                </div>

                <div className="container-rrss-section-contacto">
                    <div className="container-wpp" data-aos="zoom-in-up" data-aos-offset="50" data-aos-duration="500">
                        <FontAwesomeIcon icon={faWhatsapp} className="iconos-rrss" />
                        <div>
                            <p>+54 9 2616961197</p>
                            <p>Mauricio Galdame - ReMax</p>
                        </div>
                    </div>

                    <div className="container-articles-rrss" data-aos="zoom-in-up" data-aos-offset="50" data-aos-duration="500">
                        <FontAwesomeIcon icon={faInstagram} className="iconos-rrss" />
                        <a href="https://www.instagram.com/gruposantaelena_/" target="_blank" className="a-instagram">@gruposantaelena_</a>
                    </div>

                    <div className="container-articles-rrss" data-aos="zoom-in-up" data-aos-offset="50" data-aos-duration="500">
                        <FontAwesomeIcon icon={faEnvelopeOpenText} className="iconos-rrss" />
                        <a href="mailto:santaelena.fideicomiso@gmail.com" className="a-email">santaelena.fideicomiso@gmail.com</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Contacto };