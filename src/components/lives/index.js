import React from "react"
import "./styles.scss"
import { useIntl} from "gatsby-plugin-intl"

export default ({ data }) => {
    const intl = useIntl()

    return (
        <section id={data.id} className="hero section single-live-slide">
            <div className="hero-body pt-5">
                <div className="container">
                    <div className="text-content">
                        <div className="columns is-variable is-8 is-align-items-start is-flex-wrap-wrap">
                            <div className="column is-7-desktop is-full">
                                <div className=" is-hidden-mobile iframe-container">
                                    <iframe width='100%' height='100%' src={data.video} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen className="responsive-iframe"></iframe>
                                    </div>
                                </div>
                            <div className="column is-5-desktop is-full">

                                <h4 className="has-text-black title is-spaced mb-6">{intl.formatMessage({id: data.title})}</h4>
                                <div className="is-hidden-desktop is-hidden-tablet iframe-container mb-6">
                                    <iframe width='560' height='315' src={data.video} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen className="responsive-iframe"></iframe>
                                </div>
                                <p className="has-text-black is-spaced">{intl.formatMessage({id: data.description})}</p>

                                <div className="button-container ">
                                    <a className="button is-rounded is-medium is-inline-block mx-auto" href={data.link} target="_blank">{intl.formatMessage({ id: "press.see_more" })}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    )
}