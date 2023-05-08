import React, {useState} from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const images = [
    "https://images.unsplash.com/photo-1500993855538-c6a99f437aa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1546948630-1149ea60dc86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
];

function Caracteristicas() {

    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevClick = () => {
        setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
    };

    const handleNextClick = () => {
        setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
    };
    
    return (
        <section id="caracteristicas" className="section-caracteristicas">
            <div className="container-titulo-section-caracteristicas">
                <h1>Características</h1>
            </div>

            <div className="container-principal-section-caracteristicas">
                <div className="container">
                    <div className="master">
                        <img src={images[activeIndex]} alt="master" />
                        <FontAwesomeIcon icon={faChevronLeft} className="arrow arrow-left" onClick={handlePrevClick} />
                        <FontAwesomeIcon icon={faChevronRight} className="arrow" onClick={handleNextClick} />
                    </div>

                    <div className="thumbnails">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`thumbnail-${index}`}
                                className={activeIndex === index ? "active" : ""}
                                onClick={() => setActiveIndex(index)}
                            />
                        ))}
                        <div className="degradado-slider"></div>
                    </div>
                </div>

                <div className="container-ps-section-caracteristicas">
                    <p data-aos-offset="50" data-aos="fade-up">Departamentos de 1 y 2 dormitorios distribuidos en 3 niveles</p>

                    <p data-aos-offset="50" data-aos="fade-up">Desde 55m2 a 74m2 <br/>+ cochera cubierta propia</p>

                    <p data-aos-offset="50" data-aos="fade-up">Seguridad: complejo cerrado con portón automatizado y cámaras de vigilancia</p>

                    <p data-aos-offset="50" data-aos="fade-up">SUM</p>

                    <p data-aos-offset="50" data-aos="fade-up">Complejo armonizado con espacios verdes</p>

                    <p data-aos-offset="50" data-aos="fade-up">Compromiso energético: paneles solares para iluminación de espacios comunes</p>

                    <p data-aos-offset="50" data-aos="fade-up">Terminaciones de excelente calidad</p>
                </div>
            </div>
        </section>
    )
}

export { Caracteristicas };