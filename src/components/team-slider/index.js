import React from "react"
import Slider from "react-slick";
import { useIntl } from "gatsby-plugin-intl"
import "./style.scss"
import sliderSettings from "../slider-settings";

import Team from "../team"

export default ({ slides,title }) =>  {
    const intl = useIntl()
    const sliderSettingsWith3 = {
      ...sliderSettings,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: false,
      responsive: [
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ]
    }

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }    
    
    return (
        <section id="team-slider" className="px-6 team-slider pb-6 hero is-fullheight-deesktop is-large is-primary">
            <h1 className="pl-6 mb-0 mt-6 our-team title has-text-black">{intl.formatMessage({ id: title.slider_title})}</h1>
            <Slider {...sliderSettingsWith3} >
                {/* {slides.slice(0, 4).map((team, index) => 
                    <Team data={team} key={index} className="pt-6"/>
                )}
                {shuffleArray(slides.slice(5, 13)).map((team, index) => 
                    <Team data={team} key={index} className="pt-6"/>
                )}
                {slides.slice(14).map((team, index) => 
                    <Team data={team} key={index} className="pt-6"/>
                )} */}

                {slides.map((team, index) => 
                    <Team data={team} key={index} className="pt-6"/>
                )}                
            </Slider>
        </section>
    )
}