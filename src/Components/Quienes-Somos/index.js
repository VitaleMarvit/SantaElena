import React from "react";
import './index.css';

function QuienesSomos() {
    return (
        <section id="somos" className="section-somos">
            <div className="container-titulo-section-somos">
                <h1>¿Quiénes Somos?</h1>
            </div>
            
            <div className="container-texto-imagenes-section-somos">
                <div className="container-p-section-somos">
                    <p className="p-texto-section-somos p-uno-section-somos"><span className="letra-G">G</span> rupo Santa Elena (GSE) en conjunto con Galbros desarrollos conforman un <span className="span-texto-somos"> equipo de profesionales altamente capacitados y con amplia trayectoria en el rubro,</span> enfocados en ofrecer proyectos innovadores y de alta calidad que se adaptan a las demandas del mercado.</p>

                    <p className="p-texto-section-somos">Desde Grupo Santa Elena y Galbros estamos comprometidos en brindarte una experiencia única en la compra de tu nueva propiedad.</p>

                    <p className="p-texto-section-somos"><span className="span-texto-somos">Desde el momento en que te acercas a nuestras oficinas, nuestro equipo de especialistas te acompañará en todo el proceso,</span> brindándote el conocimiento y la experiencia necesaria para tomar la mejor decisión.</p>

                    <p className="p-texto-section-somos">En GSE y Galbros creemos que la transparencia y el compromiso con nuestros clientes son fundamentales para el éxito de cualquier proyecto. Es por eso que nos enfocamos en mantener una comunicación constante y clara durante todo el proceso de venta y postventa, <span className="span-texto-somos">garantizando así tu satisfacción y tranquilidad.</span></p>

                    <p className="p-texto-section-somos">Nuestra amplia trayectoria en el sector inmobiliario nos ha permitido entender las necesidades y demandas del mercado, y <span className="span-texto-somos">diseñar proyectos que se adapten a ellas.</span></p>

                    <p className="p-texto-section-somos">Este nuevo emprendimiento inmobiliario en Godoy Cruz es el resultado de esta experiencia y conocimiento acumulado.</p>
                </div>

                <div>
                    <img />
                    <img />
                </div>
            </div>
        </section> 
    )
}

export { QuienesSomos };