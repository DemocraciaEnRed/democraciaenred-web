import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import './style.scss'

const UsHeader = ({ data }) =>  {
    const intl = useIntl()
    return(
        <section className="us-header hero is-large " >
            <div className="hero-body has-text-centered is-flex-mobile is-justify-content-center is-flex-direction-column">
                <h1 className="is-spaced has-text-dark mb-5" >{intl.formatMessage({ id: data.title })}</h1>
                <p className="mx-auto subtitle has-text-dark">
                    {intl.formatMessage({ id: data.subtitle })}
                </p>
            </div>
        </section>
    )
}

export default UsHeader 