import React from "react";
import "./styles.scss";
import { useIntl } from "gatsby-plugin-intl";
import legislatura_caba from "./assets/legislatura_caba.jpg";
import sanmartin from "./assets/sanmartin.jpg";
import xr from "./assets/xr.jpg";
import sunchales_ciudad from "./assets/sunchales_ciudad.jpg";
import vicente_lopez from "./assets/vicente_lopez.jpg";
import extituto from "./assets/extituto.jpg";
import gob_mx from "./assets/gob_mx.jpg";
import san_lorenzo from "./assets/san_lorenzo.jpg";
import presupuesto_participativo from "./assets/presupuestoparticipativo.png";
import presidencia_nacion from "./assets/presidencianacion.png";
import diputados from "./assets/diputados.jpg";
import bs_as_ciudad from "./assets/bs_as_ciudad.jpeg";
import red_innovacion from "./assets/red_innovacion.jpg";
import rosario from "./assets/rosario.jpg";

const WorkWith = () => {
  const intl = useIntl();

  const logos = [
    {
      name: "Legislatura CABA",
      src: legislatura_caba,
      class: "legislatura",
    },
    {
      name: "San Martín",
      src: sanmartin,
      class: "san-martin",
    },
    {
      name: "XR Rebelion o Extinsión",
      src: xr,
      class: "",
    },
    {
      name: "Ciudad de Sunchales",
      src: sunchales_ciudad,
      class: "",
    },
    {
      name: "Vicente López",
      src: vicente_lopez,
      class: "vicente-lopez",
    },
    {
      name: "Extituto Politica Abierta",
      src: extituto,
      class: "",
    },
    {
      name: "Gobierno de Mexico",
      src: gob_mx,
      class: "",
    },
    {
      name: "Municipalidad de San Lorenzo",
      src: san_lorenzo,
      class: "san-lorenzo",
    },
    {
      name: "presupuesto_participativo",
      src: presupuesto_participativo,
      class: "presupuesto_participativo",
    },
    {
      name: "Presidencia de la Nación",
      src: presidencia_nacion,
      class: "presidencia_nacion",
    },
    {
      name: "Diputados Argentina",
      src: diputados,
      class: "diputados",
    },
    {
      name: "Buenos Aires Ciudad",
      src: bs_as_ciudad,
      class: "buenos-aires",
    },
    {
      name: "Red de Innovacion Politica en America Latina",
      src: red_innovacion,
      class: "red-innovacion",
    },
    {
      name: "Municipalidad de Rosario",
      src: rosario,
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
