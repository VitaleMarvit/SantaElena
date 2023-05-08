import React, {useState} from "react";
import './index.css';
import { Link } from "react-scroll";

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
                <div>
                    <img />
                </div>

                <div className="titulo-container-nav">
                    <p>GRUPO</p>
                    <h2>SANTA ELENA</h2>
                </div>
            </div>

            <div className={hamburguer ? "container-modal-nav container-modal-nav-active" : "container-modal-nav"}>
                <div className="container-titulo-modal-nav">
                    <div>
                        <img />
                    </div>

                    <div className="titulo-container-nav">
                        <p>GRUPO</p>
                        <h2>SANTA ELENA</h2>
                    </div>
                </div>

                <ul className={hamburguer ? "ul-container-nav ul-container-nav-active" : "ul-container-nav"}>
                    <li>
                        <Link 
                            to="ofrecemos"
                            onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
                        >
                            ¿Qué Ofrecemos?
                        </Link>
                    </li>

                    <li>
                        <Link 
                            to="somos"
                            onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
                        >
                            ¿Quiénes Somos?
                        </Link>
                    </li>

                    <li>
                        <Link 
                            to="proyecto"
                            onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
                        >
                            El Proyecto
                        </Link>
                    </li>

                    <li>
                        <Link 
                            to="caracteristicas"
                            onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
                        >
                            Caracteristicas
                        </Link>
                    </li>

                    <li>
                        <Link 
                            to="contacto"
                            onClick={() => {return (setHamburguer(!hamburguer), setHamEffect(!hamEffect))}}
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