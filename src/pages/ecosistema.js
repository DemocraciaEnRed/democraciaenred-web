import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHero from "../components/page-hero";
import iconEcosistema from "../components/page-hero/assets/ecosistema.svg";
import "./ecosistema.scss";

import acij from "../components/work-with-section/assets/acij.png";
import artemisa from "../components/work-with-section/assets/artemisa.png";
import cippec from "../components/work-with-section/assets/cippec.png";
import conocimientoAbierto from "../components/work-with-section/assets/conocimientoAbierto.png";
import directorioLegislativo from "../components/work-with-section/assets/directorioLegislativo.png";
import fundacionHuesped from "../components/work-with-section/assets/fundacionHuesped.png";
import fundeps from "../components/work-with-section/assets/fundeps.png";
import extituto from "../components/work-with-section/assets/extituto.jpg";
import xr from "../components/work-with-section/assets/xr.jpg";
import odia from "../components/work-with-section/assets/odia.svg";
import accionColectiva from "../components/work-with-section/assets/accionColectiva.png";
import nuestraCordoba from "../components/work-with-section/assets/nuestraCordoba.png";
import nuestraMendoza from "../components/work-with-section/assets/nuestraMendoza.png";
import poderCiudadano from "../components/work-with-section/assets/poderCiudadano.png";
import viaLibre from "../components/work-with-section/assets/viaLibre.png";
import sistemab from "../components/work-with-section/assets/sistemab.png";
import indela from "../components/work-with-section/assets/indela.png";
import openSociety from "../components/work-with-section/assets/openSociety.png";
import luminate from "../components/work-with-section/assets/luminate-logo.png";
import avina from "../components/work-with-section/assets/avina.png";
import konrad from "../components/work-with-section/assets/konrad.png";
import caf from "../components/work-with-section/assets/caf.png";
import ef from "../components/work-with-section/assets/ef.png";
import rosario from "../components/work-with-section/assets/rosario.jpg";
import sanLorenzo from "../components/work-with-section/assets/san_lorenzo.jpg";
import mgp from "../components/work-with-section/assets/mgp.png";
import vicenteLopez from "../components/work-with-section/assets/vicente_lopez.png";
import sunchales from "../components/work-with-section/assets/sunchales_ciudad.jpg";
import diputados from "../components/work-with-section/assets/diputados.jpg";
import maipu from "../components/work-with-section/assets/maipu.png";
import godoyCruz from "../components/work-with-section/assets/godoyCruz.png";
import bsAsCiudad from "../components/work-with-section/assets/bs_as_ciudad.jpeg";
import gobiernoAbierto from "../components/work-with-section/assets/gobiernoAbierto.png";
import moe from "../components/work-with-section/assets/moe.png";
import observatorioRedes from "../components/work-with-section/assets/observatorioRedes.png";

const SOCIEDAD_CIVIL = {
  title: "Sociedad Civil",
  logos: [
    { name: "ACIJ", src: acij },
    { name: "Artemisas", src: artemisa },
    { name: "CIPPEC", src: cippec },
    { name: "Conocimiento Abierto", src: conocimientoAbierto },
    { name: "Directorio Legislativo", src: directorioLegislativo },
    { name: "Fundación Huésped", src: fundacionHuesped },
    { name: "Fundeps", src: fundeps },
    { name: "Extituto", src: extituto },
    { name: "XR", src: xr },
    { name: "ODIA", src: odia },
    { name: "Acción Colectiva", src: accionColectiva },
    { name: "Nuestra Córdoba", src: nuestraCordoba },
    { name: "Nuestra Mendoza", src: nuestraMendoza },
    { name: "Poder Ciudadano", src: poderCiudadano },
    { name: "Vía Libre", src: viaLibre },
    { name: "Sistema B", src: sistemab },
    { name: "INDELA", src: indela },
  ],
  text: ["ART 41", "Change.org", "ADS", "Virtuágora", "Nave", "Activismo Digital", "FOPEA", "Estamos Listas", "CCIJ"],
};

const FINANCIADORES = {
  title: "Financiadores",
  logos: [
    { name: "Open Society Foundation", src: openSociety },
    { name: "Luminate", src: luminate },
    { name: "AVINA", src: avina },
    { name: "KAS", src: konrad },
    { name: "CAF", src: caf },
    { name: "FES", src: ef },
  ],
  text: ["BID", "Unión Europea", "Y Combinator", "Fondo Altec / CLIP / FHHC", "IFA", "Thomson Reuters", "Google", "Microsoft", "PERFIT", "Slack", "Digital Ocean"],
};

const GOBIERNOS = {
  title: "Gobiernos e Instituciones Públicas",
  logos: [
    { name: "Rosario", src: rosario },
    { name: "San Lorenzo", src: sanLorenzo },
    { name: "General Pueyrredon", src: mgp },
    { name: "Vicente López", src: vicenteLopez },
    { name: "Sunchales", src: sunchales },
    { name: "Cámara de Diputados", src: diputados },
    { name: "Maipú", src: maipu },
    { name: "Godoy Cruz", src: godoyCruz },
    { name: "GCBA", src: bsAsCiudad },
    { name: "Gobierno Abierto", src: gobiernoAbierto },
    { name: "MOE", src: moe },
    { name: "Observatorio de Redes", src: observatorioRedes },
  ],
  text: ["San Miguel de Tucumán", "Provincia de Buenos Aires", "La Costa", "Mar Chiquita", "Concejo de Bogotá", "UBA", "Santa Lab", "UNR", "Ecuador"],
};

const REDES = {
  title: "Redes y Comunidades",
  logos: [],
  text: ["Abrelatam", "Red de Parlamento Abierto", "Red de OSC para un Estado Abierto", "People Powered", "RINP", "Democracy R&D", "Centre for Public Impact"],
};

const Sector = ({ title, logos, text }) => (
  <div className="ecosystem-sector">
    <h2 className="title ecosystem-sector-title">{title}</h2>
    <div className="ecosystem-logos">
      {logos.map((logo, i) => (
        <div key={i} className="ecosystem-logo-item">
          <img src={logo.src} alt={logo.name} />
          <span>{logo.name}</span>
        </div>
      ))}
      {text.map((name, i) => (
        <div key={`t-${i}`} className="ecosystem-logo-item ecosystem-text-item">
          <span>{name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Ecosistema = () => (
  <Layout>
    <SEO title="Ecosistema" description="Las organizaciones con las que trabajamos." />
    <PageHero
      color="#e9b4f2"
      title="Ecosistema"
      subtitle="Estas son las organizaciones, gobiernos y redes con las que trabajamos para transformar la democracia."
      icon={iconEcosistema}
    />
    <div className="ecosystem-page">
      <div className="container">
        <Sector {...SOCIEDAD_CIVIL} />
        <Sector {...FINANCIADORES} />
        <Sector {...GOBIERNOS} />
        <Sector {...REDES} />
      </div>
    </div>
  </Layout>
);

export default Ecosistema;
