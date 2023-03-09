import React from "react";
import Slider from "react-slick";
import { useIntl } from "gatsby-plugin-intl";
import "./style.scss";
import sliderSettings from "../slider-settings-product/index";

import DemocracyosProduct from "../product/DemocracyosProduct";
import Product from "../product";

export default ({ firstSlide, slides }) => {
  const intl = useIntl();

  return (
    <section id="slider-product" className="hero is-fullheight is-large is-primary is-bold has-background-dark products-slider">
      <Slider {...sliderSettings}>
        <DemocracyosProduct data={firstSlide} otherProducts={slides} />
        {slides.map((product, index) => (
          <Product data={product} key={index} />
        ))}
      </Slider>
    </section>
  );
};
