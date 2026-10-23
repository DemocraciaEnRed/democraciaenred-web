import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { useIntl } from "gatsby-plugin-intl";

import slider1 from "./assets/slider1.jpg";
import slider2 from "./assets/slider2.jpg";
import slider3 from "./assets/slider3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import sliderSettings from "../slider-settings";

const heroSliderSettings = {
  ...sliderSettings,
  autoplay: true,
  autoplaySpeed: 2500,
  infinite: true,
};

export default ({ slides }) => {
  const intl = useIntl();
  const sliderRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const togglePause = () => {
    if (paused) {
      sliderRef.current.slickPlay();
    } else {
      sliderRef.current.slickPause();
    }
    setPaused((p) => !p);
  };

  const images = {
    slider1: slider1,
    slider2: slider2,
    slider3: slider3,
  };

  return (
    <section
      id="hero-slider"
      className="hero is-fullheight is-small is-primary is-bold"
    >
      <Slider ref={sliderRef} {...heroSliderSettings}>
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
      <button className="hero-slider-pause" onClick={togglePause} aria-label={paused ? "Reanudar" : "Pausar"}>
        {paused ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20" height="20">
            <path d="M8 5v14l11-7z"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20" height="20">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        )}
      </button>
    </section>
  );
};
