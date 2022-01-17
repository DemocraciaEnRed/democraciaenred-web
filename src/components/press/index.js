import React from "react"
import { useIntl} from "gatsby-plugin-intl"
import "./style.scss"


//Logos
import openDemocracy from './assets/open-democracy.png'
import bbc from './assets/bbc.png'
import politicaOnline from './assets/politica-online.png'
import laCapital from './assets/la-capital.png'
import ambito from './assets/ambito.png'
import laNacion from './assets/la-nacion.png'
import popular from './assets/popular.png'
import radioCut from './assets/radio-cut.png'
import ted from './assets/ted.png'
import tn from './assets/tn.png'
import wired from './assets/wired.png'
import infobae from './assets/infobae.png'

const logos={
    openDemocracy,
    bbc,
    politicaOnline,
    laCapital,
    ambito,
    laNacion,
    popular,
    radioCut,
    ted,
    tn,
    wired,
    infobae
}

export default ({ data }) => {
    
    const intl = useIntl()

    return (
        <section id={data.id} className=" px-3 py-6 hero is-flex is-justify-content-center is-flex-direction-column">
            <div className="card mb-6">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                            <img src={logos[data.logo]} alt={data.name}/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <h2 className="is-4 has-text-black">
                            {intl.formatMessage({id: data.title})}
                            </h2>
                        </div>
                    </div>

                    <div className="content">
                    <p className=" is-4 has-text-black ">
                        {data.subtitle?`${intl.formatMessage({id: data.subtitle})}`:''}</p>
                        <a 
                            className="button button-disabled-shadow has-no-background is-rounded is-small  is-outlined is-uppercase is-inline-block mt-0" 
                            href={data.link} target="_blank">
                            {intl.formatMessage({ id: "see_more" })}
                        </a>
                    </div>
                </div>
            </div>              
        </section>
    )
}