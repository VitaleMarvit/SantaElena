import React, {useState} from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import depto1 from '../Assets/Caracteristicas-1.jpeg';
import depto2 from '../Assets/Caracteristicas-2.jpeg';
import depto3 from '../Assets/Caracteristicas-3.jpeg';
import depto4 from '../Assets/Caracteristicas-4.jpeg';
import depto5 from '../Assets/Caracteristicas-5.jpeg';
import depto6 from '../Assets/Caracteristicas-6.jpeg';
import depto7 from '../Assets/Caracteristicas-7.jpeg';
import depto8 from '../Assets/Caracteristicas-8.jpeg';
import depto9 from '../Assets/Caracteristicas-9.jpeg';
import depto10 from '../Assets/Caracteristicas-10.jpeg';
import depto11 from '../Assets/Caracteristicas-11.jpeg';
import depto12 from '../Assets/Caracteristicas-12.jpeg';
import depto13 from '../Assets/Caracteristicas-13.jpeg';
import depto14 from '../Assets/Caracteristicas-14.jpeg';

const images = [depto1,depto2,depto3,depto4,depto5,depto6,depto7,depto8,depto9,depto10,depto11,depto12,depto13,depto14];

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