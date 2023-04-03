import React from 'react'
import { useIntl, Link } from 'gatsby-plugin-intl';
// import Slider from 'react-slick';
import presupuesto_participativo_icon from "./assets/Icono_PresupuestoParticipativo.png";
import co_construccion_icon from "./assets/Icono_CoConstrusccionLeyes.png";
import consulta_publica_icon from "./assets/Icono_ConsultasDigitales.png";
import seguimiento_metas_icon from "./assets/Icono_SeguimientoMetas.png";


const ProductButtons = ({ data, sliderRef }) => {
    const intl = useIntl()

    const icons = {
        consulta_publica: consulta_publica_icon,
        co_construccion: co_construccion_icon,
        presupuesto_participativo: presupuesto_participativo_icon,
        seguimiento_metas: seguimiento_metas_icon,
    };

    return (
        <div className="column is-3-desktop is-5-touch">
            <div class="is-clickable" onClick={()=>sliderRef.current.slickGoTo(data.slideNum)}>
                <figure className={`image is-96x96 m-auto product-${data.color} button-shadow`}>
                    <img
                        src={`${icons[data.icon]}`}
                        alt=""
                        className={`${data.icon}`}
                    />
                </figure>
            </div>
            <p className="has-text-black is-spaced has-text-centered mt-4 mx-auto">
                {intl.formatMessage({ id: data.title })}
            </p>
        </div>
    )
}

export default ProductButtons