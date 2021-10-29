import React from "react"
import "./styles.scss"
import { useIntl } from "gatsby-plugin-intl"
import { PopupButton } from '@typeform/embed-react'


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
                            <div class='hex-container'>
                                <div class='hex-container-inner'>
                                    <div class={`hex-container-inner-2 ${data.id}-bg`}></div>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="column">
                        <h1 className="has-text-black title is-spaced  is-hidden-mobile ">
                            {intl.formatMessage({ id: data.title})}
                        </h1>
                        <p className="has-text-black subtitle">
                            {intl.formatMessage({ id: data.subtitle_1})}
                        </p>
                        <p className="has-text-black subtitle">
                            {intl.formatMessage({ id: data.subtitle_2})}
                        </p>
                        <PopupButton id="bkXtFW" className="button ml-0 is-rounded is-medium is-black" href="{data.link}">{intl.formatMessage({ id:data.text_link })}</PopupButton>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}