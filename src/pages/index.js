import React from "react";
import "./styles.scss";
import Layout from "../components/layout";
import HeroSlider from "../components/hero-slider";
import heroSliderData from "../../content/hero-slider.json";
import QueHacemos from "../components/que-hacemos";
import Newsletter from "../components/newsletter";
import newsletterData from "../../content/newsletter.json";

if (typeof window !== "undefined") {
  const SmoothScroll = require("smooth-scroll");
  new SmoothScroll('a[href*="#"]');
}

const IndexPage = () => (
  <React.Fragment>
    <Layout>
      <HeroSlider slides={heroSliderData} />
      <QueHacemos />
      <Newsletter data={newsletterData} />
    </Layout>
  </React.Fragment>
);

export default IndexPage;
