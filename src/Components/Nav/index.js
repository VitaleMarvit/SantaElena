import React, {useState} from "react";
import './index.css';
import { Link } from "react-scroll";
import imageNav from "../Assets/imagen-nav-2.svg"
import imageMenu from "../Assets/imagen-menu-2.svg"

function Nav() {

    const [hamburguer, setHamburguer] = useState(false);
    const [hamEffect, setHamEffect] = useState(false);

    return (
        <nav className="nav">

            <div id="hamburguer" className={hamburguer ? "three col hambuger-active filter" : "three col"} onClick={() => {setHamburguer(!hamburguer)}}>
                <div 
                    className={hamEffect ? 'hamburger is-active' : 'hamburger'} 
                    onClick={() => setHamEffect(!hamEffect)}
                    id="hamburger-6"
                >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>

            <div className="info-container-nav">
                <div className="container-image-nav">
                    <Link to="header" spy={true} smooth={true} duration={100} delay={0} offset={-60}>
                        <img src={imageNav} />
                    </Link>
                </div>
            </div>

            <div className={hamburguer ? "container-modal-nav container-modal-nav-active" : "container-modal-nav"}>
                <div className="container-titulo-modal-nav">
                    <div className="container-image-menu">
                        <img src={imageMenu} />
                    </div>
                </div>

                <ul className={hamburguer ? "ul-container-nav ul-container-nav-active" : "ul-container-nav"}>
                    <li>
                        <Link 
                            to="ofrecemos"
                            onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
                            spy={true} smooth={true} duration={100} delay={0}
                        >
                            ¿Qué Ofrecemos?
                        </Link>
                    </li>

                    <li>
                        <Link 
                            to="somos"
                            onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
                            spy={true} smooth={true} duration={100} delay={0} offset={-59}
                        >
                            ¿Quiénes Somos?
                        </Link>
                    </li>

                    <li>
                        <Link 
                            to="proyecto"
                            onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
                            spy={true} smooth={true} duration={100} delay={0} offset={-59}
                        >
                            El Proyecto
                        </Link>
                    </li>

                    <li>
                        <Link 
                            to="caracteristicas"
                            onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
                            spy={true} smooth={true} duration={100} delay={0} offset={-59}
                        >
                            Caracteristicas
                        </Link>
                    </li>

                    <li>
                        <Link 
                            to="contacto"
                            onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
                            spy={true} smooth={true} duration={100} delay={0} offset={-59}
                        >
                            Contactanos
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export { Nav };