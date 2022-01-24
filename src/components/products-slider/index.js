import React from "react";
import Slider from "react-slick";
import { useIntl } from "gatsby-plugin-intl";
import "./style.scss";
import sliderSettings from "../slider-settings";

import Product from "../product";

export default ({ slides }) => {
  const intl = useIntl();
    
  return (
    <section id="slider-product" className="hero is-fullheight is-large is-primary has-background-dark s-bold products-slider">
      <Slider {...sliderSettings}>
        {slides.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </Slider>
    </section>
  );
};
