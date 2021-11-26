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
        <section id={data.id} className="px-3 py-6 hero is-flex is-justify-content-center is-flex-direction-column">
            <div className="container  is-align-items-center">
                <div className="is-flex">
                    <div className='hex-container'>
                        <div className='hex-container-inner'>
                            <div className={`hex-container-inner-2 ${data.id}-bg`}></div>
                        </div>
                    </div> 
                </div>
                <h1 className="has-text-black title is-spaced">{intl.formatMessage({id: data.title})}</h1>
                <h3 className="subtitle is-6 has-text-black is-spaced">{intl.formatMessage({id: data.subtitle})}</h3>
                <div className="mb-6">
                    {data.socialmedia.map((media)=> 
                    <a href={media.url} target="_blank">
                        <span className="icon is-medium has-text-black ml-2">
                            <i className={`${icons[media.icon]} fa-2x`}></i>
                        </span>
                    </a>
                    )}
                </div>      
            </div>              
        </section>
    )
}