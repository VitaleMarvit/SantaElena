import React from "react";
import './index.css';
import card2 from '../Assets/card2.jpeg';
import card3 from '../Assets/card3.jpeg';

function QueOfrecemos() {
    return (
        <section id="ofrecemos" className="section-ofrecemos">
            <div className="container-titulo-section-ofrecemos">
                <h1>¿Que Ofrecemos?</h1>
            </div>

            <div className="container-cards-section-ofrecemos">
                <div className="cards-section-ofrecemos">
                    <div className="container-text-card">
                        <h1>DEPARTAMENTOS</h1>
                        <div className="div-medio-text-card-uno">
                            <h1>EN POZO</h1>
                            <div className="div-p-uno-card-uno">
                                <p>con el beneficio</p>
                                <p>de una</p>
                            </div>
                        </div>
                        <h1>FINANCIACIÓN</h1>
                        <h1>PERSONALIZADA</h1>
                        <div className="div-p-dos-card-uno">
                            <p>que se adapta a tus necesidades</p>
                            <p>y preferencias</p>
                        </div>
                    </div>

                    <img className="img-card-uno" src={card2} />
                </div>

                <div className="cards-section-ofrecemos">
                    <div className="container-text-card">
                        <h1>SOMOS UN EQUIPO DE ESPECIALISTAS.</h1>
                        <div className="contianer-p-card-dos">
                            <p>Te acompañaremos en todo el proceso brindádote el conocimiento y la experiencia necesaria para que tomes</p>
                            <p className="p-dos-card-dos">LA MEJOR DECISIÓN</p>
                        </div>
                    </div>

                    <img className="img-card-dos" src={card2} />
                </div>

                <div className="cards-section-ofrecemos">
                    <div className="container-text-card">
                        <h1 id="h1-card-tres">AMPLIA TRAYECTORIA<br/> EN EL SECTOR<br/> INMOBILIARIO</h1>
                        <div className="container-p-card-tres">
                            <p>Nos ha permitido <span>entender</span> las necesidas y demandas del mercado, y diseñar proyectos <span>que se adapten a ellas.</span></p>
                            {/* <p className="p-dos-card-tres">que se adapten a ellas.</p> */}
                        </div>
                    </div>

                    <img className="img-card-tres" src={card3} />
                </div>
                
                
            </div>
        </section>
    )
}

export { QueOfrecemos };