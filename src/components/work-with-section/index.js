import React from "react";
import "./styles.scss";
import { useIntl } from "gatsby-plugin-intl";
// import legislatura_caba from "./assets/legislatura_caba.jpg";
// import sanmartin from "./assets/sanmartin.jpg";
// import xr from "./assets/xr.jpg";
// import sunchales_ciudad from "./assets/sunchales_ciudad.jpg";
// import vicente_lopez from "./assets/vicente_lopez.jpg";
// import extituto from "./assets/extituto.jpg";
// import gob_mx from "./assets/gob_mx.jpg";
// import san_lorenzo from "./assets/san_lorenzo.jpg";
import presupuesto_participativo from "./assets/presupuestoparticipativo.png";
// import presidencia_nacion from "./assets/presidencianacion.png";
import diputados from "./assets/diputados.jpg";
import bs_as_ciudad from "./assets/bs_as_ciudad.jpeg";
// import red_innovacion from "./assets/red_innovacion.jpg";
// import rosario from "./assets/rosario.jpg";
import accion_colectiva from "./assets/accionColectiva.png";
import acij from "./assets/acij.png";
// import argentina_unida from "./assets/argentina_unida.png";
import artemisa from "./assets/artemisa.png";
import avina from "./assets/avina.png";
import caf from "./assets/caf.png";
import cippec from "./assets/cippec.png";
import conocimiento_abierto from "./assets/conocimientoAbierto.png";
import demolab from "./assets/demolab.png";
import directorio_legislativo from "./assets/directorioLegislativo.png"
import ecohouse from "./assets/ecohouse.png"
import facebook from "./assets/facebook.png"
import fundacion_huesped from "./assets/fundacionHuesped.png"
import fundeps from "./assets/fundeps.png"
import gobierno_abierto from "./assets/gobiernoAbierto.png"
import godoy_cruz from "./assets/godoyCruz.png"
import indela from "./assets/indela.png"
import konrad from "./assets/konrad.png"
import maipu from "./assets/maipu.png"
import mano from "./assets/mano.png"
import mgp from "./assets/mgp.png"
import ministerio_economia from "./assets/ministerioEconomia.png"
import moe from "./assets/moe.png"
import nuestra_cordoba from "./assets/nuestraCordoba.png"
import nuestra_mendoza from "./assets/nuestraMendoza.png"
import observatorioRedes from "./assets/observatorioRedes.png"
import odia from "./assets/odia.svg"
import onu from "./assets/onu.png"
import open_society from "./assets/openSociety.png"
import poder_ciudadano from "./assets/poderCiudadano.png"
import redaccion from "./assets/redaccion.png"
import sistemab from "./assets/sistemab.png"
import twitter from "./assets/twitter.png"
import via_libre from "./assets/viaLibre.png"

const WorkWith = () => {
  const intl = useIntl();

  const logos = [
    // {
    //   name: "Legislatura CABA",
    //   src: legislatura_caba,
    //   class: "legislatura",
    // },
    // {
    //   name: "San Martín",
    //   src: sanmartin,
    //   class: "san-martin",
    // },
    // {
    //   name: "XR Rebelion o Extinsión",
    //   src: xr,
    //   class: "",
    // },
    // {
    //   name: "Ciudad de Sunchales",
    //   src: sunchales_ciudad,
    //   class: "",
    // },
    // {
    //   name: "Vicente López",
    //   src: vicente_lopez,
    //   class: "vicente-lopez",
    // },
    // {
    //   name: "Extituto Politica Abierta",
    //   src: extituto,
    //   class: "",
    // },
    // {
    //   name: "Gobierno de Mexico",
    //   src: gob_mx,
    //   class: "",
    // },
    // {
    //   name: "Municipalidad de San Lorenzo",
    //   src: san_lorenzo,
    //   class: "san-lorenzo",
    // },
    {
      name: "presupuesto_participativo",
      src: presupuesto_participativo,
      class: "presupuesto_participativo",
    },
    // {
    //   name: "Presidencia de la Nación",
    //   src: presidencia_nacion,
    //   class: "presidencia_nacion",
    // },
    {
      name: "Diputados Argentina",
      src: diputados,
      class: "contractmore",
    },
    {
      name: "Buenos Aires Ciudad",
      src: bs_as_ciudad,
      class: "buenos-aires",
    },
    // {
    //   name: "Red de Innovacion Politica en America Latina",
    //   src: red_innovacion,
    //   class: "red-innovacion",
    // },
    // {
    //   name: "Municipalidad de Rosario",
    //   src: rosario,
    //   class: "",
    // },
    {
      name: "Accion Colectiva",
      src: accion_colectiva,
      class: "",
    },
    {
      name: "Observatorio de Justicia ACCIJ",
      src: acij,
      class: "",
    },
    // {
    //   name: "Argentina unida",
    //   src: argentina_unida,
    //   class: "",
    // },
    {
      name: "Artemisas",
      src: artemisa,
      class: "contractmore",
    },
    {
      name: "Avina",
      src: avina,
      class: "",
    },
    {
      name: "CAF",
      src: caf,
      class: "",
    },
    {
      name: "cippec",
      src: cippec,
      class: "",
    },
    {
      name: "Conocimiento Abierto",
      src: conocimiento_abierto,
      class: "",
    },
    {
      name: "DemoLab",
      src: demolab,
      class: "",
    },
    {
      name: "Directorio LEgislativo",
      src: directorio_legislativo,
      class: "",
    },
    {
      name: "ecohouse",
      src: ecohouse,
      class: "contract",
    },
    {
      name: "Facebook",
      src: facebook,
      class: "",
    },
    {
      name: "fundacion Huesped",
      src: fundacion_huesped,
      class: "",
    },
    {
      name: "fundepc",
      src: fundeps,
      class: "",
    },
    {
      name: "gobierno Abierto",
      src: gobierno_abierto,
      class: "",
    },
    {
      name: "Godoy Cruz",
      src: godoy_cruz,
      class: "",
    },
    {
      name: "indela",
      src: indela,
      class: "",
    },
    {
      name: "Konrad",
      src: konrad,
      class: "",
    },
    {
      name: "maipu",
      src: maipu,
      class: "",
    },
    {
      name: "mano",
      src: mano,
      class: "",
    },
    {
      name: "Presupuesto participativo General Puyrredon",
      src: mgp,
      class: "",
    },
    {
      name: "Ministerio de Economia",
      src: ministerio_economia,
      class: "",
    },
    {
      name: "MOE",
      src: moe,
      class: "",
    },
    {
      name: "Red Ciudadana Nuestra Cordoba",
      src: nuestra_cordoba,
      class: "",
    },
    {
      name: "Nuestra Mendoza",
      src: nuestra_mendoza,
      class: "",
    },
    {
      name: "Observatorio de Redes",
      src: observatorioRedes,
      class: "",
    },
    {
      name: "ODIA",
      src: odia,
      class: "expand",
    },
    {
      name: "onu",
      src: onu,
      class: "contractmore",
    },
    {
      name: "Open Society",
      src: open_society,
      class: "",
    },
    {
      name: "poder Ciudadano",
      src: poder_ciudadano,
      class: "",
    },
    {
      name: "RedAccion",
      src: redaccion,
      class: "",
    },
    {
      name: "Sistema B",
      src: sistemab,
      class: "contract",
    },
    {
      name: "Twittewr",
      src: twitter,
      class: "contract",
    },
    {
      name: "Via Libre",
      src: via_libre,
      class: "",
    },
  ];

  return (
    <section id="work-with" className="section work-with">
      <div className="container has-text-centered">
        <h2 className="main-title mb-6 is-size-3">
          {intl.formatMessage({ id: "work_with" })}
        </h2>
        <div className="columns is-multiline">
          {logos.map((logo, index) => (
            <div key={index} className="column is-one-third-tablet is-one-quarter-desktop is-half-mobile">
              <figure className="image">
                <img
                  src={logo.src}
                  className={`client-logo ${logo.class}`}
                  alt={`${logo.name}`}
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWith;
