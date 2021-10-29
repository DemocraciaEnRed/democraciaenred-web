import React from "react"
import { useIntl } from "gatsby-plugin-intl"

const Mision = ({ data }) =>  {
    const intl = useIntl()
    return(
        <section class="mision-section section has-background-grey-dark">
            <div class="mb-6">
                <h2 className="title is-spaced has-text-green" >{intl.formatMessage({ id: data.mision_values.title })}</h2>
                <p class="subtitle has-text-white pb-6">
                    {intl.formatMessage({ id: data.mision_values.description })}
                </p>
            </div>
            <div class="my-6">
                <h2 className="title is-spaced has-text-green" >{intl.formatMessage({ id: data.mision_approach.title })}</h2>
                <p class="subtitle has-text-white">
                    {intl.formatMessage({ id: data.mision_approach.description })}
                </p>
            </div>
        </section>
    )
}

export default Mision 