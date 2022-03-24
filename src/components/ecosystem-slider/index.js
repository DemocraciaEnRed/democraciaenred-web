import React from "react";
import Slider from "react-slick";
import { useIntl } from "gatsby-plugin-intl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderSettings from "../slider-settings";
import EcosystemAnimated from "../ecosystrem-animated"

import "./style.scss";

import Ecosystem from "../ecosystem";

export default ({ slides }) => {
  const intl = useIntl();

  return (
    <section
      id="ecosystem"
      className="ecosystem-slider hero is-fullheight is-large is-primary is-bold con"
    >
      <div className="container title-section is-flex is-justify-content-space-between is-align-items-center p-6">
        <h1 className="has-text-black title">
          {intl.formatMessage({ id: slides.title })}
        </h1>
      </div>
      <EcosystemAnimated></EcosystemAnimated>
      <div>
        
      </div>
      <div className="is-hidden-desktop">
        <Slider {...sliderSettings}>
          {slides.ecosystem.map((ecosystem) => (
            <Ecosystem data={ecosystem} key={ecosystem.id} className="pt-6" />
          ))}
        </Slider>
      </div>
    </section>
  );
};
