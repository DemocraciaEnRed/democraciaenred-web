import React from "react"
import "./styles.scss"
import { useIntl, Link } from "gatsby-plugin-intl"
import { PopupButton } from '@typeform/embed-react'

export default ({ data }) => {
    const intl = useIntl()

    return (
        <section id={data.id} className="hero section single-live-slide">
            <div className="hero-body pt-5">
                <div className="container">
                    <div className="text-content">
                        <div className="columns is-variable is-8 is-align-items-start">
                            <div className="column is-7">
                                <div className=" is-hidden-mobile iframe-container">
                                    <iframe width='100%' height='100%' src={data.video} title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen className="responsive-iframe"></iframe>
                                    </div>
                                </div>
                            <div className="column is-5">

                                <h4 className="has-text-black title is-spaced mb-6">{intl.formatMessage({id: data.title})}</h4>
                                <div className="is-hidden-desktop is-hidden-tablet iframe-container mb-6">
                                    <iframe width='560' height='315' src={data.video} title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen className="responsive-iframe"></iframe>
                                </div>
                                <p className="has-text-black is-spaced">{intl.formatMessage({id: data.description})}</p>

                                <div className="button-container ">
                                    <Link className="button is-rounded is-medium is-inline-block mx-auto" to={data.link}>{intl.formatMessage({ id: "see_more" })}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    )
}