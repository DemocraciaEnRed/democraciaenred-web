import React from "react"
import "./style.scss"
import { useIntl, Link } from "gatsby-plugin-intl"

export default ({ data }) => {
    
    const intl = useIntl()

    const icons={
        gh:"fab fa-github",
        fb:"fab fa-facebook",
        ig:"fab fa-instagram",
        tw:"fab fa-twitter",
        ln: "fab fa-linkedin"
    }

    let icon;

    return (
        <section id={data.id} className=" section hero is-fullheight is-flex is-justify-content-center is-flex-direction-column">
            <div className="">
                <div className="container">
                    <div className="text-content">
                        <div className="columns is-align-items-center">
                            <div className="column is-half">
                                <div className="is-hidden-mobile">
                                    <div class='hex-container'>
                                        <div class='hex-container-inner'>
                                            <div class={`hex-container-inner-2 ${data.id}-bg`}></div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <div className="column is-half">

                                <h4 className="has-text-black title is-4 is-spaced is-size-2-desktop">{intl.formatMessage({id: data.title})}</h4>

                                <div className="is-hidden-desktop is-hidden-tablet is-flex is-justify-content-center">
                                    <div class='hex-container'>
                                        <div class='hex-container-inner'>
                                            <div class={`hex-container-inner-2 ${data.id}-bg`}></div>
                                        </div>
                                    </div> 
                                </div>

                                <h3 className="subtitle is-6 has-text-black is-spaced">{intl.formatMessage({id: data.subtitle})}</h3>
                                
                                <p className="subtitle is-6 has-text-black is-spaced">{intl.formatMessage({id: data.description})}</p>

                                <div>
                                    {data.socialmedia.map((media)=> 
                                    <a href={media.url} target="_blank">
                                        <span class="icon is-medium has-text-black ml-2">
                                            <i className={`${icons[media.icon]} fa-2x`}></i>
                                        </span>
                                    </a>
                                    )}
                                </div>                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    )
}