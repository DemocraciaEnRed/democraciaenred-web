import React from "react";
import Slider from "react-slick";
import { useIntl } from "gatsby-plugin-intl";
import "./style.scss";
import sliderSettings from "../slider-settings";

import Press from "../press";

export default ({ slides }) => {
  const intl = useIntl();
  sliderSettings.slidesToShow = 3;
  sliderSettings.slidesToScroll = 3;
  sliderSettings.responsive = [
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ];

  return (
    <section
      id="press-slider"
      className="section press-slider pb-6 hero is-fullheight-deesktop has-background-yellow"
    >
      <h1 className="pl-6 mb-0 mt-6 our-press title has-text-black">
        {intl.formatMessage({ id: slides.title })}
      </h1>
      <Slider {...sliderSettings}>
        {slides.press.map((press) => (
          <Press data={press} key={press.id} className="pt-6" />
        ))}
      </Slider>
    </section>
  );
};
