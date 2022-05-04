import React from "react"
import { useIntl } from "gatsby-plugin-intl"

const Claim = () =>  {
    const intl = useIntl()
    return(
        <section className="claim-section section has-background-grey-dark">
            <p className="subtitle has-text-white has-text-centered pb-6">
                {intl.formatMessage({ id: "claim" })}
            </p>            
        </section>
    )
}

export default Claim 