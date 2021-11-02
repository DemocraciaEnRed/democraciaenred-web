import React from 'react'
import { useIntl, Link } from "gatsby-plugin-intl"

 const ResourcesHeader= ({data})=>{
    const intl = useIntl()
    return (
        <section id="resources">
            <div className="columns mt-0 section has-background-dark-grey mb-0 pb-6">
                <div className="column">
                    <h1 className="has-text-yellow is-spaced mb-6">{intl.formatMessage({id: data.subtitle})}</h1>
                    <Link 
                            className="button button-disabled-shadow has-no-background is-rounded is-medium is-warning is-outlined is-uppercase is-inline-block" 
                            to=''>
                            {intl.formatMessage({ id: "see_more" })}
                        </Link>
                </div>
                <div className="column"></div>
            </div>
        </section>
    )

}

export default ResourcesHeader