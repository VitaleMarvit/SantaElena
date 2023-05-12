import React from "react";
import './index.css';
import logos from '../Assets/Header.svg'

function Header() {
    return (
        <section id="header" className="section-header">
            <div>
                <img src={logos} className="img-logos" />
                <img />
            </div>

            <div>
                <img />
                <img />
            </div>
        </section>
    )
}

export { Header };