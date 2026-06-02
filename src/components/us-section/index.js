import React from "react"
import "./styles.scss"
import { useIntl } from "gatsby-plugin-intl"


export default ({ data }) =>  {
    const intl = useIntl()

    return (
        <section id="nosotros" className="section us-section pb-3 is-primary">
            <div className="">
                <div className="container columns">
                    <div className="column is-one-third-widescreen">
                    <h1 className="has-text-black title is-spaced  is-hidden-tablet ">
                            {intl.formatMessage({ id: data.title})}
                        </h1>
                        <div className="is-flex is-justify-content-center">
                            <div className='hex-container'>
                                <div className='hex-container-inner'>
                                    <div className="hex-container-inner-2 team-bg"></div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="column is-flex is-flex-direction-column is-justify-content-space-evenly">
                        <h1 className="has-text-black title is-spaced  is-hidden-mobile ">
                            {intl.formatMessage({ id: data.title})}
                        </h1>
                        <p className="has-text-black subtitle">
                            {intl.formatMessage({ id: data.subtitle_1})}
                        </p>
                        <p className="has-text-black subtitle">
                            {intl.formatMessage({ id: data.subtitle_2})}
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}