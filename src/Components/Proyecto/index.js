import React from "react";
import './index.css';

function Proyecto() {
    return (
        <section id="proyecto" className="section-proyecto">
            <div className="container-titulo-section-proyecto">
                <h1>El Proyecto</h1>
            </div>
            
            <div className="container-articles-section-proyecto"> 

                <article className="articles-section-proyecto" data-aos-offset="50" data-aos="fade-left">
                    <img />
                    <div className="container-texto-articles">
                        <h1>EFICIENCIA ENERGÉTICA</h1>

                        <p>El proyecto busca reducir costos y <p className="span-proyecto">optimizar energía</p> mediante <span className="span-proyecto">paneles solares</span> para la iluminación de espacios comunes.</p>
                    </div>
                </article>

                <article className="articles-section-proyecto" data-aos-offset="50" data-aos="fade-right">
                    <img />

                    <div className="container-texto-articles">
                        <h1>UBICACIÓN ESTRATEGICA</h1>

                        <p>El proyecto se desarrollará en un punto estratégico de la localidad de <span className="span-proyecto">Godoy Cruz sobre calle Barcala, a metros de Acceso Sur y Sarmiento.</span> Una hermosa zona residencial a <span className="span-proyecto">10 minutos del Centro de la Ciudad.</span></p>
                    </div>
                </article>

                <article className="articles-section-proyecto" data-aos-offset="50" data-aos="fade-left">
                    <img />

                    <div className="container-texto-articles">
                        <h1>3 NIVELES</h1>

                        <p>12 Departamentos distribuidos en <span>PB, 1° y 2° piso.</span> Cada unidad contará con <span>cochera individual.</span></p>
                    </div>
                </article>
                
                <div className="container-map-section-proyecto">
                    <div className="container-texto-section-proyecto">
                        <h1>UBICANOS EN <br/> GOOGLE MAPS</h1>
                        <p>Barcala 1120,</p>
                        <p>Godoy Cruz, Mendoza.</p>
                    </div>

                    <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.3675611056074!2d-68.83192682419423!3d-32.94130387359538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0beb788de74b%3A0xf25a770ca9e456b9!2sBarcala%201120%2C%20Godoy%20Cruz%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1683544929933!5m2!1ses-419!2sar" disableDefaultUI={true} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}

export { Proyecto };