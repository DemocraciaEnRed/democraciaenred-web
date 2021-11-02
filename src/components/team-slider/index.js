import React from "react"
import Slider from "react-slick";
import { useIntl } from "gatsby-plugin-intl"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss"

import Team from "../team"


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
        slidesToShow: 3,
        slidesToScroll: 3,
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 840,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              }

        ]
    }

    
    return (
        <section id="team-slider" className="px-6 team-slider pb-6 hero is-fullheight-deesktop is-large is-primary">
            <h1 className="pl-6 mb-0 mt-6 our-team title has-text-black">Nuestro equipo</h1>
            <Slider {...sliderSettings} >
                {slides.map((team) => 
                    <Team data={team} key={team.id} className="pt-6"/>
                )}
            </Slider>
        </section>
    )
}