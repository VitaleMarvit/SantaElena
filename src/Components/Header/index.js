import React from "react";
import './index.css';
import logos from '../Assets/Header.svg';
import header1 from '../Assets/Header1.png'
import header2 from '../Assets/header2.png'
import header3 from '../Assets/Header3.png'
import render from '../Assets/render-final.png';

function Header() {
    return (
        <section id="header" className="section-header">
            <div className="div-logos">
                <img src={logos} className="img-logos" />
                <div className="div-imagenes-header">
                    <img src={header1} className="img-header1" />
                    <img src={header2} className="img-header2" />
                    <img src={header3} className="img-header3" />
                </div>
            </div>

            <div className="div-render">
                <img src={render} className="img-render"/>
            </div>
        </section>
    )
}

export { Header };