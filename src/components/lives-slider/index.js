import React from "react"
import Slider from "react-slick";
import { useIntl } from "gatsby-plugin-intl"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss"

import Lives from "../lives"

import LogoLive from './assets/der-live.png'

const PrevArrow = ({ className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.44 22.05">
                <g>
                    <g>
                        <polyline fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2px" points="11.73 21.34 5.38 14.99 1.41 11.03 11.73 0.71"/>
                    </g>
                </g>
            </svg>
        </button>
    );
}

const NextArrow = ({ className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.44 22.05">
                <g>
                    <g>
                        <polyline fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="2px" points="0.71 0.71 11.03 11.03 5.89 16.16 0.71 21.34"/>
                    </g>
                </g>
            </svg>      
        </button>
    );
}

export default ({ slides }) =>  {
    const intl = useIntl()

    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    
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