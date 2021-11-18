import React from 'react'
import Masonry from 'react-masonry-css'
import {useIntl} from "gatsby-plugin-intl"


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
import compasPolitico from './assets/compas_politico.jpg'
import meRepresenta from './assets/me_representa.jpg'


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
    miedoBronca,
    compasPolitico,
    meRepresenta
}

const ResourcesMansonery= ({resources,home,filter})=>{
    const intl = useIntl()
    const breakpointCols = {
        default: 4,
        700: 2
      };
    return (
        <div className="has-background-dark-grey">
            <Masonry
                breakpointCols={breakpointCols}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">        
                    {
                        resources.resources.filter(resource=>resource.type==filter).map ((resource)=>
                        <div className="resource-container" key={resources.id}>
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
                    {
                        resources.resources.filter(resource=>resource.type!==filter).map ((resource)=>
                        <div className="resource-container" key={resources.id}>
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
        </div>
    )
}

export default ResourcesMansonery