import React from "react";
import "./styles.scss";
import { useIntl, Link } from "gatsby-plugin-intl";
import { PopupButton } from "@typeform/embed-react";

import presupuesto_participativo from "./assets/presupuesto_participativo.png";
import co_construccion from "./assets/co_construccion.png";
import consulta_publica from "./assets/consulta_publica.png";
import seguimiento_metas from "./assets/seguimiento_metas.png";
import votacion_autoridades from "./assets/votacion_autoridades.png";
import democracia_os from "./assets/democracia_os.png";

import presupuesto_participativo_icon from "./assets/Icono_PresupuestoParticipativo.png";
import co_construccion_icon from "./assets/Icono_CoConstrusccionLeyes.png";
import consulta_publica_icon from "./assets/Icono_ConsultasDigitales.png";
import seguimiento_metas_icon from "./assets/Icono_SeguimientoMetas.png";
import votacion_autoridades_icon from "./assets/Icono_VotacionAutoridades.png";
import democracia_os_icon from "./assets/Icono_DemocraciaOS.png";

const images = {
  presupuesto_participativo: presupuesto_participativo,
  consulta_publica: consulta_publica,
  co_construccion: co_construccion,
  seguimiento_metas: seguimiento_metas,
  votacion_autoridades: votacion_autoridades,
  democracia_os: democracia_os,
};

const icons = {
  consulta_publica: consulta_publica_icon,
  co_construccion: co_construccion_icon,
  presupuesto_participativo: presupuesto_participativo_icon,
  seguimiento_metas: seguimiento_metas_icon,
  votacion_autoridades: votacion_autoridades_icon,
  democracia_os: democracia_os_icon,
};

export default ({ data }) => {
  const intl = useIntl();

  return (
    <section
      id={data.id}
      className={`hero section product product-${data.color}`}
    >
      <div className="hero-body">
        <div className="container">
          <div className="text-content">
            <div className="columns is-align-items-center is-flex-wrap-wrap">
              <div className="column is-half-desktop is-full">
                <div className="is-flex title-product is-align-items-center mb-6 mx-auto">
                  <figure className="image is-96x96">
                    <img
                      src={`${icons[data.icon]}`}
                      alt=""
                      className={`${data.icon}`}
                    />
                  </figure>
                  <div className="content-title">
                    <h1 className="has-text-black is-spaced">
                      {intl.formatMessage({ id: data.title })}
                    </h1>
                  </div>
                </div>
                <figure className="image is-hidden-desktop is-hidden-tablet">
                  <img src={`${images[data.image]}`} alt="" />
                </figure>
                <p className="subtitle has-text-black is-spaced">
                  {intl.formatMessage({ id: data.description })}
                </p>
                {/* <div className="list-wrapper">
                                    <ul className="list">
                                        {data.features.map((feature, index) =>
                                            <li key={index}>{intl.formatMessage({id: feature})}</li>
                                        )}
                                    </ul>
                                </div> */}

                {data.external_link ? (
                  <a
                    className="button is-rounded is-medium"
                    href={data.external_link}
                    target="_blank"
                  >
                    {intl.formatMessage({ id: "press.see_more" })}
                  </a>
                ) : (
                  <div className="button-container">
                    <PopupButton
                      id="bkXtFW"
                      className="button is-rounded is-medium is-black"
                      href="#implementar"
                    >
                      {intl.formatMessage({ id: "implementation" })}
                    </PopupButton>
                    <a className="button is-rounded is-medium" href={intl.formatMessage({ id: `${data.doslink}` })} target="_blank">
                      {intl.formatMessage({ id: "press.see_more" })}
                    </a>
                  </div>
                )}
              </div>
              <div className="column is-half-desktop is-full">
                <figure className="image is-hidden-mobile">
                  <img src={`${images[data.image]}`} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
