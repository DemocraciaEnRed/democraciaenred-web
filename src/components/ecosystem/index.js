import React from "react"
import "./style.scss"
import { useIntl, Link } from "gatsby-plugin-intl"
import { PopupButton } from '@typeform/embed-react'

import hexagono_green from "./assets/hexagono-green.png"
import hexagono_blue from "./assets/hexagono-blue.png"
import hexagono_orange from "./assets/hexagono-orange.png"
import hexagono_red from "./assets/hexagono-red.png"
import hexagono_purple from "./assets/hexagono-purple.png"
import hexagono_yellow from "./assets/hexagono-yellow.png"
import hex_blue_mobile from './assets/hex-blue-mobile.png'
import hex_orange_mobile from './assets/hex-orange-mobile.png'
import hex_purple_mobile from './assets/hex-purple-mobile.png'

export default ({data}) =>  {
    const intl = useIntl()

    const images={
        hexagono_blue,
        hexagono_green,
        hexagono_orange,
        hexagono_purple,
        hexagono_red,
        hexagono_yellow
    }

    const imagesMobile={
        hex_blue_mobile,
        hex_orange_mobile,
        hex_purple_mobile,
        hex_blue_mobile,
        hex_orange_mobile,
        hex_blue_mobile,
        hex_orange_mobile,
    }
    
    return (
        <section id="ecosystem" className="pt-6 ">
            <div className="section columns is-mobile container m-auto is-flex -is-align-items-start pl-0 pr-6">

                <div className="column is-hidden-mobile pt-6">
                    <figure className="image hexagono m-auto" >
                        <img src={images[data.image]} width="60%" alt="" />
                    </figure>
                </div>

                <div className="column hexagono-mobile-container is-one-third is-hidden-tablet pt-6">
                    <figure className="image hexagono m-auto" >
                        <img src={imagesMobile[data.imageMobile]} width="100%" alt="" />
                    </figure>
                </div>

                <div className="column is-flex is-flex-direction-column is-justify-content-center	">
                    <h1 className="my-6 has-text-black"><span className={`has-background-${data.color}`}>{intl.formatMessage({ id: data.title })}</span></h1>
                    <div className="content">
                        <ul>
                            {data.features.map((features, index)=>
                                <li className=" my-1 has-text-black" key={index}>{intl.formatMessage({ id: features })}</li>
                            )}
                        </ul>
                    </div>                    
                    <p className="has-text-black">
                        {
                            data.description?
                            `${intl.formatMessage({ id: data.description })}`:''
                        }
                    </p>
                    {data.link &&
                        <div className="button-container">
                            <Link 
                                className="button button-disabled-shadow has-no-background is-rounded is-medium is-black is-outlined is-uppercase is-inline-block" 
                                to={data.link}>
                                {intl.formatMessage({ id: "see_more" })}
                            </Link>
                        </div>
                    }
                    {data.popup &&
                        <div className="button-container">
                            <PopupButton id="fSqwwL" style={{ fontSize: 20 }} className="button button-disabled-shadow has-no-background is-rounded is-medium is-black is-outlined is-uppercase is-inline-block">{intl.formatMessage({ id: "see_more" })}</PopupButton>
                        </div>
                    }
                </div>

            </div>

        </section>
    )
}