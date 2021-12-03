import React from "react";
import Slider from "react-slick";
import { useIntl } from "gatsby-plugin-intl";

import slider1 from "./assets/slider1.jpg";
import slider2 from "./assets/slider2.jpg";
import slider3 from "./assets/slider3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import sliderSettings from "../slider-settings";

export default ({ slides }) => {
  const intl = useIntl();

  const images = {
    slider1: slider1,
    slider2: slider2,
    slider3: slider3,
  };

  const colors = {
    color1: "coral",
    color2: "green",
    color3: "blue",
  };

  return (
    <section
      id="hero-slider"
      className="hero is-fullheight is-small is-primary is-bold"
    >
      <Slider {...sliderSettings}>
        {slides.map((slider, index) => (
          <div key={index}>
            <div
              className={`hero-slider-item hero is-large item-${index}`}
              style={{
                backgroundImage: `url(${images[slider.data.bg_image]})`,
              }}
            >
              <div className="hero-body">
                <div className="container has-text-centered">
                  {slider.type === "text" ? (
                    <React.Fragment>
                      <h2
                        className={`title is-spaced is-size-1-desktop hero-slider-${slider.data.color}`}
                      >
                        {intl.formatMessage({ id: slider.data.title })}
                      </h2>
                      <h3 className="subtitle is-5 is-size-4-desktop">
                        {intl.formatMessage({ id: slider.data.subtitle })}
                      </h3>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <h2 className="title is-spaced is-size-1-desktop is-hidden-touch">
                        {intl.formatMessage({ id: slider.data.title })}
                      </h2>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};
