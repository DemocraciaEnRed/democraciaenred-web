import React from "react"
import { useIntl } from "gatsby-plugin-intl"

const InternalPageHero = ({ data }) =>  {
    const intl = useIntl()
    return(
        <section className="hero is-medium has-background-black" >
            <div className="hero-body has-text-centered is-flex-mobile is-justify-content-center is-flex-direction-column">
                <h1 className="is-spaced has-text-yellow mb-5" >{intl.formatMessage({ id: data.title })}</h1>
                <p className="mx-auto subtitle has-text-white">
                    {intl.formatMessage({ id: data.description })}
                </p>
            </div>
        </section>
    )
}
export default InternalPageHero 