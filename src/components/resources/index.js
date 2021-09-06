import React from "react"
import {useIntl} from "gatsby-plugin-intl"
import "./style.scss"
import Masonry from 'react-masonry-css'
import Gallery from "react-photo-gallery";
import ResourcesHeader from '../header-resources'


import desinformacion from './assets/desinformacion.jpg'
import recuperarLaPolitica from './assets/recuperar-la-politica.jpg'
import guiaCiudadana from './assets/guia-ciudadana.jpg'
import cajaHerramientasPresupuesto from './assets/ch-presupuesto-participativo.jpg'
import cajaHerramientasConsulta from './assets/ch-consulta-ciudadana.jpg'
import presupuestoParticipativo from './assets/presupuesto-participativo.jpg'
import corazonesYMentes from './assets/corazones-y-mentes.jpg'
import refexicons from './assets/refexicons.jpg'
import ppvl from './assets/ppvl.jpg'
import leyesAbiertas from './assets/leyes-abiertas.jpg'
import desobedientes from './assets/desobedientes.png'
import politicaRecuperada from './assets/politica-recuperada.jpg'
import politicxsTwitter from './assets/politicxs-twitter.jpg'
import causasComunes from './assets/causas-comunes.png'
import participes from './assets/participes.jpg'
import miedoBronca from './assets/miedo-bronca.jpg'
import HeaderResources from "../header-resources";

const images={
    desinformacion,
    recuperarLaPolitica,
    guiaCiudadana,
    cajaHerramientasPresupuesto,
    cajaHerramientasConsulta,
    presupuestoParticipativo,
    corazonesYMentes,
    refexicons,
    ppvl,
    leyesAbiertas,
    desobedientes,
    politicaRecuperada,
    politicxsTwitter,
    causasComunes,
    participes,
    miedoBronca
}

const photos=[
    {
        src:desinformacion,
        width:1,
        height:1

    },{
        src:recuperarLaPolitica,
        width:2,
        height:3

    },{
        src:guiaCiudadana,
        width:4,
        height:5

    },{
        src:cajaHerramientasPresupuesto,
        width:1,
        height:1

    },{
        src:cajaHerramientasConsulta,
        width:1,
        height:1

    },{
        src:presupuestoParticipativo,
        width:1,
        height:1

    },{
        src:corazonesYMentes,
        width:1,
        height:1

    },{
        src:refexicons,
        width:1,
        height:1

    },{
        src:ppvl,
        width:1,
        height:1

    },{
        src:leyesAbiertas,
        width:1,
        height:1

    },{
        src:desobedientes,
        width:16,
        height:9    

    },{
        src:politicaRecuperada,
        
        width:16,
        height:9

    },{
        src:politicxsTwitter,
        
        width:1,
        height:1

    },{
        src:causasComunes,
        
        width:1,
        height:1

    },{
        src:participes,
        
        
        width:16,
        height:9

    },{
        src:miedoBronca,
        
        width:1,
        height:1

    }
]


export default ({resources}) =>  {
    
    const intl = useIntl()

    return (
        <section id="resources">

            <div className="columns mt-0 section has-background-dark-grey mb-0 pb-6">
                <div className="column">
                    <h1 className="has-text-white title is-spaced mb-6">{intl.formatMessage({id: resources.title})}</h1>
                    <h2 className="has-text-white is-spaced mb-6">{intl.formatMessage({id: resources.description})}</h2>
                    <h2 className="has-text-yellow  is-spaced mb-6">{intl.formatMessage({id: resources.subtitle})}</h2>
                </div>
                <div className="column"></div>
            </div>

            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                    {
                        resources.resources.map ((resource)=>
                        <div className="resource-container">
                        <a href={resource.link} target="_blank" >
                           <figure key={resource.id} className="image m-auto" >
                                <img src={images[resource.id]}  width="100px" alt="" />
                            </figure> 
                             <div className={`resource-description has-background-${resource.color} is-flex is-flex-direction-column is-justify-content-center p-3`}>
                                <h2 className="has-text-black mb-1">{intl.formatMessage({ id: resource.title })}</h2>
                                <h3 className="has-text-black">{intl.formatMessage({ id: resource.subtitle })}</h3>
                            </div>
                         </a>
                         </div>
                        ) 
                    }
            </Masonry>

            {/* <Gallery margin="0" photos={photos}/> */}
            

            
        </section>
    )
}