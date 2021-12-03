import React from "react"
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss"
import sliderSettings  from "../slider-settings";

import Lives from "../lives"

import LogoLive from './assets/der-live.png'

export default ({ slides }) =>  {  
    return (
        <section id="live-slider" className="live-slider hero is-fullheight is-large is-primary is-bold">
            <div className="title-section is-flex is-justify-content-space-between is-align-items-center	p-6">
                <figure className="image is-flex is-align-content-center live-image">
                    <img src={LogoLive} alt="Logo Democracia en Red en Vivo" />
                </figure>
                <h1 className="is-size-1 is-hidden-mobile">#VIVOS</h1>
            </div>
            <Slider {...sliderSettings} >
                {slides.map((live) => 
                    <Lives data={live} key={live.id} className="pt-6"/>
                )}
            </Slider>
        </section>
    )
}   