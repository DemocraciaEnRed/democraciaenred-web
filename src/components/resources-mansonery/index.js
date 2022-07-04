import React, { useEffect } from "react";

import Masonry from "react-masonry-css";
import { useIntl } from "gatsby-plugin-intl";
import "./style.scss";

import desinformacion from "./assets/desinformacion.jpg";
import recuperarLaPolitica from "./assets/recuperar-la-politica.jpg";
import guiaCiudadana from "./assets/guia-ciudadana.jpg";
import cajaHerramientasPresupuesto from "./assets/ch-presupuesto-participativo.jpg";
import cajaHerramientasConsulta from "./assets/ch-consulta-ciudadana.jpg";
import presupuestoParticipativo from "./assets/presupuesto-participativo.jpg";
import presupuestoParticipativoInstitucionesEducativas from "./assets/UNR.jpg"
import corazonesYMentes from "./assets/corazones-y-mentes.jpg";
import refexicons from "./assets/refexicons.jpg";
import ppvl from "./assets/ppvl.jpg";
import leyesAbiertas from "./assets/leyes-abiertas.jpg";
import desobedientes from "./assets/desobedientes.jpg";
import politicaRecuperada from "./assets/politica-recuperada.jpg";
import politicxsTwitter from "./assets/politicxs-twitter.jpg";
import causasComunes from "./assets/causas-comunes.png";
import participes from "./assets/participes.png";
import miedoBronca from "./assets/miedo-bronca.jpg";
import compasPolitico from "./assets/compas_politico.jpg";
import meRepresenta from "./assets/me_representa.jpg";
import gatopardismo from "./assets/gatopardismo.jpg";
import tedDemocracias from "./assets/ted-democracias.jpg";
import sumen from "./assets/sumen.png";
import somosParticipes from "./assets/somosParticipes.png";
import eleccionesDemocracia from "./assets/serie-elecciones-democracia.jpg";
import rendicionCuentasParticipes from "./assets/rendicion-cuentas-participes.png"
import datosEnFuga from "./assets/datosEnFuga.png"
const images = {
  desinformacion,
  recuperarLaPolitica,
  guiaCiudadana,
  cajaHerramientasPresupuesto,
  cajaHerramientasConsulta,
  presupuestoParticipativo,
  presupuestoParticipativoInstitucionesEducativas,
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
  meRepresenta,
  gatopardismo,
  tedDemocracias,
  sumen,
  somosParticipes,
  eleccionesDemocracia,
  rendicionCuentasParticipes,
  datosEnFuga
};

const ResourcesMansonery = ({ resources, home, filter }) => {
  const intl = useIntl();
  const breakpointCols = {
    default: 5,
    1216: 4,
    700: 2,
    
  };

  const getArray = () => {

    if (home) {
      return resources.resources.filter((resource) => resource.home === true).reverse();
    }
    let resourcesArray = resources.resources.filter(
      (resource) => resource.type === filter
    );
    // console.log(resourcesArray)
      if (filter == 'all'){
        resourcesArray = resourcesArray.concat(
          resources.resources
            .filter((resource) => resource.type !== filter)
            .map((resource) => resource)
        );
      }
    // console.log("resources \n", resourcesArray)
    return resourcesArray.reverse()
  };
  useEffect(() => {
    updateArray();
  });
const updateArray= () => {
  if (typeof document !== `undefined`) {
    let containerResources = document.getElementById("containResources")
    if (containerResources){
      containerResources.remove()
    }
    return getArray().map((resource, index) => (
      <div  className="resource-container" key={index}>
        <a href={resource.link} target="_blank">
          <figure key={resource.id} className="image m-auto">
            <img
              src={images[resource.id]}
              width="100px"
              alt={`Imagen del recurso ${resource.title}`}
            />
          </figure>
          <div
            className={`resource-description has-background-${resource.color} is-flex is-flex-direction-column is-justify-content-center p-3`}
          >
            <h2 className="has-text-black mb-1 is-size-6-mobile">
              {intl.formatMessage({ id: resource.title })}
            </h2>
            <h3 className="has-text-black is-size-7-mobile">
              {intl.formatMessage({ id: resource.subtitle })}
            </h3>
          </div>
        </a>
      </div>
    ))
  } else {
    return getArray().map((resource, index) => (
      <div  className="resource-container" key={index}>
        <a href={resource.link} target="_blank">
          <figure key={resource.id} className="image m-auto">
            <img
              src={images[resource.id]}
              width="100px"
              alt={`Imagen del recurso ${resource.title}`}
            />
          </figure>
          <div
            className={`resource-description has-background-${resource.color} is-flex is-flex-direction-column is-justify-content-center p-3`}
          >
            <h2 className="has-text-black mb-1 is-size-6-mobile">
              {intl.formatMessage({ id: resource.title })}
            </h2>
            <h3 className="has-text-black is-size-7-mobile">
              {intl.formatMessage({ id: resource.subtitle })}
            </h3>
          </div>
        </a>
      </div>
    ))
  

  
}}
  return (
    <div  className="has-background-dark-grey">
      <Masonry
      
        breakpointCols={breakpointCols}
        className="masonry-grid"
        columnClassName="masonry-grid_column has-background-dark"
      >
        {updateArray()}
        {/* {getArray().map((resource, index) => (
          <div  className="resource-container" key={index}>
            <a href={resource.link} target="_blank">
              <figure key={resource.id} className="image m-auto">
                <img
                  src={images[resource.id]}
                  width="100px"
                  alt={`Imagen del recurso ${resource.title}`}
                />
              </figure>
              <div
                className={`resource-description has-background-${resource.color} is-flex is-flex-direction-column is-justify-content-center p-3`}
              >
                <h2 className="has-text-black mb-1 is-size-6-mobile">
                  {intl.formatMessage({ id: resource.title })}
                </h2>
                <h3 className="has-text-black is-size-7-mobile">
                  {intl.formatMessage({ id: resource.subtitle })}
                </h3>
              </div>
            </a>
          </div>
        ))} */}
      </Masonry>
    </div>
  );
};

export default ResourcesMansonery;
