import React from "react"
import {useIntl} from "gatsby-plugin-intl"
import "./style.scss"
import ResourcesMansonery from '../resources-mansonery'


export default ({resources}) =>  {
    
    const intl = useIntl()

    return (
        <section id="resources">
            <div className="columns mt-0 section has-background-dark-grey mb-0 pb-6">
                <div className="column">
                    <h1 className="has-text-white title is-spaced mb-6">{intl.formatMessage({id: resources.title})}</h1>
                    <h2 className="has-text-white is-spaced mb-6">{intl.formatMessage({id: resources.description})}</h2>
                    <h2 className="has-text-yellow  is-spaced mb-6">{intl.formatMessage({id: resources.subtitle})}</h2>
                </div>
                <div className="column"></div>
            </div>
            <ResourcesMansonery resources={resources}/>
        </section>
    )
}