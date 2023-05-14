import React, { Component } from "react";
import { render } from "react-dom";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import card1 from '../Assets/Que-ofrecemos-1.jpeg';
import card2 from '../Assets/Que-ofrecemos-2.jpeg';
import card3 from '../Assets/Que-ofrecemos-3.jpeg';
import rulo from '../Assets/WEB_SANTAELENA_FLECHA 2 CON RULITO.svg';


function QueOfrecemos(element) {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const checkNext = () => {
      const labels = document.querySelectorAll('#slider label');
      const nextIndex = selectedIndex === (labels.length - 1) ? 0 : selectedIndex + 1; 
      setSelectedIndex(nextIndex);
    }
  
    const check = index => setSelectedIndex(index);

    return (
        <section id="ofrecemos" className="section-ofrecemos">
            <div className="container-titulo-section-ofrecemos">
                <h1>¿Qué Ofrecemos?</h1>
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

                    <img className="img-card-uno" src={card1} />
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
                        <h1 id="h1-card-tres">AMPLIA TRAYECTORIA<br/> EN EL SECTOR<br/> INMOBILIARIO <img src={rulo} /></h1>
                        <div className="container-p-card-tres">
                            <p>Nos ha permitido <span>entender</span> las necesidas y demandas del mercado, y diseñar proyectos <span>que se adapten a ellas.</span></p>
                        </div>
                    </div>

                    <img className="img-card-tres" src={card3} />
                </div>
            </div>

            <div className="container-general-slider-cards">
                <div className="container-button-left-cards">
                    <button onClick={checkNext}><FontAwesomeIcon icon={faChevronLeft} className="facon"/></button>
                </div>

                <div className="container-slider-cards">
                    <section id="slider" >
                        <input type="radio" name="slider" id="s1" checked={selectedIndex === 0} onClick={() => check(0)} />

                        <input type="radio" name="slider" id="s2" checked={selectedIndex === 1} onClick={() => check(1)} />

                        <input type="radio" name="slider" id="s3" checked={selectedIndex === 2} onClick={() => check(2)} />

                        <label label htmlFor="s1" id="slide1" className="cards-section-ofrecemos">
                            <div className="container-text-card">
                                <div className="div-center-cards">
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
                            </div>

                            <img className="img-card-uno" src={card1}/>
                        </label>

                        <label htmlFor="s2" id="slide2" className="cards-section-ofrecemos">
                            <div className="container-text-card">
                                <div className="div-center-cards">
                                    <h1>SOMOS UN EQUIPO DE ESPECIALISTAS.</h1>
                                    <div className="contianer-p-card-dos">
                                        <p>Te acompañaremos en todo el proceso brindádote el conocimiento y la experiencia necesaria para que tomes</p>
                                        <p className="p-dos-card-dos">LA MEJOR DECISIÓN</p>
                                    </div>
                                </div>
                            </div>

                            <img className="img-card-dos" src={card2}/>
                        </label>

                        <label htmlFor="s3" id="slide3" className="cards-section-ofrecemos">
                            <div className="container-text-card">
                                <div className="div-center-cards">
                                    <h1 id="h1-card-tres">AMPLIA TRAYECTORIA<br/> EN EL SECTOR<br/> INMOBILIARIO <img src={rulo} /></h1>
                                    <div className="container-p-card-tres">
                                        <p>Nos ha permitido <span>entender</span> las necesidas y demandas del mercado, y diseñar proyectos <span>que se adapten a ellas.</span></p>
                                    </div>
                                </div>
                            </div>

                            <img className="img-card-tres" src={card3}/>
                        </label>

                    </section>
                </div>

                <div className="container-button-right-cards">
                    <button onClick={checkNext}><FontAwesomeIcon icon={faChevronRight} className="facon"/></button>
                </div>
            </div>

        </section>
    )
}

export { QueOfrecemos };
