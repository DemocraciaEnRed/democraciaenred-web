import React, { useEffect } from "react";

import Masonry from "react-masonry-css";
import { useIntl } from "gatsby-plugin-intl";
import "./style.scss";

import desinformacion from "./assets/desinformacion.jpg";
import en_desinformacion from "./assets/en_desinformacion.png";
import recuperarLaPolitica from "./assets/recuperar-la-politica.jpg";
import guiaCiudadana from "./assets/guia-ciudadana.jpg";
import en_guiaCiudana from "./assets/en_guia-ciudadana.png";
import cajaHerramientasPresupuesto from "./assets/ch-presupuesto-participativo.jpg";
import en_cajaHerramientasPresupuesto from "./assets/ch-presupuesto-participativo_en.png";
import cajaHerramientasConsulta from "./assets/ch-consulta-ciudadana.jpg";
import en_cajaHerramientasConsulta from "./assets/ch-consulta-ciudadana_en.png";
import presupuestoParticipativo from "./assets/presupuesto-participativo.jpg";
import presupuestoParticipativoInstitucionesEducativas from "./assets/UNR.jpg"
import en_presupuestoParticipativoInstitucionesEducativas from "./assets/UNR_en.png"
import corazonesymentes from "./assets/corazonesymentes.jpg";
import en_corazonesymentes from "./assets/en_corazonesymentes.png";
import refexicons from "./assets/refexicons.jpg";
import en_refexicons from "./assets/en_refexicons.png";
import ppvl from "./assets/ppvl.jpg";
import en_ppvl from "./assets/en_ppvl.png";
import leyesAbiertas from "./assets/leyes-abiertas.jpg";
import en_leyesAbiertas from "./assets/en_leyes-abiertas.png";
import desobedientes from "./assets/desobedientes.jpg";
import politicaRecuperada from "./assets/politica-recuperada.jpg";
import politicxsTwitter from "./assets/politicxs-twitter.jpg";
import politicxsTwitter_en from "./assets/politicxsTwitter_en.png";
import causasComunes from "./assets/causas-comunes.png";
import causasComunes_en from "./assets/causas-comunes_en.png";
import participes from "./assets/participes.png";
import miedoBronca from "./assets/miedo-bronca.jpg";
import miedoBronca_en from "./assets/miedo-bronca_en.png";
import compasPolitico from "./assets/compas_politico.jpg";
import compasPolitico_en from "./assets/compas_politico_en.png";
import meRepresenta from "./assets/me_representa.jpg";
import meRepresenta_en from "./assets/me_representa_en.png";
import gatopardismo from "./assets/gatopardismo.jpg";
import tedDemocracias from "./assets/ted-democracias.jpg";
import sumen from "./assets/sumen.png";
import sumen_en from "./assets/sumen_en.png";
import somosParticipes from "./assets/somosParticipes.png";
import somosParticipes_en from "./assets/somosParticipes_en.png";
import eleccionesDemocracia from "./assets/serie-elecciones-democracia.jpg";
import eleccionesDemocracia_en from "./assets/serie-elecciones-democracia_en.png";
import rendicionCuentasParticipes from "./assets/rendicion-cuentas-participes.png"
import datosEnFuga from "./assets/datosEnFuga.png"
import datosEnFuga_en from "./assets/datosEnFuga_en.png"

const images = {
  desinformacion,
  en_desinformacion,
  recuperarLaPolitica,
  guiaCiudadana,
  en_guiaCiudana,
  cajaHerramientasPresupuesto,
  en_cajaHerramientasPresupuesto,
  cajaHerramientasConsulta,
  en_cajaHerramientasConsulta,
  presupuestoParticipativo,
  presupuestoParticipativoInstitucionesEducativas,
  en_presupuestoParticipativoInstitucionesEducativas,
  corazonesymentes,
  en_corazonesymentes,
  refexicons,
  en_refexicons,
  ppvl,
  en_ppvl,
  leyesAbiertas,
  en_leyesAbiertas,
  desobedientes,
  politicaRecuperada,
  politicxsTwitter,
  politicxsTwitter_en,
  causasComunes,
  causasComunes_en,
  participes,
  miedoBronca,
  miedoBronca_en,
  compasPolitico,
  compasPolitico_en,
  meRepresenta,
  meRepresenta_en,
  gatopardismo,
  tedDemocracias,
  sumen,
  sumen_en,
  somosParticipes,
  somosParticipes_en,
  eleccionesDemocracia,
  eleccionesDemocracia_en,
  rendicionCuentasParticipes,
  datosEnFuga,
  datosEnFuga_en
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
              src={images[intl.formatMessage({id: resource.id})]}
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
