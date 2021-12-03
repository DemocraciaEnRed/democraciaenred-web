import React from "react"
import Slider from "react-slick";
import { useIntl } from "gatsby-plugin-intl"
import sliderSettings  from "../slider-settings";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss"

import Lives from "../lives"


export default ({ slides }) =>  {
    const intl = useIntl()
    
    return (
        <section id="media-slider" className="media-slider hero is-fullheight is-large is-primary is-bold">
            <div className="title-section is-flex is-justify-content-space-between is-align-items-center	p-6">
                <h1 className="is-size-1 title">Prensa</h1>
            </div>
            <Slider {...sliderSettings} >
                {slides.map((live) => 
                    <Lives data={live} key={live.id} className="pt-6"/>
                )}
            </Slider>
        </section>
    )
}