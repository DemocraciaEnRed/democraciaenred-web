import React from 'react'
import { useIntl } from "gatsby-plugin-intl";

import ProductButtons from './ProductButtons';

import democracia_os_icon from "./assets/Icono_DemocraciaOS.png";

const DemocracyosProduct = ({ data, otherProducts }) => {
    const intl = useIntl();

    const icons = {
        democracia_os: democracia_os_icon,
      };

    return (
        <section
            id={data.id}
            className={`hero section product product-${data.color} first-slide`}
        >
            <div className="hero-body">
                <div className="container-fluid">
                    <div className="text-content">
                        <div className="columns is-align-items-center is-flex-wrap-wrap">
                            <div className="column is-full">
                                <div className="is-flex title-product is-align-items-center mb-5 mx-auto">
                                    <div className="content-title">
                                        <h1 className="has-text-black is-spaced">
                                            {intl.formatMessage({ id: data.first_slide_title })}
                                        </h1>
                                    </div>
                                </div>
                                <span className="subtitle has-text-black has-text-weight-light is-spaced">
                                    {intl.formatMessage({ id: data.first_slide_description_1 })}
                                </span>
                                <p className="subtitle has-text-black is-spaced">
                                    {intl.formatMessage({ id: data.first_slide_description_2 })}
                                </p>
                                <div className='columns first-slide-buttons-array is-mobile is-centered is-multiline is-8'>
                                    {otherProducts.map(product => {
                                        return(
                                            <ProductButtons data={product}/>
                                        )
                                    })}
                                </div>
                                <a className="button is-rounded is-medium" href={data.external_link} target="_blank">
                                    {intl.formatMessage({ id: data.first_slide_see_more })}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DemocracyosProduct
